"use client";

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import CartListItem from '@components/CartListItem'
import { AppContext } from '@components/Context/AppContext';
import storage from '@utils/storage'


// const items = [
//     { _id: 1, title: "Round-Neck", color: "#000000", quantity: 2, size: "sm" },
//     { _id: 2, title: "Round-Neck", color: "#DDDAED", quantity: 5, size: "lg" },
//     { _id: 3, title: "Round-Neck", color: "#EA0FF1", quantity: 1, size: "xl" },
// ]

const Cart = () => {
    // const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const appContext = useContext(AppContext);

    // console.log(appContext);


    useEffect(() => {
        setLoading(false);
    }, []);


    const handleDelete = (item) => {
        appContext.removeCartItem(item)
    }




    return (
        <section className="w-full min-h-[89.8vh] bg-gray-100 py-10">
            {loading &&
                <div>
                    <p className="text-center">Loading...</p>
                </div>
            }
            {!loading && <div className="container max-w-5xl m-auto w-ful">
                {/* Cart Profile Section */}
                <div className="flex flex-start gap-3 items-center mb-16">
                    <Image alt="Img" src="/assets/logo-tshirt.png" width={38} height={38} className="rounded-full bg-gray-300" />
                    <h4 className="text-2xl font-semibold">Your Shopping Cart</h4>
                </div>

                <div>
                    {/* Cart Items Section */}
                    <div className="flex flex-wrap gap-10">
                        {appContext.cartItems?.map((item, index) => (
                            <CartListItem
                                key={index.toString()}
                                title={item.title}
                                color={item.color}
                                logo={item.logo}
                                size={item.size}
                                quantity={item.quantity}
                                logoScale={item.logoScale}
                                logoPosition={item.logoPosition}
                                texture={item.texture}
                                onDelete={() => handleDelete(item)}
                            />
                        ))}
                    </div>
                    {!appContext?.cartItems?.length && <div className="p-10">
                        <h4 className="text-xl font-semibold text-center mb-8">
                            Your cart is empty.
                        </h4>
                        <p className="text-sm text-gray-400 text-center mb-2">A new shirt can be added on the homepage</p>
                        <Link href="/" >
                            <p className="text-center text-gray-500 hover:underline text-xs">
                                Back to home
                            </p>
                        </Link>
                    </div>}
                </div>
            </div>}
        </section>
    )
}

export default Cart