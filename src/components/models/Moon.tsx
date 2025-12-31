"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Rose } from "./Rose";
import { Character } from "./Character";
import { Fox } from "./Fox";
import {
  MODEL_PATHS,
  PLANET_POSITION,
  PLANET_ROTATION,
  PLANET_SCALE,
  PLANET_ANIMATION,
  PLANET_MATERIAL,
} from "@/constants/planet";

export function Moon() {
  const groupRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF(MODEL_PATHS.planet);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: PLANET_MATERIAL.color,
          roughness: PLANET_MATERIAL.roughness,
          metalness: PLANET_MATERIAL.metalness,
          flatShading: false,
          emissive: PLANET_MATERIAL.emissive,
          emissiveIntensity: PLANET_MATERIAL.emissiveIntensity,
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y =
      PLANET_ROTATION.y +
      Math.sin(time * PLANET_ANIMATION.ySpeed) * PLANET_ANIMATION.maxYAngle;

    groupRef.current.rotation.x =
      PLANET_ROTATION.x +
      Math.sin(time * PLANET_ANIMATION.xSpeed) * PLANET_ANIMATION.maxXAngle;

    groupRef.current.position.y =
      PLANET_POSITION.y +
      Math.sin(time * PLANET_ANIMATION.bobSpeed) * PLANET_ANIMATION.bobAmount;
  });

  return (
    <group
      ref={groupRef}
      position={[PLANET_POSITION.x, PLANET_POSITION.y, PLANET_POSITION.z]}
      rotation={[PLANET_ROTATION.x, PLANET_ROTATION.y, PLANET_ROTATION.z]}
    >
      <primitive object={scene} scale={PLANET_SCALE} />
      <Rose />
      <Character />
      <Fox />
    </group>
  );
}

useGLTF.preload(MODEL_PATHS.planet);
