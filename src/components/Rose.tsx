import { PlanetObject } from "./PlanetObject";
import { useGLTF } from "@react-three/drei";

export const Rose = () => (
  <PlanetObject
    modelPath="../models/rose.glb"
    scale={0.07}
    latitude={70}
    longitude={-60}
    heightOffset={2}
  />
);

useGLTF.preload("../models/rose.glb");
