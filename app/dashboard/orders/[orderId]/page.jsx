import ShirtCanvas from "@components/ShirtCanvas"
import Image from "next/image"

const page = () => {
    return (
        <section className="container max-w-6xl m-auto flex flex-row flex-wrap">
            <div className="w-full md:w-2/3">
                <div className="h-[40em] bg-gray-50 -pt-10">
                    <ShirtCanvas scale={3} fov={23} />
                </div>

                <div>Logos</div>
                <div>Materials</div>
            </div>


            <div className="w-full md:w-1/3 p-10">
                <div className="mb-10">
                    <div className="flex flex-row gap-3 items-end">
                        <div className="font-semibold">Total</div>
                        <div><h1 className="font-bold text-5xl tracking-tighter">59.99</h1></div>
                    </div>
                    <div className="mb-5">
                        <p className="text-xs text-gray-500">Shipping: 10.00</p>
                    </div>

                    <div className="mb-10">
                        <p>Number of shirts: <span className="font-bold">1</span></p>
                    </div>

                    <div>
                        <span className="text-xs block mb-1">Note</span>
                        <p className="py-3 px-2 rounded-md bg-gray-100 text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae voluptas eligendi architecto adipisci qui assumenda libero
                            minus animi non illo.
                        </p>
                    </div>
                </div>

                <div className="mb-10">
                    <h4 className="font-semibold text-md">Delivery info</h4>
                    <div>
                        <p>City/Town: Kumasi</p>
                        <p>House Number: xxxxxxxxxxx</p>
                        <p>Phone: 9999999999</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">
                        Customer Info
                    </h4>
                    <div className="flex gap-3 items-center">
                        <div>
                            <Image alt="profile photo" src="/assets/ai.png" width={60} height={60} className="bg-gray-100 rounded-full" />
                        </div>
                        <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-xs text-gray-500">johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page