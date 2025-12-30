import * as THREE from "three";
import type { PlanetPositionProps } from "../components/models/PlanetObject";
import { PLANET_RADIUS, PLANET_ROTATION } from "../constants";

export function calculateSurfaceTransform({
  latitude,
  longitude,
  heightOffset = 0,
  faceRotation = 0,
  planetRadius = PLANET_RADIUS,
}: PlanetPositionProps) {
  const radius = planetRadius + heightOffset;

  // Planet's initial rotation (consistent across all models)
  const planetRotation = new THREE.Euler(
    PLANET_ROTATION.x,
    PLANET_ROTATION.y,
    PLANET_ROTATION.z
  );
  const planetQuaternion = new THREE.Quaternion().setFromEuler(planetRotation);
  const inverseQuaternion = planetQuaternion.clone().invert();

  // Convert degrees to radians
  const latRad = THREE.MathUtils.degToRad(latitude);
  const lonRad = THREE.MathUtils.degToRad(longitude);
  const faceRad = THREE.MathUtils.degToRad(faceRotation);

  // Spherical to Cartesian
  const targetPos = new THREE.Vector3(
    radius * Math.cos(latRad) * Math.sin(lonRad),
    radius * Math.sin(latRad),
    radius * Math.cos(latRad) * Math.cos(lonRad)
  );

  // Apply inverse rotation so the object moves with the planet
  targetPos.applyQuaternion(inverseQuaternion);

  // Calculate rotation to stand upright
  const up = new THREE.Vector3(0, 1, 0);
  const normal = targetPos.clone().normalize();
  const surfaceQuaternion = new THREE.Quaternion().setFromUnitVectors(
    up,
    normal
  );

  // Add face rotation (spinning on its own axis)
  const faceQuaternion = new THREE.Quaternion().setFromAxisAngle(
    normal,
    faceRad
  );
  surfaceQuaternion.premultiply(faceQuaternion);

  const finalRotation = new THREE.Euler().setFromQuaternion(surfaceQuaternion);

  return {
    position: [targetPos.x, targetPos.y, targetPos.z],
    rotation: [finalRotation.x, finalRotation.y, finalRotation.z],
  };
}
