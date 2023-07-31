"use client";

import React, { createContext, useEffect, useState } from 'react'
import storage from "@utils/storage"


export const AppContext = createContext(null);

const Context = ({ children }) => {
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        const cart = storage.getItem("cart");
        if (cart) {
            setCartItems(cart);
        } else {
            storage.setItem("cart", JSON.stringify([]))
            setCartItems([]);
        }
    }, []);


    const addCartItem = (item) => {
        const cart = storage.getItem("cart");
        cart.push(item);
        storage.setItem("cart", JSON.stringify(cart));
        setCartItems(cart);
    }


    const removeCartItem = (item) => {
        const cart = storage.getItem('cart');
        if (!cart) return;

        const newCartItems = cart.filter(t => t.id !== item.id);
        storage.setItem("cart", JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    }


    return (
        <AppContext.Provider
            value={{ cartItems, addCartItem, removeCartItem }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default Context