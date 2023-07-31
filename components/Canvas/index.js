"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { Center } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import { useSnapshot } from "valtio";
import state from "@store";
import useScreenSize from "@customHooks/useWindowSize"

const AppCanvas = () => {
    const snap = useSnapshot(state);
    const { isMobileScreen } = useScreenSize();
    let cameraPosition = isMobileScreen ? [0, 0, 4] : [0, 0, 2.2]


    return (
        <div className={`${snap.intro ? "absolute" : "fixed"} top-0 w-full h-[100vh] -z-10`}>
            <Canvas
                camera={{
                    position: cameraPosition,
                    fov: 20
                }}
                shadows
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.55} />
                    <directionalLight intensity={0.8} position={[-0.5, 1.2, 0.5]} />
                    <Center>
                        <Backdrop />
                        <CameraRig>
                            <Shirt />
                        </CameraRig>
                    </Center>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default AppCanvas