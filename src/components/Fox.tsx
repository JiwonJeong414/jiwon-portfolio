import { PlanetObject } from "./PlanetObject";
import { useGLTF } from "@react-three/drei";

export const Fox = () => (
  <PlanetObject
    modelPath="../models/fox.glb"
    scale={1.3}
    latitude={80}
    longitude={55}
    heightOffset={2}
    faceRotation={40}
  />
);

useGLTF.preload("../models/fox.glb");
