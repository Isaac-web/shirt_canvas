"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, getProviders } from "next-auth/react";

import googleIcon from "../../../assets/google-icon.png";

const providerIcons = {
  google: googleIcon,
};

const signInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const providers = await getProviders();

      if (providers?.credentials) delete providers.credentials;

      let providerArray = Object.values(providers);
      providerArray = providerArray.map((p) => {
        p.icon = providerIcons[p.id];
        return p;
      });

      setProviders(providerArray);
    };

    setUpProviders();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <section className="w-full h-scree flex justify-center pt-10">
      <div className="shadow-lg p-5 rounded-md">
        <h3 className="font-semibold text-center text-xl mb-5">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 min-w-[400px]">
            <input
              name="email"
              onChange={({ target: input }) => setEmail(input.value)}
              className="form_input"
              type="text"
              placeholder="email"
            />
            <input
              onChange={({ target: input }) => setPassword(input.value)}
              className="form_input"
              type="password"
              placeholder="password"
            />
            <button
              type={"submit"}
              className="py-3 px-5 rounded-md text-white bg-black hover:opacity-90 focus:opacity-90 font-bold"
            >
              Login
            </button>
          </div>
        </form>

        <div className="py-5">
          <p className="text-gray-400 text-center text-sm">Or continue with</p>
        </div>

        {providers?.length ? (
          providers.map((p, index) => (
            <div key={index}>
              <button
                className="py-3 px-5 rounded-md border-2 border-black hover:opacity-90 w-full flex justify-center items-center gap-2 font-bold"
                onClick={() => signIn(p.id)}
              >
                <Image
                  alt={`${p.name} Icon`}
                  width={100}
                  height={100}
                  className="w-[24px] h-[24px]"
                  src={p.icon}
                />
                {p.name}
              </button>
            </div>
          ))
        ) : (
          <div className="py-5">
            <p className="text-center text-xs text-gray-400">
              Loading OAuth...
            </p>
          </div>
        )}

        <div className="mt-20 mb-5">
          <p className="text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link href="signUp">
              <span className="font-bold hover:underline text-black">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default signInPage;
