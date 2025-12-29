import * as THREE from "three";

// ============================================
// Star Types
// ============================================

export interface StarData {
  position: [number, number, number];
  scale: number;
  phase: number;
  flickerSpeed: number;
  rotation: number;
  colorIndex: number;
}

// ============================================
// Planet / Surface Object Types
// ============================================

export interface PlanetPositionProps {
  latitude: number;
  longitude: number;
  heightOffset?: number;
  faceRotation?: number;
  planetRadius?: number;
}

export interface SurfaceTransform {
  position: [number, number, number];
  rotation: [number, number, number];
}

// ============================================
// Component Props Types
// ============================================

export interface PlanetObjectProps extends PlanetPositionProps {
  modelPath: string;
  scale: number;
}

export interface StarFieldProps {
  count?: number;
}

export interface StarProps {
  data: StarData;
  geometry: THREE.ExtrudeGeometry;
}

// ============================================
// Scene Types
// ============================================

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
