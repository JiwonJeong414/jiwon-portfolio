import * as THREE from "three";
import { PLANET_RADIUS, PLANET_ROTATION } from "@/constants/planet";

export interface PlanetPositionProps {
  latitude: number;
  longitude: number;
  heightOffset?: number;
  faceRotation?: number;
  planetRadius?: number;
}

export function calculateSurfaceTransform({
  latitude,
  longitude,
  heightOffset = 0,
  faceRotation = 0,
  planetRadius = PLANET_RADIUS,
}: PlanetPositionProps) {
  const radius = planetRadius + heightOffset;

  const planetRotation = new THREE.Euler(
    PLANET_ROTATION.x,
    PLANET_ROTATION.y,
    PLANET_ROTATION.z,
  );
  const planetQuaternion = new THREE.Quaternion().setFromEuler(planetRotation);
  const inverseQuaternion = planetQuaternion.clone().invert();

  const latRad = THREE.MathUtils.degToRad(latitude);
  const lonRad = THREE.MathUtils.degToRad(longitude);
  const faceRad = THREE.MathUtils.degToRad(faceRotation);

  const targetPos = new THREE.Vector3(
    radius * Math.cos(latRad) * Math.sin(lonRad),
    radius * Math.sin(latRad),
    radius * Math.cos(latRad) * Math.cos(lonRad),
  );

  targetPos.applyQuaternion(inverseQuaternion);

  const up = new THREE.Vector3(0, 1, 0);
  const normal = targetPos.clone().normalize();
  const surfaceQuaternion = new THREE.Quaternion().setFromUnitVectors(
    up,
    normal,
  );

  const faceQuaternion = new THREE.Quaternion().setFromAxisAngle(
    normal,
    faceRad,
  );
  surfaceQuaternion.premultiply(faceQuaternion);

  const finalRotation = new THREE.Euler().setFromQuaternion(surfaceQuaternion);

  return {
    position: [targetPos.x, targetPos.y, targetPos.z],
    rotation: [finalRotation.x, finalRotation.y, finalRotation.z],
  };
}
