import React from 'react'
import getContrastingTextColor from "@utils/getTextColor";

const Button = ({ children, className, style, onClick, variant, ...rest }) => {
    const classNames = `text-bold bg-black text-white rounded-lg px-5 py-2 hover:opacity-90 ${className}`

    const color = style?.color || "none";
    const styles = {
        color: getContrastingTextColor(color),
        ...style,

    }

    return (
        <button className={classNames} style={styles} onClick={onClick} {...rest}>{children}</button>
    )
}

export default Button