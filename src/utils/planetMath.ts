import * as THREE from "three";

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
  planetRadius = 50,
}: PlanetPositionProps) {
  const radius = planetRadius + heightOffset;

  // Planet's initial rotation (Keep this consistent across all models)
  const planetRotation = new THREE.Euler(0.3, 2.5, 0.5);
  const planetQuaternion = new THREE.Quaternion().setFromEuler(planetRotation);
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
}
