"use client";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { StarField } from "./Stars";

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f]">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        <color attach="background" args={["#0a0a0f"]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 15]} intensity={0.3} color="#fff8dc" />

        <StarField count={150} />

        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
