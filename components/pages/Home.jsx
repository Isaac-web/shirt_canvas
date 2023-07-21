"use client";

import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "@config/motion";
import { useSnapshot } from "valtio";


import Button from "@components/Button";
import state from "@store";
import AddToCartSheet from "@components/AddToCartSheet";


const Home = () => {
    const snap = useSnapshot(state);

    const handlePageChange = () => {
        state.intro = false
    }


    return (
        <AnimatePresence>
            {snap.intro && !snap.addToCart && <motion.section {...headContainerAnimation} className="home absolute">
                <motion.div {...headTextAnimation}>
                    <h1 className="head-text uppercase">Let's <br /> Do It.</h1>
                    <motion.div {...headContentAnimation} className="mb-4">
                        <p>
                            Unleash your inner designer, customize your own unique t-shirts <br />
                            in real-time, and wear your creativity with pride. Get started now <br />
                            and make a statement  that's
                            all you.
                        </p>
                    </motion.div>

                    <motion.div className="flex gap-2" {...headContainerAnimation} {...fadeAnimation}>
                        <Button
                            onClick={() => state.addToCart = true}
                            className={"py-3 px-6"}
                            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
                        >
                            Add To Cart
                        </Button>

                        <Button
                            onClick={handlePageChange}
                            className={"py-3 px-6"}
                            style={{ backgroundColor: snap.color, color: "#000000" }}
                        >
                            Customize it
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.section>}


            {snap.addToCart && <motion.div {...slideAnimation("left")}>
                <AddToCartSheet />
            </motion.div>}
        </AnimatePresence >
    )
}

export default Home