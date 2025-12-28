import * as THREE from "three";

export interface StarData {
  position: [number, number, number];
  scale: number;
  phase: number;
  flickerSpeed: number;
  rotation: number;
  colorIndex: number;
}

export const STAR_COLORS = [
  "#fffef0",
  "#fff8dc",
  "#ffe4b5",
  "#ffd700",
  "#ffb6c1",
  "#add8e6",
  "#e6e6fa",
];

export function createStarGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  const outerRadius = 1;
  const innerRadius = 0.4;
  const points = 5;
  const angleStep = (Math.PI * 2) / points;

  for (let i = 0; i < points; i++) {
    const outerAngle = i * angleStep - Math.PI / 2;
    const innerAngle = outerAngle + angleStep / 2;
    const ox = Math.cos(outerAngle) * outerRadius;
    const oy = Math.sin(outerAngle) * outerRadius;
    const ix = Math.cos(innerAngle) * innerRadius;
    const iy = Math.sin(innerAngle) * innerRadius;
    if (i === 0) shape.moveTo(ox, oy);
    else shape.lineTo(ox, oy);
    shape.lineTo(ix, iy);
  }
  shape.closePath();

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 1,
  });
}

export function generateStarData(count: number): StarData[] {
  return Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
    ],
    scale: 0.08 + Math.random() * 0.15,
    phase: Math.random() * Math.PI * 2,
    flickerSpeed: 2 + Math.random() * 3,
    rotation: Math.random() * Math.PI * 2,
    colorIndex: Math.floor(Math.random() * STAR_COLORS.length),
  }));
}
