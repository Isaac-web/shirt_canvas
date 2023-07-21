"use client";

import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@config/motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useSnapshot } from "valtio";


import Button from "./Button";
import state from "@store";
import AuthPopper from "./AuthPopper";
import { useState } from "react";

const Navbar = () => {
    const snap = useSnapshot(state);
    const [authPopper, setAuthPopper] = useState(false);
    const { data: session } = useSession();

    return (
        <AnimatePresence>
            {snap.intro && <motion.nav {...slideAnimation("down")} className="nav">
                <motion.div {...slideAnimation("left")}>
                    <Image src="/threejs.png" alt="Logo" width={35} height={35} />
                </motion.div>

                <div className="relative">
                    {
                        session?.user ?
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center glassmorphism"
                                onClick={() => setAuthPopper(prev => !prev)}
                                style={{ backgroundColor: snap.color }}
                            >
                                <Image src={session?.user.image} alt="Logo" width={40} height={40} className="rounded-full" />
                            </div> :
                            <Link href="/signin">
                                <Button>Login</Button>
                            </Link>
                    }

                    {authPopper && <AuthPopper />}
                </div>
            </motion.nav>}
        </AnimatePresence>
    )
}

export default Navbar