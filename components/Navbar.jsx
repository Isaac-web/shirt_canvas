"use client";

import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@config/motion";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";

import Button from "./Button";
import state from "@store";

const Navbar = () => {
    const snap = useSnapshot(state);


    return (
        <AnimatePresence>
            {snap.intro && <motion.nav {...slideAnimation("down")} className="nav">
                <motion.div {...slideAnimation("left")}>
                    <Image src="/threejs.png" alt="Logo" width={35} height={35} />
                </motion.div>

                {/* <motion.div {...slideAnimation("right")}> */}
                    <Link href="/signin">
                        <Button>Login</Button>
                    </Link>
                {/* </motion.div> */}
            </motion.nav>}
        </AnimatePresence>
    )
}

export default Navbar