"use client";

import React, { useEffect, useState } from 'react';
import checkout from '@store/checkout';
import Input from '@components/AppInput';
import { useSnapshot } from 'valtio';
import CheckoutCanvas from '@components/CheckoutCanvas';
import { useSession } from 'next-auth/react';
import { Formik, Form, Field, useFormikContext } from "formik";


const CheckoutPage = () => {
    const snap = useSnapshot(checkout);
    const { data: session } = useSession();
    const [name, setName] = useState(null);
    // const { setFieldValue } = useFormikContext();

    const deliveryFee = 10.00;
    const subtotal = (snap.quantity * 49.99).toFixed(2)
    const total = (Number(subtotal) + Number(deliveryFee))?.toFixed(2);


    const initialData = {
        firstname: "",
        lastname: "",
        email: "",
        city: "",
        street: "",
        houseNumber: "",
        phone: "",
        note: ""
    };

    useEffect(() => {
        if (session?.user) {
            const [firstName] = session.user.name.split(" ");
            const otherNames = session.user.name.slice(firstName.length);

            // setFieldValue("firstName", firstName);
            // setFieldValue("lastname", otherNames);
            // setFieldValue("email", session.user.email);


            initialData.firstname = firstName;
            // setFieldValue("lastname", otherNames);
            // setFieldValue("email", session.user.email);
        }
    }, [session?.user]);




    const handleSubmit = (data) => {
        console.log(data);
    }


    return (
        <section className="container max-w-5xl m-auto pb-10">
            <Formik initialValues={initialData} onSubmit={handleSubmit}>
                <Form>
                    <div className="w-full flex max-md:p-5 gap-5">
                        <div className="w-full md:w-2/3">
                            <div className="mb-3">
                                <h1 className="text-xl font-bold mb-1">Checkout</h1>
                                <p className="text-xs text-gray-400">Continue below to complete the order</p>
                            </div>


                            <div className="flex flex-col gap-y-10">
                                <div>
                                    <h4 className="font-bold mb-3">Personal Info</h4>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-3" >
                                            <Input name="firstname" half placeholder="first name" />
                                            <Input name="lastname" half placeholder="last name" />
                                        </div>
                                        <Input name="email" placeholder="email" type="email" />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-3">Address Info</h4>
                                    <div className="flex gap-3 flex-wrap" >
                                        <Input name="city" placeholder="City/Town" />
                                        <Input name="street" placeholder="Street" />
                                        <Input name="houseNumber" placeholder="House Number" />
                                        <Input name="phone" placeholder="Phone" type="tel" />
                                    </div>
                                </div>


                                <div>
                                    <h4 className="font-bold mb-3">Order Notes (Optional)</h4>
                                    <div className="flex gap-3 flex-wrap" >
                                        <Field name="note" rows={4} className="border-2 border-gray-500 focus:border-gray-900 w-full rounded-md p-3" placeholder="Order notes" />
                                        {/* <textarea name="note" rows={4} className="border-2 border-gray-500 focus:border-gray-900 w-full rounded-md p-3" placeholder="Order notes" /> */}
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="p-5  shadow-md w-full md:w-1/3">
                            <div className="w-full h-[35em]">
                                <CheckoutCanvas />
                            </div>

                            {Object.keys(snap).length && <div className=''>
                                <div className="mb-5">
                                    <div className="flex gap-x-1">
                                        <p className="font-bold">Size: </p>
                                        <p className="text-gray-500">{snap.size}</p>
                                    </div>
                                    <div className="flex gap-x-1">
                                        <p className="font-bold">Texture: </p>
                                        <p className="text-gray-500">{snap.texture}</p>
                                    </div>

                                    <div className="flex gap-x-1">
                                        <p className="font-bold">Quantity: </p>
                                        <p className="text-gray-500">{snap.quantity}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex gap-x-1">
                                        <p className="font-bold">Subtotal: </p>
                                        <p className="text-gray-900 ">Ghc {subtotal}</p>
                                    </div>
                                    <div className="flex gap-x-1">
                                        <p className="font-bold">Delivery: </p>
                                        <p className="text-gray-900">Ghc {deliveryFee.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="w-full mt-10 flex flex-col gap-3">
                                    <div className="flex gap-x-2 items-end">
                                        <p className="font-bold">Total: </p>
                                        <p className="text-gray-900 text-3xl font-bold">Ghc {total}</p>
                                    </div>
                                    <button type="submit" className="w-full py-2 bg-black text-white font-bold">Checkout</button>
                                </div>

                            </div>
                            }
                        </div>
                    </div>
                </Form>
            </Formik>
        </section>
    )
}

export default CheckoutPage