"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { StarField } from "./Stars";
import { Moon } from "../models";
import {
  CAMERA_CONFIG,
  LIGHT_CONFIG,
  BLOOM_CONFIG,
  SCENE_COLORS,
} from "../../constants";

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f]">
      <Canvas
        camera={{
          position: CAMERA_CONFIG.position,
          fov: CAMERA_CONFIG.fov,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.NoToneMapping,
        }}
      >
        <color attach="background" args={[SCENE_COLORS.background]} />

        {/* Lighting */}
        <ambientLight intensity={LIGHT_CONFIG.ambient.intensity} />
        <pointLight
          position={LIGHT_CONFIG.point.position}
          intensity={LIGHT_CONFIG.point.intensity}
          color={LIGHT_CONFIG.point.color}
        />
        <directionalLight
          position={LIGHT_CONFIG.directional.position}
          intensity={LIGHT_CONFIG.directional.intensity}
        />

        {/* Stars */}
        <StarField />

        {/* Planet with models */}
        <Suspense fallback={null}>
          <Moon />
        </Suspense>

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            intensity={BLOOM_CONFIG.intensity}
            luminanceThreshold={BLOOM_CONFIG.luminanceThreshold}
            luminanceSmoothing={BLOOM_CONFIG.luminanceSmoothing}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
