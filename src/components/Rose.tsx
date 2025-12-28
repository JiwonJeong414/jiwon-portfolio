// components/Rose.tsx
"use client";
import { useGLTF } from "@react-three/drei";

export function Rose() {
  const { scene } = useGLTF("../models/rose.glb");

  return (
    <primitive
      object={scene}
      scale={0.15} // Slightly bigger
      position={[0, 50, 0]} // On top of planet (y = planet radius)
      rotation={[0, 0, 0]} // Adjust if needed
    />
  );
}

useGLTF.preload("../models/rose.glb");
