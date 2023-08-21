"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const page = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleChange = ({ target: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch(`${"http://localhost:3000/api"}/users`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200 || res.status === 201) {
      router.replace("signIn");
    }
  };

  return (
    <div className="container max-w-xl m-auto">
      <h2 className="text-xl font-bold ">Sign Up</h2>
      <p className="text-sm text-gray-400 ">
        Provide your details in the form below to sign up
      </p>

      {errorMessage && (
        <div className="p-5 py-4 bg-red-100 mt-8 border-2 border-red-200 rounded-md relative">
          <button
            className="absolute top-2 right-2"
            onClick={() => setErrorMessage("")}
          >
            <AiOutlineClose className="text-gray-600" />
          </button>
          <p className="text-sm text-gray-500">{errorMessage}</p>
        </div>
      )}
      <form className="w-full py-5" onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Fullname"
            className="form_input w-full mb-5"
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="form_input w-full mb-5"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="form_input w-full mb-5"
            onChange={handleChange}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            className="form_input w-full mb-5"
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            type="text"
            placeholder="Confirm Password"
            className="form_input w-full mb-5"
            onChange={handleChange}
          />
        </div>

        <button className="w-32 px-5 py-3 rounded-md bg-black text-white mt-5 focus:opacity-80 hover:opacity-80">
          Sign Up
        </button>
      </form>

      <div className="mt-8">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="signIn">
            <span className="text-black font-bold hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
