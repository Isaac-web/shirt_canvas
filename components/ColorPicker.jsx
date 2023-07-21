import { SketchPicker } from "react-color";

import React, { useState } from 'react'

const ColorPicker = ({ onChange = null }) => {
    const [color, setColor] = useState();


    const raiseColorChange = (color) => {
        onChange(color.hex)
    }

    const handleColorChange = (color) => {
        setColor(color)
    }
    return (
        <SketchPicker
            className="sketch-picker"
            color={color}
            onChange={handleColorChange}
            onChangeComplete={raiseColorChange}
            disableAlpha
        />
    )
}

export default ColorPicker