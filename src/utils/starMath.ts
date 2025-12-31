import * as THREE from "three";
import type { StarData } from "@/types";

export const STAR_COLORS = [
  "#fffef0",
  "#fff8dc",
  "#ffe4b5",
  "#ffd700",
  "#ffb6c1",
  "#add8e6",
  "#e6e6fa",
] as const;

const STAR_GEOMETRY_CONFIG = {
  outerRadius: 1,
  innerRadius: 0.4,
  points: 5,
  depth: 0.1,
  bevelThickness: 0.05,
  bevelSize: 0.05,
  bevelSegments: 1,
} as const;

export function createStarGeometry(): THREE.ExtrudeGeometry {
  const { outerRadius, innerRadius, points } = STAR_GEOMETRY_CONFIG;
  const shape = new THREE.Shape();
  const angleStep = (Math.PI * 2) / points;

  for (let i = 0; i < points; i++) {
    const outerAngle = i * angleStep - Math.PI / 2;
    const innerAngle = outerAngle + angleStep / 2;

    const ox = Math.cos(outerAngle) * outerRadius;
    const oy = Math.sin(outerAngle) * outerRadius;
    const ix = Math.cos(innerAngle) * innerRadius;
    const iy = Math.sin(innerAngle) * innerRadius;

    if (i === 0) {
      shape.moveTo(ox, oy);
    } else {
      shape.lineTo(ox, oy);
    }
    shape.lineTo(ix, iy);
  }
  shape.closePath();

  return new THREE.ExtrudeGeometry(shape, {
    depth: STAR_GEOMETRY_CONFIG.depth,
    bevelEnabled: true,
    bevelThickness: STAR_GEOMETRY_CONFIG.bevelThickness,
    bevelSize: STAR_GEOMETRY_CONFIG.bevelSize,
    bevelSegments: STAR_GEOMETRY_CONFIG.bevelSegments,
  });
}

const STAR_DATA_CONFIG = {
  spread: 50,
  minScale: 0.08,
  maxScaleAdd: 0.15,
  minFlickerSpeed: 2,
  maxFlickerSpeedAdd: 3,
} as const;

export function generateStarData(count: number): StarData[] {
  const { spread, minScale, maxScaleAdd, minFlickerSpeed, maxFlickerSpeedAdd } =
    STAR_DATA_CONFIG;

  return Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
    ] as [number, number, number],
    scale: minScale + Math.random() * maxScaleAdd,
    phase: Math.random() * Math.PI * 2,
    flickerSpeed: minFlickerSpeed + Math.random() * maxFlickerSpeedAdd,
    rotation: Math.random() * Math.PI * 2,
    colorIndex: Math.floor(Math.random() * STAR_COLORS.length),
  }));
}
