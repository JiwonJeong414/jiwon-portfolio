"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  createStarGeometry,
  generateStarData,
  STAR_COLORS,
} from "@/utils/starMath";
import { STARFIELD_ANIMATION } from "@/constants/scene";
import { StarData } from "@/types";

export interface StarProps {
  data: StarData;
  geometry: THREE.ExtrudeGeometry;
}

function Star({ data, geometry }: StarProps) {
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

export interface StarFieldProps {
  count?: number;
}

const DEFAULT_STAR_COUNT = 200;

export function StarField({ count = DEFAULT_STAR_COUNT }: StarFieldProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const starGeometry = useMemo(() => createStarGeometry(), []);
  const [starsData] = useState(() => generateStarData(count));

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y =
      Math.sin(time * STARFIELD_ANIMATION.ySpeed) *
      STARFIELD_ANIMATION.maxYAngle;

    groupRef.current.rotation.x =
      Math.sin(time * STARFIELD_ANIMATION.xSpeed) *
      STARFIELD_ANIMATION.maxXAngle;
  });

  return (
    <group ref={groupRef}>
      {starsData.map((star, i) => (
        <Star key={i} data={star} geometry={starGeometry} />
      ))}
    </group>
  );
}
