"use client";

import CartListItem from '@components/CartListItem'
import storage from '@utils/storage'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react';


// const items = [
//     { _id: 1, title: "Round-Neck", color: "#000000", quantity: 2, size: "sm" },
//     { _id: 2, title: "Round-Neck", color: "#DDDAED", quantity: 5, size: "lg" },
//     { _id: 3, title: "Round-Neck", color: "#EA0FF1", quantity: 1, size: "xl" },
// ]

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        setCart(storage.getItem("cart"));
    }, []);

    console.log(cart);

    return (
        <section className="w-full min-h-[89.8vh] bg-gray-100 py-10">
            <div className="container max-w-5xl m-auto w-ful">
                {/* Cart Profile Section */}
                <div className="flex flex-start gap-3 items-center mb-16">
                    <Image alt="Img" src="/assets/logo-tshirt.png" width={38} height={38} className="rounded-full bg-gray-300" />
                    <h4 className="text-2xl font-semibold">Your Shopping Cart</h4>
                </div>

                {/* Cart Items Section */}
                <div className="flex flex-wrap gap-10">
                    {cart?.map((item, index) => (
                        <CartListItem
                            key={index.toString()}
                            title={item.title}
                            color={item.color}
                            logo={item.logo}
                            size={item.size}
                            quantity={item.quantity}
                            logoScale={item.logoScale}
                            logoPosition={item.logoPosition}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cart