"use client";

import { Suspense, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { StarField } from "./Stars";
import { Moon } from "../models";
import { useLoading } from "@/context/LoadingContext";
import {
  CAMERA_CONFIG,
  LIGHT_CONFIG,
  BLOOM_CONFIG,
  SCENE_COLORS,
} from "../../constants";

function LoadingTracker() {
  const { progress } = useProgress();
  const { setIsLoaded } = useLoading();

  useEffect(() => {
    if (progress === 100) {
      // Small delay for shader compilation
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress, setIsLoaded]);

  return null;
}

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
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={[SCENE_COLORS.background]} />

        <LoadingTracker />

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

        <StarField />

        <Suspense fallback={null}>
          <Moon />
        </Suspense>

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
