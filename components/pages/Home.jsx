"use client";

import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, headContainerAnimation, headContentAnimation, headTextAnimation } from "@config/motion";
import Button from "@components/Button";

const Home = () => {

    const handlePageChange = () => {
        console.log("Handle page change");
    }


    return (
        <AnimatePresence>
            <motion.section {...headContainerAnimation} className="home">
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

                    <motion.div {...headContainerAnimation} {...fadeAnimation}>
                        <Button onClick={handlePageChange} className={"py-3 px-6"}>Customize it</Button>
                    </motion.div>
                </motion.div>
            </motion.section>
        </AnimatePresence >
    )
}

export default Home