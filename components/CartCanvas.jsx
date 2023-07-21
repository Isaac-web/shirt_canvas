"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { easing } from "maath";
import { Color } from "three";

const CartCanvas = ({ color, logo, logoPosition, logoScale }) => {
    // useEffect(() => { }, [color]);

    return (
        <div className="w-full h-48">
            <Canvas camera={{
                fov: 10
            }}>
                <Suspense fallback={null}>
                    <Shirt color={color} logo={logo} logoPosition={logoPosition} logoScale={logoScale} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default CartCanvas



export function Shirt(props) {
    const { color, logo, texture, logoPosition, logoScale } = props;
    const { nodes, materials } = useGLTF('/shirt_baked-transformed.glb');
    const logoTexture = useTexture(logo) || useTexture("/threejs.png");


    materials.lambert1.color = new Color(color);

    const material = materials.lambert1.clone();
    material.color = new Color(color);

    // useFrame((state, delta) => {
    //     easing.dampC(materials.lambert1.color, new Colorcolor, 0.25, delta);
    // })


    // console.log(logoPosition);
    // console.log(logoScale);


    return (
        <group {...props} dispose={null} scale={1.2} key={JSON.stringify({ color })}>
            <ambientLight intensity={0.5} />
            <mesh geometry={nodes.T_Shirt_male.geometry} material={material} material-roughness={1}>
                <Decal scale={logoScale} logoPosition={logoPosition} map={logoTexture} position={logoPosition} />
            </mesh>
            <directionalLight position={[2, 1, 1]} intensity={0.75} />
        </group>
    )
}

useGLTF.preload('/shirt_baked-transformed.glb')