import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import state from '@store'
import { easing } from 'maath'

export function Shirt(props) {

    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked-transformed.glb')
    const logoTexture = useTexture(snap.logoDecal);

    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);

    });


    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
                <Decal
                    map={logoTexture}
                    scale={0.15}
                    position={[0, 0.1, 0.15]}
                    rotation={[0, 0, 0]}
                    depthTest={false}
                    deptWrite={true}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/shirt_baked-transformed.glb')


export default Shirt
