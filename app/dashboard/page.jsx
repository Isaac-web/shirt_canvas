import Table from '@components/AppTable'
import ShirtCanvas from '@components/ShirtCanvas'
import Link from 'next/link'
import React from 'react'

const page = () => {

    const columns = [
        {
            _id: 1, label: "Shirt", value: "shirt", render: () => (
                <div className='flex flex-row items-center gap-3'>
                    <div className="bg-gray-100 rounded-md w-36">
                        <ShirtCanvas scale={1.5} />
                    </div>
                    <div>
                        <p>Color:  <span className="font-semibold text-sm">#FFF9902</span></p>
                        <p>Material: <span className="font-semibold text-sm">Cotton</span></p>
                        <p>Size: <span className="font-semibold text-sm">Lg</span></p>

                        <span className="mt-4 inline-block">
                            <Link href="#">
                                <p className="text-xs hover:underline">View</p>
                            </Link>
                        </span>
                    </div>

                </div>
            )
        },
        {
            _id: 1, label: "Customer", value: "customer", render: (row) => <div>
                <p>{row.customer}</p>
                <p className="text-gray-600 text-xs">{row.customer}</p>
            </div>
        },
        { _id: 1, label: "Number Of Pieces", value: "quantity", alignBody: "center" },
        { _id: 1, label: "Total", value: "total", render: (row) => <>Ghc {row.total}</> },
        { _id: 1, label: "Date", value: "date" },
    ]

    const data = [
        {
            "shirt": "Blue T-Shirt",
            "customer": "John Doe",
            "quantity": 2,
            "total": 30.00,
            "date": "2023-07-15"
        },
        {
            "shirt": "Red Polo Shirt",
            "customer": "Jane Smith",
            "quantity": 1,
            "total": 25.00,
            "date": "2023-07-16"
        },
        {
            "shirt": "White Button-Down",
            "customer": "Michael Johnson",
            "quantity": 3,
            "total": 45.00,
            "date": "2023-07-17"
        },
        {
            "shirt": "Black Hoodie",
            "customer": "Emily Brown",
            "quantity": 2,
            "total": 60.00,
            "date": "2023-07-18"
        },
        {
            "shirt": "Yellow V-Neck",
            "customer": "David Lee",
            "quantity": 1,
            "total": 15.00,
            "date": "2023-07-19"
        },
        {
            "shirt": "Green Tank Top",
            "customer": "Sarah Williams",
            "quantity": 4,
            "total": 40.00,
            "date": "2023-07-20"
        },
        {
            "shirt": "Purple Long-Sleeve",
            "customer": "Robert Wilson",
            "quantity": 2,
            "total": 50.00,
            "date": "2023-07-21"
        },
        {
            "shirt": "Orange Graphic Tee",
            "customer": "Jennifer Martin",
            "quantity": 1,
            "total": 20.00,
            "date": "2023-07-22"
        },
        {
            "shirt": "Gray Henley",
            "customer": "Daniel Anderson",
            "quantity": 3,
            "total": 55.00,
            "date": "2023-07-23"
        },
        {
            "shirt": "Pink Crop Top",
            "customer": "Amanda Garcia",
            "quantity": 2,
            "total": 35.00,
            "date": "2023-07-24"
        }
    ]



    return (
        <section className="container max-w-6xl m-auto">
            <div className='mb-8'>
                <h1 className="font-bold text-3xl">Orders</h1>
            </div>

            <div>
                <Table data={data} columns={columns} />
            </div>
        </section>
    )
}

export default page