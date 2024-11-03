import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

export default function Floor() {
  const [colorMap, disMap, normGL, roughMap] = useLoader(TextureLoader, [
    // "./floor/plastic2/Plastic015A_1K-JPG_AmbientOcclusion.jpg",
    "/images/floor/PavingStones092_1K-JPG_AmbientOcclusion.jpg",
    "/images/floor/PavingStones092_1K-JPG_Color.jpg",
    "/images/floor/PavingStones092_1K-JPG_Displacement.jpg",
    "/images/floor/PavingStones092_1K-JPG_NormalDX.jpg",
    "/images/floor/PavingStones092_1K-JPG_NormalGL.jpg",
    "/images/floor/PavingStones092_1K-JPG_Roughness.jpg",
  ]);

  const TEX_SCALE = 1;
  const PLANE_WIDTH = 10;
  const PLANE_HEIGHT = 10;

  [colorMap, disMap, normGL, roughMap].forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(TEX_SCALE, TEX_SCALE);
  });

  const material = new THREE.MeshPhysicalMaterial({
    // aoMap: aoMap,
    // aoMapIntensity: 1,
    map: colorMap,
    displacementMap: disMap,
    displacementScale: 1,
    normalMap: normGL,
    normalMapType: THREE.TangentSpaceNormalMap,
    roughnessMap: roughMap,
    roughness: 1,
  });

  return (
    <Plane
      args={[PLANE_WIDTH, PLANE_HEIGHT]}
      material={material}
      receiveShadow
      castShadow
      rotation-x={-Math.PI / 2}
      position-y={-1.05}
    />
  );
}
