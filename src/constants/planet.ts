// Planet Geometry
export const PLANET_RADIUS = 50;

export const PLANET_SCALE = 50;

// Planet Initial Transform
export const PLANET_POSITION = {
  x: 0,
  y: -65,
  z: -50,
} as const;

export const PLANET_ROTATION = {
  x: 0.3,
  y: 2.5,
  z: 0.5,
} as const;

// Planet Animation
export const PLANET_ANIMATION = {
  maxYAngle: 10 * (Math.PI / 180),
  maxXAngle: 5 * (Math.PI / 180),
  ySpeed: 0.2,
  xSpeed: 0.15,
  bobSpeed: 0.3,
  bobAmount: 1.5,
} as const;

// Planet Material
export const PLANET_MATERIAL = {
  color: "#8888aa",
  roughness: 0.7,
  metalness: 0.2,
  emissive: "#333344",
  emissiveIntensity: 0.3,
} as const;

// Model Paths
export const MODEL_PATHS = {
  planet: "../models/planet_one.glb",
  prince: "../models/prince.glb",
  fox: "../models/fox.glb",
  rose: "../models/rose.glb",
} as const;

// Model Configurations
export const CHARACTER_CONFIG = {
  scale: 0.08,
  latitude: 90,
  longitude: 170,
  heightOffset: 15,
  faceRotation: 30,
} as const;

export const FOX_CONFIG = {
  scale: 1.3,
  latitude: 80,
  longitude: 55,
  heightOffset: 2,
  faceRotation: 40,
} as const;

export const ROSE_CONFIG = {
  scale: 0.07,
  latitude: 70,
  longitude: -60,
  heightOffset: 2,
} as const;
