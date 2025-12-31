"use client";

import { useGLTF } from "@react-three/drei";
import { PlanetObject } from "./PlanetObject";
import { MODEL_PATHS, FOX_CONFIG } from "../../constants";

export function Fox() {
  return (
    <PlanetObject
      modelPath={MODEL_PATHS.fox}
      scale={FOX_CONFIG.scale}
      latitude={FOX_CONFIG.latitude}
      longitude={FOX_CONFIG.longitude}
      heightOffset={FOX_CONFIG.heightOffset}
      faceRotation={FOX_CONFIG.faceRotation}
    />
  );
}

useGLTF.preload(MODEL_PATHS.fox);
