"use client";


import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const [providers, setProviders] = useState(null);
    const [loadingProviders, setLoadingProviders] = useState(false);

    const setUpProviders = async () => {
        setLoadingProviders(true)
        const providersObject = await getProviders();
        if (providersObject) {
            const providers = Object.values(providersObject);
            setProviders(providers);
        }
        setLoadingProviders(false)
    }

    useEffect(() => {
        setUpProviders();
    }, []);





    return (
        <section className="flex flex-col justify-center items-center py-10">
            {loadingProviders ?
                "Please wait..." :
                <>
                    <div className="mb-16 py-8">
                        <h1 className="text-3xl text-bold">Sign In</h1>
                    </div>

                    <div>
                        {providers && providers.map(provider =>
                            <button
                                className="bg-white border-gray-900 border-2 px-10 py-4 text-black rounded-lg"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                            >
                                Continue With Google
                            </button>
                        )}

                    </div>
                </>
            }

        </section>
    )
}


export default LoginPage