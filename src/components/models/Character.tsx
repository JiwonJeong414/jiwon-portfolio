"use client";

import { useGLTF } from "@react-three/drei";
import { PlanetObject } from "./PlanetObject";
import { MODEL_PATHS, CHARACTER_CONFIG } from "@/constants/planet";

export function Character() {
  return (
    <PlanetObject
      modelPath={MODEL_PATHS.prince}
      scale={CHARACTER_CONFIG.scale}
      latitude={CHARACTER_CONFIG.latitude}
      longitude={CHARACTER_CONFIG.longitude}
      heightOffset={CHARACTER_CONFIG.heightOffset}
      faceRotation={CHARACTER_CONFIG.faceRotation}
    />
  );
}

useGLTF.preload(MODEL_PATHS.prince);
