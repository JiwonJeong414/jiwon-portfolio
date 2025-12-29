import { PlanetObject } from "./PlanetObject";
import { useGLTF } from "@react-three/drei";

export const Character = () => (
  <PlanetObject
    modelPath="../models/prince.glb"
    scale={0.08}
    latitude={90}
    longitude={170}
    heightOffset={15}
    faceRotation={30}
  />
);

useGLTF.preload("../models/prince.glb");
