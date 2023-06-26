import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import state from '@store'
import { easing } from 'maath'

export function Shirt(props) {
    const { nodes, materials } = useGLTF('/shirt_baked-transformed.glb')
    const snap = useSnapshot(state);

    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);

    });


    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            />
        </group>
    )
}

useGLTF.preload('/shirt_baked-transformed.glb')


export default Shirt
