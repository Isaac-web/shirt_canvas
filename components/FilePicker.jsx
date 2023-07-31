import state from "@store";
import { useRef, useState } from "react";
import { imageToBase64 } from "@utils/fileProcessor";





const FilePicker = () => {
    const picker = useRef(null);
    const [image, setImage] = useState(null);

    const handleChange = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setImage(file)
    }



    const openFileExplorer = (e) => {
        e.preventDefault();

        picker.current.click();
    }



    const applyImageToLogo = async (e, file) => {
        e.preventDefault();

        if (file) {
            state.logoDecal = await imageToBase64(file);
        }
    }





    return (
        <div className="w-full h-full">
            <form>
                <button className="w-full p-5 py-10 rounded-lg border-black border-dotted border-2" onClick={openFileExplorer}>{!image ? "Load File" : "File Loaded..."}</button>
                <input type="file" accept="image/*" ref={picker} className="hidden" onChange={handleChange} />
            </form>
            <div className="mt-5">
                <button className="border-2 border-black w-full p-5 py-3 rounded-lg" onClick={(e) => applyImageToLogo(e, image)}>Use as Logo</button>
            </div>
        </div>
    )
}

export default FilePicker