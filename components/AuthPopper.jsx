import { useSession } from "next-auth/react"
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@config/motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import storage from "@utils/storage";


const NavBarAuth = () => {
    const { data: session } = useSession();


    const handleSignOut = () => {
        storage.clear();
        signOut();
    }


    return (
        <AnimatePresence>
            <motion.div className="absolute top-12 right-1" {...slideAnimation("down")}>
                <div className="p-2 rounded-xl shadow-md glassmorphism">
                    <div className="bg-gray-50 p-8 rounded-lg min-w-[10em]">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="w-20 h-20 rounded-full bg-gray-200" />
                            <Image width={80} height={80} alt="Profile Picture" src={session?.user.image} className="rounded-full" style={{ display: "block" }} />

                            <div>
                                <p className="font-semibold">{session?.user.name}</p>
                                <p className="text-gray-700 text-sm">{session?.user.email}</p>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-gray-200 my-1" />

                        <div className="py-5">
                            <button
                                className="w-full p-2  bg-red-400 hover:bg-red-500 text-white rounded-lg transition-all ease-in"
                                onClick={handleSignOut}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default NavBarAuth