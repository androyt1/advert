import { useEffect } from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Loading from "./components/Loading";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

export default function App() {
  return (
    <>
      <Canvas
        shadows
        gl={{
          alpha: true,
          shadowMap: {
            enabled: true,
            type: THREE.PCFSoftShadowMap,
          },
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <Suspense
          fallback={
            <Html>
              <Loading />
            </Html>
          }
        >
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
