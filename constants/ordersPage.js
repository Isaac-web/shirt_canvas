import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import ShirtCanvas from "@components/ShirtCanvas";

export const recentOrdersColumns = [
  {
    label: "Shirt",
    render: (item) => (
      <div className="flex flex-row items-center gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-lg">
          <Canvas
            camera={{
              fov: 18,
            }}
          >
            <ShirtCanvas shirt={item?.shirt} />
          </Canvas>
        </div>
        <div style={{ marginLeft: 10 }}>
          <p className="text-sm text-gray-600">{item.shirt.color}</p>
          <p className="text-sm text-gray-500">{item.shirt.texture}</p>
          <Link
            href="/#"
            className="text-sm text-black hover:underline font-semibold"
          >
            View
          </Link>
        </div>
      </div>
    ),
  },
  {
    label: "Customer",
    render: (item) => (
      <div>
        <p className="font-semibold">{item.user.name}</p>
        <p className="text-xs text-gray-500">{item.user.email}</p>
      </div>
    ),
  },
  {
    label: "Total",
    render: (item) => (
      <div>
        <p>Ghc{item.total.toFixed(2)}</p>
        <p className="text-xs text-gray-500">
          Subtotal: {item.subtotal.toFixed(2)}, Delivery:
          {item.delivery.toFixed(2)}
        </p>
      </div>
    ),
  },
  {
    label: "Date",
    render: (item) => (
      <p>{new Date(item.createdAt).toUTCString().slice(0, 10)}</p>
    ),
  },
];
