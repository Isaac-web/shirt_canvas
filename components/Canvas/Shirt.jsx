import React, { useRef } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import state from "@store";
import { easing } from "maath";

export function Shirt(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked-transformed.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullTextureDecal);
  const logoDecalRef = useRef(null);

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    if (snap.isLogoTexture) {
      easing.dampC(logoDecalRef.current.scale, snap.logoScale, 0.1, delta);
      easing.dampC(
        logoDecalRef.current.position,
        snap.logoPosition,
        0.1,
        delta
      );
    }
  });

  return (
    <group {...props} dispose={null} key={JSON.stringify(snap)}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isLogoTexture && (
          <Decal
            ref={logoDecalRef}
            map={logoTexture}
            scale={snap.logoScale}
            position={snap.logoPosition}
            rotation={[0, 0, 0]}
            depthTest={false}
            deptWrite={true}
          />
        )}

        {snap.isFullTexture && (
          <Decal
            ref={logoDecalRef}
            map={fullTexture}
            scale={1}
            position={snap.fullTexturePosition}
            rotation={[0, 0, 0]}
            depthTest={false}
            deptWrite={true}
          />
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/shirt_baked-transformed.glb");

export default Shirt;
