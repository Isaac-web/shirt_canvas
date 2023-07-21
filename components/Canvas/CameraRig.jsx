import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "@store";
import angleToRads from "@utils/angleToRads";
import useWindowSize from "@customHooks/useWindowSize";


const CameraRig = ({ children }) => {
    const group = useRef(null);
    const snap = useSnapshot(state);
    const { isMobileScreen } = useWindowSize();


    useFrame((state, delta) => {
        let { x, y } = state.mouse;
        easing.dampE(
            group.current.rotation,
            [angleToRads(x * 5), angleToRads(y * 8), 0],
            0.25,
            delta
        );


        let defaultPosition = [0, 0.05, 0];
        if (isMobileScreen) {
            if (snap.intro) {
                defaultPosition = [0, -0.5, 0]
            }
            else {
                defaultPosition = [0, 0, 0]
            }
        } else {
            if (snap.intro) {
                defaultPosition = [0.3, 0, 0]
            }
        }

        easing.damp3(group.current.position, defaultPosition, 0.25, delta)
    })

    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig