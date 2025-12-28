"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Moon() {
  const groupRef = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("../models/planet.glb");

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
  });

  // Pick your planet! Change the number (1-10) to try different ones
  const planetMesh = nodes.Toy_Planet_4_Toy_Planets_0 as THREE.Mesh;

  return (
    <group ref={groupRef} position={[0, -60, -50]}>
      <mesh
        geometry={planetMesh.geometry}
        material={materials.Toy_Planets}
        scale={0.5}
      />
    </group>
  );
}

useGLTF.preload("../models/planet.glb");
