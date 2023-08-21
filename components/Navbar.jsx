"use client";

import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@config/motion";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useSnapshot } from "valtio";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import { AppContext } from "@components/Context/AppContext";
import state from "@store";
import Button from "./Button";
import AuthPopper from "./AuthPopper";
import { useState } from "react";

const Navbar = () => {
  const appContext = useContext(AppContext);
  const snap = useSnapshot(state);
  const [authPopper, setAuthPopper] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.nav {...slideAnimation("down")} className="nav">
          <motion.div {...slideAnimation("left")}>
            <Link href={"/"}>
              <Image src="/threejs.png" alt="Logo" width={35} height={35} />
            </Link>
          </motion.div>
          <div className="relative">
            {session?.user ? (
              <div className="flex flex-row gap-x-4">
                {
                  <Link href="/cart">
                    <div className="mt-4 relative ">
                      <div className="p-1 px-2 rounded-full bg-red-500 text-white absolute -top-4 -right-3 text-xs tex-white font-semibold">
                        {appContext.cartItems?.length}
                      </div>
                      <button>
                        <HiOutlineShoppingCart size={24} />
                      </button>
                    </div>
                  </Link>
                }
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center glassmorphism"
                  onClick={() => setAuthPopper((prev) => !prev)}
                  style={{ backgroundColor: snap.color }}
                >
                  <Image
                    src={session?.user.image}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            ) : (
              !pathname.toLowerCase().startsWith("/auth") && (
                <Button onClick={() => signIn()}>Login</Button>
              )
            )}

            {authPopper && <AuthPopper />}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
