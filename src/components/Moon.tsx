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

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.position.y = -60 + Math.sin(time * 0.3) * 0.3;
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
