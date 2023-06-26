import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import angleToRads from "@utils/angleToRads";

const Backdrop = () => {
    return (
        <AccumulativeShadows
            frames={80}
            position={[0, 0, -0.145]}
            rotation={[angleToRads(90), 0, 0]}
            alphaTest={0.85}
            scale={10}
            temporal
            opacity={0.6}
        >
            <RandomizedLight
                amount={4}
                intensity={0.75}
                ambient={0.65}
                position={[5, 4.5, -10]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop