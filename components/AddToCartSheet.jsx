import React, { useContext, useState } from 'react'
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect } from 'react';
import { useSnapshot } from 'valtio';

import sizes from "@config/data/sizes.json"
import textures from "@config/data/textures.json"


import state from '@store';
import AppRadioButton from './AppRadioButton';
import storage from "@utils/storage";
import { AppContext } from './Context/AppContext';



const AddToCartSheet = () => {
    const price = 49.99;
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("lg")
    const [texture, setTexture] = useState("cotton")
    const [inputShown, setInputShown] = useState(false);
    const snap = useSnapshot(state);
    const appContext = useContext(AppContext);


    useEffect(() => {
        setQuantity(1);
        setSize("lg");
        setTexture("cotton");
    }, [])


    const handleDec = () => {
        if (quantity > 2) {
            setQuantity(prev => prev - 1);
        }
    }

    const handleInc = () => {
        setQuantity(prev => prev + 1);
    }

    const handleAddToCart = () => {
        const data = {
            id: Date.now(),
            quantity,
            size,
            texture,
            total: price * quantity,
            color: snap.color,
            logo: snap.logoDecal,
            logoPosition: snap.logoPosition,
            logoScale: snap.logoScale,
        }

        // let cart = storage.getItem("cart");
        // if (!cart) storage.setItem("cart", JSON.stringify([]))

        // cart = storage.getItem("cart");
        // cart.push(data)
        // storage.setItem("cart", JSON.stringify(cart));

        console.log(data);
        appContext.addCartItem(data);
        state.addToCart = false;
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleTextureChange = (e) => {
        setTexture(e.target.value)
    }

    const handleQuantityChange = (e) => {
        e.preventDefault();

        setQuantity(Number(e.target.value));
    }



    return (
        <div className="md:w-1/2  p-8 md:ml-20">
            <div className="p-10 glassmorphism rounde xl w-full container max-w-xl m-auto">
                <div className="flex justify-end">
                    <button className="hover:scale-125 transition-all ease-out" onClick={() => state.addToCart = false}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <h1 className="font-bold text-lg">Add Shirt To Cart</h1>
                <p className="text-xs text-gray-700">Please continue by specifying the details below.</p>
                <h3 className="font-bold text-3xl mt-4 mb-7">Ghc {(price * quantity).toFixed(2)}</h3>
                <p className="text-xs text-gray-700 mb-3">The shirt as shown comes with different sizes and two types of texture. <br className="max-md:hidden" /> Please specify below.</p>

                <div className="flex">
                    <div className="w-1/2">
                        <h4 className="font-semibold mb-1" >Size</h4>

                        {sizes.map(s => <AppRadioButton
                            id={s.id}
                            name={"size"}
                            label={s.label}
                            value={s.value}
                            checked={s.value == size}
                            onChange={handleSizeChange}
                        />)}
                    </div>

                    <div className="w-1/2">
                        <h4 className="font-semibold mb-1">Texture</h4>
                        {textures.map(t => <AppRadioButton
                            id={t.id}
                            name={"texture"}
                            label={t.label}
                            value={t.value}
                            checked={t.value == texture}
                            onChange={handleTextureChange}
                        />)}
                    </div>
                </div>


                <div className="w-full md:w-3/4 mb-5">
                    <h4 className="py-5 pb-1 font-semibold">Quantity</h4>
                    <div className="flex gap-16 justify-between items-center">
                        <button onClick={handleDec} className="w-[60px] md:w-14 h-10 bg-black text-white rounded-l-full">-</button>
                        <div className="w-auto">
                            {inputShown &&
                                <input
                                    autoFocus
                                    className="w-12 h-12 text-center"
                                    type="number"
                                    onChange={handleQuantityChange}
                                    value={quantity}
                                    onBlur={() => setInputShown(false)}
                                    min={1}
                                />}
                            {!inputShown &&
                                <p className="font-semibold p-5 cursor-pointer" onClick={() => setInputShown(true)}>{quantity}</p>}
                        </div>
                        <button onClick={handleInc} className="w-[60px] md:w-14 h-10 bg-black text-white rounded-r-full">+</button>
                    </div>
                </div>

                <button
                    className="w-full md:w-3/4 py-3 bg-black text-white font-semibold flex items-center justify-center gap-2"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                    <AiOutlineShoppingCart size={24} />
                </button>
            </div>
        </div>
    )
}

export default AddToCartSheet