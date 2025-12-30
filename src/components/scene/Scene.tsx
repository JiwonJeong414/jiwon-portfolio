"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { StarField } from "./Stars";
import { Moon } from "../models";
import { useLoading, useScroll } from "@/context";
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
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress, setIsLoaded]);

  return null;
}

// Component to handle scroll-based camera and scene animations
function ScrollAnimations() {
  const { camera } = useThree();
  const { scrollProgress } = useScroll();
  const initialY = useRef(camera.position.y);
  const initialZ = useRef(camera.position.z);

  useFrame(() => {
    // Smoothly interpolate camera based on scroll
    const targetY = initialY.current - scrollProgress * 15;
    const targetZ = initialZ.current + scrollProgress * 10;

    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.1);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1);
  });

  return null;
}

// Wrapper component for Moon with fade-out animation
function AnimatedMoon() {
  const groupRef = useRef<THREE.Group>(null!);
  const { scrollProgress, shouldUnload3D } = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      // Scale down and move down as user scrolls
      const scale = Math.max(0, 1 - scrollProgress * 1.2);
      const yOffset = -scrollProgress * 30;

      groupRef.current.scale.setScalar(scale);
      groupRef.current.position.y = yOffset;

      // Fade out by adjusting opacity of all materials
      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshStandardMaterial;
          if (material.opacity !== undefined) {
            material.transparent = true;
            material.opacity = Math.max(0, 1 - scrollProgress * 1.5);
          }
        }
      });
    }
  });

  // Don't render if should unload
  if (shouldUnload3D) return null;

  return (
    <group ref={groupRef}>
      <Moon />
    </group>
  );
}

// Wrapper for StarField with fade animation
function AnimatedStarField() {
  const groupRef = useRef<THREE.Group>(null!);
  const { scrollProgress, shouldUnload3D } = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      // Fade and spread stars as user scrolls
      const opacity = Math.max(0, 1 - scrollProgress * 1.3);
      const scale = 1 + scrollProgress * 0.5;

      groupRef.current.scale.setScalar(scale);

      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshStandardMaterial;
          material.transparent = true;
          material.opacity = opacity;
        }
      });
    }
  });

  if (shouldUnload3D) return null;

  return (
    <group ref={groupRef}>
      <StarField />
    </group>
  );
}

export function Scene() {
  const { shouldUnload3D } = useScroll();

  // Calculate opacity for the entire canvas container
  const canvasOpacity = useMemo(() => {
    return shouldUnload3D ? 0 : 1;
  }, [shouldUnload3D]);

  return (
    <div
      className="fixed inset-0 -z-10 bg-[#0a0a0f] transition-opacity duration-500"
      style={{ opacity: canvasOpacity }}
    >
      {!shouldUnload3D && (
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
          <ScrollAnimations />

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

          <AnimatedStarField />

          <Suspense fallback={null}>
            <AnimatedMoon />
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
      )}
    </div>
  );
}
