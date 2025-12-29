"use client";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Rose } from "./Rose";

export function Moon() {
  const groupRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("../models/planet_one.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#8888aa",
          roughness: 0.7,
          metalness: 0.2,
          flatShading: false,
          emissive: "#333344",
          emissiveIntensity: 0.3,
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Gentle sway left/right (±10 degrees)
    const maxYAngle = 10 * (Math.PI / 180);
    groupRef.current.rotation.y = 2.5 + Math.sin(time * 0.2) * maxYAngle;
    //                           ↑ base rotation (keeps the "good side" facing front)

    // Subtle tilt forward/back (±5 degrees)
    const maxXAngle = 5 * (Math.PI / 180);
    groupRef.current.rotation.x = 0.3 + Math.sin(time * 0.15) * maxXAngle;
    //                           ↑ base tilt

    // Floating up/down motion
    groupRef.current.position.y = -60 + Math.sin(time * 0.3) * 1.5;
  });

  return (
    <group ref={groupRef} position={[0, -60, -50]} rotation={[0.3, 2.5, 0.5]}>
      {/* Planet */}
      <primitive object={scene} scale={50} />

      {/* Rose on top */}
      <Rose />
    </group>
  );
}

useGLTF.preload("../models/planet_one.glb");
