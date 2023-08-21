import state from "@store";
import { useRef, useState } from "react";
import { imageToBase64 } from "@utils/fileProcessor";

const FilePicker = ({ onClose }) => {
  const picker = useRef(null);
  const [image, setImage] = useState(null);

  const handleChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
  };

  const openFileExplorer = (e) => {
    e.preventDefault();

    picker.current.click();
  };

  const applyImageToLogo = async (e, file) => {
    e.preventDefault();

    if (file) {
      state.logoDecal = await imageToBase64(file);
    }
  };

  const applyImageToTexture = async (e, file) => {
    e.preventDefault();

    if (file) state.fullTextureDecal = await imageToBase64(file);
    state.isFullTexture = true;
  };

  return (
    <div className="w-full h-full">
      <form>
        <button
          className="w-full p-5 py-14 rounded-lg border-black border-dotted border-2 text-sm"
          onClick={openFileExplorer}
        >
          {!image ? "Browse Image Files" : "File Loaded..."}
        </button>
        <input
          type="file"
          accept="image/*"
          ref={picker}
          className="hidden"
          onChange={handleChange}
        />
      </form>
      {image ? (
        <div className="mt-5">
          <button
            className="border-2 border-black w-full p-5 py-2 rounded-lg text-sm mb-2"
            onClick={(e) => applyImageToLogo(e, image)}
          >
            Use as Logo
          </button>

          <button
            className="border-2 border-black bg-black w-full p-5 py-2 rounded-lg text-white text-sm"
            onClick={(e) => applyImageToTexture(e, image)}
          >
            Use as Texture Design
          </button>
        </div>
      ) : (
        <div className="py-5 px-6">
          <p className="text-xs text-center">
            Please load an image to see options
          </p>
        </div>
      )}
    </div>
  );
};

export default FilePicker;
