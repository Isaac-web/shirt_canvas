"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import { EditorTabs, FilterTabs } from "@config/constants";
import { useSnapshot } from "valtio";
import state from "@store";
import { fadeAnimation, slideAnimation } from "@config/motion";
import Button from "@components/Button";
import ColorPicker from "@components/ColorPicker";
import { useState } from "react";
import FilePicker from "@components/FilePicker";
import LogoEditor from "@components/LogoEditor";
import FullTextureEditor from "@components/FullTextureEditor";

const Customizer = () => {
  const snap = useSnapshot(state);
  const [activePicker, setActivePicker] = useState(null);
  const [activeBottomTab, setActiveButtomTab] = useState(null);

  const handleBackNavigation = () => {
    setActivePicker(null);
    state.intro = true;
  };

  const handleSurfaceCustomizer = (tab) => {
    if (activePicker === tab.name) setActivePicker(null);
    else setActivePicker(tab.name);
  };

  const handleColorChange = (color) => {
    state.color = color;
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <div>
          <motion.div
            className="fixed left-1  top-1/3 md:top-1/4"
            {...slideAnimation("left")}
          >
            <div className="flex flex-col gap-5 bg-red-300 p-2 rounded-md glassmorphism">
              {EditorTabs.map((tab) => (
                <button
                  key={tab.name}
                  className="tab-btn"
                  onClick={() => handleSurfaceCustomizer(tab)}
                >
                  <Image alt={tab.name} src={tab.icon} width={42} height={42} />
                </button>
              ))}
            </div>
            <motion.div {...fadeAnimation} className="z-50">
              {activePicker === "colorpicker" && (
                <div className="absolute top-0 left-20 glassmorphism rounded-md flex flex-col px-3 py-2">
                  <div className="flex flex-row justify-end">
                    <button
                      className="p-1"
                      style={{ color: snap.color }}
                      onClick={() => setActivePicker(null)}
                    >
                      <AiOutlineClose size={18} />
                    </button>
                  </div>
                  <div>
                    <ColorPicker onChange={handleColorChange} />
                  </div>
                </div>
              )}

              {activePicker === "filepicker" && (
                <div className="picker-container w-60  flex flex-col justify-between">
                  <FilePicker />
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="fixed bottom-0 w-full flex justify-center gap-x-12"
            {...slideAnimation("up")}
          >
            <div className="p-5">
              {FilterTabs.map((tab) => (
                <button
                  key={tab.name}
                  className="mx-2"
                  onClick={() => setActiveButtomTab(tab.name)}
                >
                  <Image alt={tab.name} src={tab.icon} width={60} height={60} />
                </button>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-24 flex justify-center w-full">
            {activeBottomTab === "logoShirt" && !snap.intro && (
              <LogoEditor onClose={() => setActiveButtomTab(null)} />
            )}
          </div>

          <div className="absolute bottom-24 flex justify-center w-full">
            {activeBottomTab === "stylishShirt" && !snap.intro && (
              <FullTextureEditor onClose={() => setActiveButtomTab(null)} />
            )}
          </div>

          <div className="absolute bottom-24 flex justify-center w-full">
            {activeBottomTab === "textEditor" && !snap.intro && (
              <FullTextureEditor onClose={() => setActiveButtomTab(null)} />
            )}
          </div>

          <motion.div
            className="fixed right-5 top-5"
            {...slideAnimation("right")}
          >
            <Button
              onClick={handleBackNavigation}
              style={{ backgroundColor: snap.color, color: "#000000" }}
            >
              Back
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
