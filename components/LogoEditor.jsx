import state from "@store";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Switch from "react-switch";
import { useSnapshot } from "valtio";

const LogoEditor = ({ onClose }) => {
  const snap = useSnapshot(state);
  const [logoSliderValue, setLogoSliderValue] = useState(42.85);
  const [showSlider, setshowSlider] = useState(false);

  const handleLogoSizeChange = (size) => {
    if (size === "extra-small") {
      state.logoScale = 0.05;
      state.logoPosition = [0, 0.1, 0.12];
    } else if (size === "small") {
      state.logoScale = 0.09;
      state.logoPosition = [0, 0.1, 0.12];
    } else if (size == "normal") {
      state.logoScale = 0.15;
      state.logoPosition = [0, 0.08, 0.125];
    } else {
      state.logoScale = 0.29;
      state.logoPosition = [0, -0.02, 0.125];
    }
  };

  const handleCustomLogoSizeChange = (e) => {
    setLogoSliderValue(e.target.value);
    const value = e.target.value * 0.0001;

    if (logoSliderValue < e.target.value) {
      if (snap.logoScale < 0.32) {
        state.logoScale += 0.01;
      }
    } else {
      if (snap.logoScale > 0.09) state.logoScale -= 0.01;
    }
  };

  const handleLogoPositionChange = (position) => {
    if (snap.logoScale > 0.1) return;
    else if (position === "top") {
      state.logoPosition[1] = 0;
      state.logoPosition[0] = displacement;
    } else if (position === "middle") {
      state.logoPosition[1] = -0.1;
      state.logoPosition[0] = displacement;
    } else if (position === "down") {
      state.logoPosition[1] = -0.3;
      state.logoPosition[0] = displacement;
    }

    const displacement = 0.08;
    if (position === "left") {
      state.logoPosition[0] = 0;
      state.logoPosition[0] = -displacement;
    } else if (position === "right") {
      state.logoPosition[0] = 0;
      state.logoPosition[0] = displacement;
    } else {
      state.logoPosition[0] = 0;
    }
  };

  return (
    <div className="flex flex-col gap-3 w-80 p-8 pt-7 rounded-lg glassmorphism">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-bold font-bold">Logo Editor</h1>
        <button onClick={onClose}>
          <AiOutlineClose size={19} />
        </button>
      </div>

      <div>
        <h5 className="mb-2 font-semibold">Logo Size</h5>
        <div className="flex gap-1">
          <div className="w-1/2">
            <button
              className="w-full disabled:text-gray-500"
              onClick={() => {
                handleLogoSizeChange("extra-small");
              }}
            >
              Extra Small
            </button>
          </div>
          <div className="w-1/2">
            <button
              className="w-full disabled:text-gray-500"
              onClick={() => {
                handleLogoSizeChange("small");
              }}
            >
              Small
            </button>
          </div>
          <div className="w-1/2">
            <button
              disabled={snap.logoPosition[0] != 0}
              className="w-full disabled:text-gray-500"
              onClick={() => {
                handleLogoSizeChange("normal");
              }}
            >
              Normal
            </button>
          </div>
          <div className="w-1/2">
            <button
              disabled={snap.logoPosition[0] != 0}
              className="w-full disabled:text-gray-500"
              onClick={() => {
                handleLogoSizeChange("large");
              }}
            >
              Large
            </button>
          </div>
        </div>

        {showSlider && (
          <div>
            <input
              type="range"
              value={logoSliderValue}
              className="w-full text-green-200 slider"
              onChange={handleCustomLogoSizeChange}
            />
          </div>
        )}
      </div>

      <div>
        <h6 className="font-semibold mb-2">Logo Position</h6>
        <p className="text-xs -mt-1">
          Left and Right can be applied to only small logos{" "}
        </p>

        <div className="flex flex-row justify-between mt-2">
          <button
            className="disabled:text-gray-500"
            disabled={snap.logoScale > 0.1}
            onClick={() => handleLogoPositionChange("left")}
          >
            Left
          </button>
          <button
            className="disabled:text-gray-500"
            onClick={() => handleLogoPositionChange("center")}
          >
            Center
          </button>
          <button
            className="disabled:text-gray-500"
            disabled={snap.logoScale > 0.1}
            onClick={() => handleLogoPositionChange("right")}
          >
            Right
          </button>
        </div>

        <div className="flex flex-row justify-between mt-2">
          <button
            className="disabled:text-gray-500"
            disabled={snap.logoScale > 0.1}
            onClick={() => handleLogoPositionChange("top")}
          >
            Top
          </button>
          <button
            className="disabled:text-gray-500"
            onClick={() => handleLogoPositionChange("middle")}
          >
            Middle
          </button>
          <button
            className="disabled:text-gray-500"
            disabled={snap.logoScale > 0.1}
            onClick={() => handleLogoPositionChange("down")}
          >
            Down
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-400 my-1" />

      <div className="flex flex-row justify-between items-center">
        <label>Toggle Logo</label>
        <Switch
          onChange={() => (state.isLogoTexture = !state.isLogoTexture)}
          checked={snap.isLogoTexture}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={snap.color}
          offColor="#111111"
        />
      </div>

      <div></div>
    </div>
  );
};

export default LogoEditor;
