import state from "@store";
import Switch from "react-switch";
import { useSnapshot } from "valtio";
import { AiOutlineClose } from "react-icons/ai";

const FullTextureEditor = ({ onClose }) => {
  const snap = useSnapshot(state);

  return (
    <div>
      <div className="w-full p-10 pb-10  rounded-md glassmorphism">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-bold font-bold">Texture Design</h1>
          <button onClick={onClose}>
            <AiOutlineClose size={19} />
          </button>
        </div>

        <p className="mb-5 text-xs">
          Toggle to show or hide full texture design
        </p>

        <Switch
          onChange={() => (state.isFullTexture = !state.isFullTexture)}
          checked={snap.isFullTexture}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={snap.color}
          offColor="#111111"
        />
      </div>
    </div>
  );
};

export default FullTextureEditor;
