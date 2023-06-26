"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { EditorTabs, FilterTabs } from "@config/constants";
import { useSnapshot } from "valtio";
import state from "@store";
import { slideAnimation } from "@config/motion";
import Button from "@components/Button";

const Customizer = () => {
    const snap = useSnapshot(state);

    const handleBackNavigation = () => {
        state.intro = true;
    }


    return (
        <AnimatePresence>
            {
                !snap.intro &&
                <div>
                    <motion.div className="fixed left-1  top-1/3 md:top-1/4" {...slideAnimation("left")}>
                        <div className="flex flex-col gap-5 bg-red-300 p-2 rounded-md glassmorphism">
                            {EditorTabs.map(tab =>
                                <button className="tab-btn">
                                    <Image alt={tab.name} src={tab.icon} width={42} height={42} />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    <motion.div className="fixed bottom-0 w-full flex justify-center gap-x-12" {...slideAnimation('up')}>
                        <div className="p-5">
                            {FilterTabs.map(tab => (
                                <button className="mx-2">
                                    <Image alt={tab.name} src={tab.icon} width={60} height={60} />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="fixed right-5 top-5" {...slideAnimation("right")}>
                        <Button onClick={handleBackNavigation} style={{ backgroundColor: snap.color, color: "#000000" }}>Back</Button>
                    </motion.div>
                </div>
            }

        </AnimatePresence>
    )
}

export default Customizer















// "use client";

// import { useSnapshot } from "valtio";
// import { AnimatePresence, motion } from "framer-motion";
// import { FilterTabs, EditorTabs } from "@config/constants"
// import Image from "next/image";

// import state from "@store";
// import { slideAnimation } from "@config/motion";
// import Button from "@components/Button";

// const Customizer = () => {
//     const snap = useSnapshot(state);


//     const handleBackNavigation = () => {
//         state.intro = true;
//     }


//     return (
//         <AnimatePresence>
//             {
//                 !snap.intro &&
//                 <section className="w-full h-full aboslute z-30">
//                     <motion.div className="fixed top-1/3 mt-[-2em] editortabs-container glassmorphism z-10 hover:cursor-pointer" {...slideAnimation("left")}>
//                         {EditorTabs.map((element) =>
//                             <button className="tab-btn">
//                                 <Image src={element.icon} size={36} height={36} />
//                             </button>
//                         )}
//                     </motion.div>


//                     <motion.div className="filtertabs-container fixed" {...slideAnimation("up")}>
//                         <div className="glassmorphism flex flex-row gap-5 px-3">
//                             {FilterTabs.map((element) =>
//                                 <button>
//                                     <Image alt="Filter-tab-icon" src={element.icon} with={60} height={60} />
//                                 </button>
//                             )}
//                         </div>
//                     </motion.div>


//                     <motion.div {...slideAnimation("right")} className="absolute right-5 top-5 z-10">
//                         <Button onClick={handleBackNavigation}>Back</Button>
//                     </motion.div>
//                 </section>
//             }
//         </AnimatePresence>

//     )
// }

// export default Customizer