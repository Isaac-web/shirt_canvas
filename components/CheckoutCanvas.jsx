"use client";

import React, { Suspense } from 'react';
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from 'valtio';
import state from '@store';
import checkout from '@store/checkout';
import { easing } from 'maath';

const CheckoutCanvas = (props) => {
    const checkoutSnap = useSnapshot(checkout);

    if (Object.keys(checkoutSnap).length === 0) return (<div className="px-5">
        <p className="text-center font-semibold mb-1">Something went wrong while rendering the shirt</p>
        <Link href="/cart">
            <p className="text-xs text-gray-400 text-center hover:underline">Please begin the checkout process to fix this</p>
        </Link>
    </div>)

    return (
        <Canvas camera={{ fov: 12 }} className="-mt-28">
            <Suspense>
                <ambientLight intensity={0.5} />
                <Shirt {...props} />
                <directionalLight intensity={0.7} position={[0.5, 0.1, 0.5]} />
            </Suspense>
        </Canvas>
    )
}




function Shirt(props) {

    const snap = useSnapshot(state);
    const checkoutSnap = useSnapshot(checkout);
    const { nodes, materials } = useGLTF('/shirt_baked-transformed.glb');

    const material = materials.lambert1.clone();
    useFrame((state, delta) => {
        easing.dampC(material.color, checkoutSnap.color, 0.25, delta);
    });


    const logo = useTexture(checkoutSnap.logo);
    const logoPosition = checkoutSnap.logoPosition;
    const logoScale = checkoutSnap.logoScale;




    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.T_Shirt_male.geometry} material={material} material-roughness={1} >
                <Decal map={logo} position={logoPosition} scale={logoScale} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/shirt_baked-transformed.glb')


export default CheckoutCanvas