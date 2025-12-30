import * as THREE from "three";

// Star Types
export interface StarData {
  position: [number, number, number];
  scale: number;
  phase: number;
  flickerSpeed: number;
  rotation: number;
  colorIndex: number;
}

// Scene Types
export interface CameraConfig {
  position: [number, number, number];
  fov: number;
}

export interface LightConfig {
  ambient: {
    intensity: number;
  };
  point: {
    position: [number, number, number];
    intensity: number;
    color: string;
  };
  directional: {
    position: [number, number, number];
    intensity: number;
  };
}

export interface BloomConfig {
  intensity: number;
  luminanceThreshold: number;
  luminanceSmoothing: number;
}
