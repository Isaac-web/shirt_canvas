import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "@store";

import angleToRads from "@utils/angleToRads";


const CameraRig = ({ children }) => {
    const group = useRef(null);
    const snap = useSnapshot(state)


    useFrame((state, delta) => {
        const isMobileScreen = window.innerWidth <= 600;

        let { x, y } = state.mouse;
        easing.dampE(
            group.current.rotation,
            [angleToRads(x * 5), angleToRads(y * 8), 0],
            0.25,
            delta
        );


        let defaultPosition = [0, 0, 0];
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




        //large screens - home page
        //lage screens - customizer




        easing.damp3(group.current.position, defaultPosition, 0.25, delta)



    })

    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig