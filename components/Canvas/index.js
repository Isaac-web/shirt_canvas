"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { Center, Environment } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import { useSnapshot } from "valtio";
import state from "@store";

const AppCanvas = () => {
    const snap = useSnapshot(state);
    const isMobileScreen = window.innerWidth <= 600;
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
                    <ambientLight intensity={0.5} />
                    <Environment preset="city" />
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