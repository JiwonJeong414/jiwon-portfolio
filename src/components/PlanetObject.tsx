"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import {
  calculateSurfaceTransform,
  PlanetPositionProps,
} from "../utils/planetMath";

interface PlanetObjectProps extends PlanetPositionProps {
  modelPath: string;
  scale: number;
}

export function PlanetObject({
  modelPath,
  scale,
  latitude,
  longitude,
  heightOffset,
  faceRotation,
  planetRadius,
}: PlanetObjectProps) {
  const { scene } = useGLTF(modelPath);

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const { position, rotation } = useMemo(
    () =>
      calculateSurfaceTransform({
        latitude,
        longitude,
        heightOffset,
        faceRotation,
        planetRadius,
      }),
    [latitude, longitude, heightOffset, faceRotation, planetRadius]
  );

  return (
    <primitive
      object={clonedScene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}
