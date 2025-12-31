"use client";

import { useGLTF } from "@react-three/drei";
import { PlanetObject } from "./PlanetObject";
import { MODEL_PATHS, ROSE_CONFIG } from "@/constants/planet";

export function Rose() {
  return (
    <PlanetObject
      modelPath={MODEL_PATHS.rose}
      scale={ROSE_CONFIG.scale}
      latitude={ROSE_CONFIG.latitude}
      longitude={ROSE_CONFIG.longitude}
      heightOffset={ROSE_CONFIG.heightOffset}
    />
  );
}

useGLTF.preload(MODEL_PATHS.rose);
