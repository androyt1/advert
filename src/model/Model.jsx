import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  useGLTF,
  useScroll,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Floor from "../components/Floor";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";

const Androy = (props) => {
  const model = React.useRef();
  const { scene, animations } = useGLTF("/model/model-transformed.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, model);

  const [initialCamera, setInitialCamera] = useState([0, 0, 15]);

  useEffect(() => {
    actions["Call_Me_Clean"].play();
  }, [actions]);

  const camera = useRef();
  const timeLine = useRef();
  const scroll = useScroll();

  useFrame(() => {
    timeLine.current.seek(scroll.offset * timeLine.current.duration());
  });

  useLayoutEffect(() => {
    // Enabling shadows for each mesh of the model
    model.current.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // GSAP Setup
    timeLine.current = gsap.timeline();

    timeLine.current.set(camera.current.position, {
      x: initialCamera[0],
      y: initialCamera[1],
      z: initialCamera[2],
      ease: "Power2.easeInOut",
    });

    // Section 1
    timeLine.current
      .to(
        model.current.rotation,
        {
          duration: 2,
          y: Math.PI * 1.7,
          ease: "Power2.easeInOut",
        },
        2
      )
      .to(
        model.current.position,
        {
          duration: 2,
          x: 3,
          y: -1.5,
          z: 0,
          ease: "Power2.easeInOut",
        },
        2
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          x: 1,
          y: 0,
          z: 18,
          ease: "Power2.easeInOut",
        },
        2
      )
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0.1,
          z: 0.12,
          ease: "Power2.easeInOut",
        },
        2
      );

    // Section 2
    timeLine.current
      .to(
        model.current.position,
        {
          duration: 2,
          x: -0.1,
          ease: "Power2.easeInOut",
        },
        4
      )
      .to(
        model.current.rotation,
        {
          duration: 2,
          y: Math.PI * 0.65,
          z: 0,
          ease: "Power2.easeInOut",
          playAnimation: true,
        },
        4
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          y: 0,
          z: 15,
          ease: "Power2.easeInOut",
        },
        4
      );

    // Section 3
    timeLine.current
      .to(
        model.current.position,
        {
          duration: 2,
          x: 0,
          y: -1.2,
          z: 0,
          ease: "Power2.easeInOut",
        },
        6
      )
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0.1,
          y: 0,
          z: 0,
          ease: "Power2.easeInOut",
        },
        6
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          z: 12,
          ease: "Power2.easeInOut",
        },
        6
      );

    // Section 4
    timeLine.current
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0,
          y: 0,
          z: 0,
          ease: "Power2.easeInOut",
        },
        8
      )
      .to(
        model.current.position,
        {
          duration: 2,
          x: 0.2,
          y: 0,
          ease: "Power2.easeInOut",
        },
        8
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          y: 2, //here
          z: 15,
          ease: "Power2.easeInOut",
        },
        8
      );

    timeLine.current
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: "Power2.easeInOut",
        },
        10
      )
      .to(
        model.current.position,
        {
          duration: 2,
          x: 0,
          y: -0.5,
          ease: "Power2.easeInOut",
        },
        10
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          z: 20,
          ease: "Power2.easeInOut",
        },
        10
      );

    // Ensure smooth transitions between animations
    timeLine.current.smoothChildTiming = true;
    timeLine.current.pause();

    const updateCameraPosition = () => {
      if (scroll.offset >= 0 && scroll.offset <= 1) {
        timeLine.current.progress(scroll.offset);
      }
    };

    window.addEventListener("scroll", updateCameraPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateCameraPosition);
    };
  }, []);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={initialCamera}
        fov={15}
        far={200}
        near={1}
        ref={camera}
      />
      <group
        ref={model}
        {...props}
        dispose={null}
        scale={1.5}
        position={[0, -1.5, 0]}
      >
        <Floor />
        <group name="Scene">
          <group name="Armature">
            <primitive object={nodes.Hips} />
          </group>
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_0"
            geometry={nodes.avaturn_glasses_0.geometry}
            material={materials.avaturn_glasses_0_material}
            skeleton={nodes.avaturn_glasses_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_1"
            geometry={nodes.avaturn_glasses_1.geometry}
            material={materials.avaturn_glasses_1_material}
            skeleton={nodes.avaturn_glasses_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
        </group>
      </group>
    </>
  );
};

useGLTF.preload("/model/model-transformed.glb");

export default Androy;
