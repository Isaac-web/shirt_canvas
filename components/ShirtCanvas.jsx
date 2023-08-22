"use client";

import React, { Suspense } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import { Color } from "three";

export default function Shirt(props) {
  const { shirt } = props;
  const { nodes, materials } = useGLTF("/shirt_baked-transformed.glb");

  const material = materials.lambert1.clone();
  const logoDecal = shirt?.logo ? useTexture(shirt.logo) : "";
  material.color = new Color(shirt?.color);

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.T_Shirt_male.geometry}
          material={material}
          material-roughness={1}
        >
          <Decal position={shirt.logoPosition} scale={0.15} map={logoDecal} />
        </mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0.8, 0.4, 0.8]} />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/shirt_baked-transformed.glb");
