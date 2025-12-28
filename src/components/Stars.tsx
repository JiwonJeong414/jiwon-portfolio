"use client";
import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  createStarGeometry,
  generateStarData,
  STAR_COLORS,
  type StarData,
} from "../utils/star-utils";

function Star({
  data,
  geometry,
}: {
  data: StarData;
  geometry: THREE.ExtrudeGeometry;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const color = STAR_COLORS[data.colorIndex];

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const flicker = Math.sin(time * data.flickerSpeed + data.phase) * 0.35;
    (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
      (1 + flicker) * 1.5;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={data.position}
      rotation={[0, 0, data.rotation]}
      scale={data.scale}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

export function StarField({ count = 150 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const starGeometry = useMemo(() => createStarGeometry(), []);
  const [starsData] = useState(() => generateStarData(count));

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Horizontal sway
    const maxYAngle = 10 * (Math.PI / 180);
    groupRef.current.rotation.y = Math.sin(time * 0.3) * maxYAngle;

    // Subtle vertical tilt
    const maxXAngle = 5 * (Math.PI / 180);
    groupRef.current.rotation.x = Math.sin(time * 0.2) * maxXAngle;
  });

  return (
    <group ref={groupRef}>
      {starsData.map((star, i) => (
        <Star key={i} data={star} geometry={starGeometry} />
      ))}
    </group>
  );
}
