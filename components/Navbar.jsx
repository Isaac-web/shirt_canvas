"use client";

import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@config/motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


const Navbar = () => {
    return (
        <AnimatePresence>
            <motion.nav {...slideAnimation("down")} className="nav">
                <motion.div {...slideAnimation("left")}>
                    <Image src="/threejs.png" alt="Logo" width={35} height={35} />
                </motion.div>

                <motion.div {...slideAnimation("right")}>
                    <Link href="/signin">
                        <Button>Login</Button>
                    </Link>
                </motion.div>
            </motion.nav>
        </AnimatePresence>
    )
}

export default Navbar