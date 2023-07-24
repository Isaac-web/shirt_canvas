"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartCanvas from "./CartCanvas";
import sizes from "@config/data/sizes.json"
import textures from "@config/data/textures.json"
import { useSnapshot } from "valtio";
import checkout from "@store/checkout";

const CartListItem = ({ color, quantity, size, logo, logoScale, logoPosition, texture, onDelete }) => {
    const [itemsCount, setItemsCount] = useState(quantity)
    const [sizeValue, setSizeValue] = useState(size);
    const [textureValue, setTextureValue] = useState("cotton");
    const checkoutSnap = useSnapshot(checkout);
    const router = useRouter();



    const handleInc = () => setItemsCount(itemsCount + 1)

    const handleDec = () => {
        if (itemsCount > 1)
            setItemsCount(itemsCount - 1)
    }


    const handleChangeSize = (size) => {
        setSizeValue(size)
    }

    const handleChangeTexture = (texture) => {
        setTextureValue(texture);
    }


    const handleCheckout = () => {
        //add checkout data
        const data = {
            color,
            quantity,
            size,
            logo,
            logoScale,
            logoPosition,
            texture
        };
        for (let item in data) {
            checkoutSnap[item] = data[item];
        }

        router.push("/checkout");

    }


    return (
        <div className="bg-white w-1/3 shadow-md p-5 rounded-md">
            <CartCanvas color={color} logo={logo} logoPosition={logoPosition} logoScale={logoScale} />
            <div className="w-full h-[1px] bg-slate-100 my-1 mb-2" />

            <div className="mb-5 flex flex-row justify-between">
                <div className="text-3xl font-semibold tracking-tighter">
                    Ghc {quantity * 49.99}
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-400 text-xs text-right">Quantity: {quantity}</p>
                    <p className="text-gray-400 text-xs">Unit Price: 49.99</p>
                </div>
            </div>



            <div className="mb-2">
                <p className="text-sm font-semibold">Size</p>
                <div className="flex">
                    {sizes.map(s =>
                        <button
                            key={s.value}
                            onClick={() => handleChangeSize(s.value)}
                            className={`flex-1 text-xs text-gray-300 pb-2 ${s.value === sizeValue ? "active_button" : ""}`}
                        >
                            {s.value}
                        </button>
                    )}
                </div>
            </div>

            <div className="mb-2">
                <p className="text-sm font-semibold mb-1">Texture</p>
                <div className="flex">
                    {textures.map(t =>
                        <button
                            key={t.value}
                            onClick={() => handleChangeTexture(t.value)}
                            className={`flex-1 text-xs text-gray-300 pb-2 ${t.value === textureValue ? "active_button" : ""}`}
                        >
                            {t.label}
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-row justify-between items-center mb-3">
                <button className="w-12 h-12 rounded-full bg-black text-white">-</button>
                <p className="font-bold">1</p>
                <button className="w-12 h-12 rounded-full bg-black text-white">+</button>
            </div>


            <div className="flex gap-2 mb-1">
                <button onClick={onDelete} className="border-2 border-black py-2 px-5 flex-1 transition-all ease-out hover:text-red-500  hover:border-red-500">Delete</button>
                <button
                    className="py-2 px-5 flex-1 text-white bg-black hover:opacity-80 transition-all ease-out"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}



const Counter = ({ onInc, onDec, value }) => {
    return (
        <div className="flex flex-row gap-7 p-5 py-1 bg-gray-300 rounded-lg">
            <button className="hover:scale-y-125 cursor-pointer transition-all ease-in" onClick={onDec}>
                -
            </button>
            <p className="font-semibold">{value}</p>
            <button className="hover:scale-y-125 cursor-pointer transition-all ease-in" onClick={onInc}>
                +
            </button>
        </div>
    )
}

export default CartListItem