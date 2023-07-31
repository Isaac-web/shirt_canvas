"use client";

import React, { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';

export default function Shirt(props) {
    const { nodes, materials } = useGLTF('/shirt_baked-transformed.glb');
    const { fov } = props;

    return (
        <Canvas camera={{ fov: fov || 24 }}>
            <Suspense fallback={null}>
                <group {...props} dispose={null}>
                    <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0.8, 0.4, 0.8]} />
                </group>
            </Suspense>
        </Canvas>
    )
}

useGLTF.preload('/shirt_baked-transformed.glb');