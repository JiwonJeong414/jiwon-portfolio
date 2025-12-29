// components/Fox.tsx
"use client";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function Fox() {
  const { scene } = useGLTF("../models/fox.glb");

  // CHANGE THESE VALUES TO POSITION THE FOX
  const latitude = 80;
  const longitude = 55;
  const heightOffset = 2;
  const faceRotation = 40; // 0=forward, 90=right, 180=backward, 270=left

  const { position, rotation } = useMemo(() => {
    const radius = 50 + heightOffset;

    // Planet's initial rotation
    const planetRotation = new THREE.Euler(0.3, 2.5, 0.5);
    const planetQuaternion = new THREE.Quaternion().setFromEuler(
      planetRotation
    );
    const inverseQuaternion = planetQuaternion.clone().invert();

    // Convert degrees to radians
    const latRad = (latitude * Math.PI) / 180;
    const lonRad = (longitude * Math.PI) / 180;
    const faceRad = (faceRotation * Math.PI) / 180;

    // Spherical to Cartesian
    const targetPos = new THREE.Vector3(
      radius * Math.cos(latRad) * Math.sin(lonRad),
      radius * Math.sin(latRad),
      radius * Math.cos(latRad) * Math.cos(lonRad)
    );

    // Apply inverse rotation
    targetPos.applyQuaternion(inverseQuaternion);

    // Calculate rotation to stand upright on planet surface
    const up = new THREE.Vector3(0, 1, 0);
    const normal = targetPos.clone().normalize();
    const surfaceQuaternion = new THREE.Quaternion().setFromUnitVectors(
      up,
      normal
    );

    // Add face rotation (spin around the surface normal)
    const faceQuaternion = new THREE.Quaternion().setFromAxisAngle(
      normal,
      faceRad
    );
    surfaceQuaternion.premultiply(faceQuaternion);

    const finalRotation = new THREE.Euler().setFromQuaternion(
      surfaceQuaternion
    );

    return {
      position: [targetPos.x, targetPos.y, targetPos.z] as [
        number,
        number,
        number
      ],
      rotation: [finalRotation.x, finalRotation.y, finalRotation.z] as [
        number,
        number,
        number
      ],
    };
  }, [latitude, longitude, heightOffset, faceRotation]);

  return (
    <primitive
      object={scene}
      scale={1.2} // Adjust based on model size
      position={position}
      rotation={rotation}
    />
  );
}

useGLTF.preload("../models/fox.glb");
