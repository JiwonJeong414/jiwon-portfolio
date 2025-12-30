import type { CameraConfig, LightConfig, BloomConfig } from "../types";

// Camera Settings
export const CAMERA_CONFIG: CameraConfig = {
  position: [0, 0, 20],
  fov: 50,
};

// Lighting Settings
export const LIGHT_CONFIG: LightConfig = {
  ambient: {
    intensity: 0.8,
  },
  point: {
    position: [0, 0, 15],
    intensity: 0.5,
    color: "#fff8dc",
  },
  directional: {
    position: [5, 10, 5],
    intensity: 1.0,
  },
};

// Post-Processing Settings
export const BLOOM_CONFIG: BloomConfig = {
  intensity: 0.8,
  luminanceThreshold: 0.3,
  luminanceSmoothing: 0.9,
};

// Scene Colors
export const SCENE_COLORS = {
  background: "#0a0a0f",
} as const;

// Animation Settings
export const STARFIELD_ANIMATION = {
  maxYAngle: 10 * (Math.PI / 180), // degrees to radians
  maxXAngle: 5 * (Math.PI / 180),
  ySpeed: 0.3,
  xSpeed: 0.2,
} as const;
