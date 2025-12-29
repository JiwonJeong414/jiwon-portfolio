"use client";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function Rose() {
  const { scene } = useGLTF("../models/rose.glb");

  // CHANGE THESE TWO VALUES TO MOVE THE ROSE AROUND THE PLANET
  const latitude = 70; // 0 = equator, 90 = north pole, -90 = south pole
  const longitude = -80; // 0 = front, 90 = right, -90 = left, 180 = back

  const { position, rotation } = useMemo(() => {
    const radius = 50;

    // Planet's initial rotation
    const planetRotation = new THREE.Euler(0.3, 2.5, 0.5);
    const planetQuaternion = new THREE.Quaternion().setFromEuler(
      planetRotation
    );
    // Invert it to compensate
    const inverseQuaternion = planetQuaternion.clone().invert();

    // Convert degrees to radians
    const latRad = (latitude * Math.PI) / 180;
    const lonRad = (longitude * Math.PI) / 180;

    // Spherical to Cartesian (where we WANT it to appear)
    const targetPos = new THREE.Vector3(
      radius * Math.cos(latRad) * Math.sin(lonRad),
      radius * Math.sin(latRad),
      radius * Math.cos(latRad) * Math.cos(lonRad)
    );

    // Apply inverse rotation to get actual position needed
    targetPos.applyQuaternion(inverseQuaternion);

    // Calculate rotation to point outward from surface
    const up = new THREE.Vector3(0, 1, 0);
    const normal = targetPos.clone().normalize();
    const rotationQuaternion = new THREE.Quaternion().setFromUnitVectors(
      up,
      normal
    );
    const finalRotation = new THREE.Euler().setFromQuaternion(
      rotationQuaternion
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
  }, [latitude, longitude]);

  return (
    <primitive
      object={scene}
      scale={0.1}
      position={position}
      rotation={rotation}
    />
  );
}

useGLTF.preload("../models/rose.glb");
