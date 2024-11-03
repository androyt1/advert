import Androy from "../model/Model";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense } from "react";

const Environment = () => {
  return (
    <Canvas className="col-span-1 bg-black">
      <ambientLight intensity={0.5} />

      <directionalLight position={[0, 0, 5]} intensity={3} />
      <Suspense
        fallback={
          <Html>
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-2xl font-semibold">
                Loading Model, please wait
              </h1>
            </div>
          </Html>
        }
      >
        <Androy />
      </Suspense>
    </Canvas>
  );
};

export default Environment;
