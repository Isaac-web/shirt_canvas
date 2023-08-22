import Address from "@models/Address";
import Order from "@models/Order";
import Shirt from "@models/Shirt";
import { connectToDb } from "@utils/db";

export const POST = async (request) => {
  const body = await request.json();

  const address = new Address({
    user: body.user._id,
    city: body.address.city,
    street: body.address.street,
    houseNumber: body.address.houseNumber,
    phone: body.address.phone,
  });

  const shirt = new Shirt({
    color: body.shirt.color,
    logo: body.shirt.logo,
    logoScale: body.shirt.scale,
    logoPosition: body.shirt.logoPosition,
    textureImage: body.shirt.textureImage,
    texture: body.shirt.texture,
    size: body.shirt.size,
  });

  const subtotal = Number((body.order.quantity * 49.99).toFixed(2));
  const delivery = 10;
  const order = new Order({
    user: body.user._id,
    quantity: body.quantity,
    subtotal,
    delivery,
    total: subtotal + delivery,
    shirt: shirt._id,
    address: address._id,
  });

  await Promise.all([order.save(), address.save(), shirt.save()]);

  return new Response(
    JSON.stringify({
      message: "Your order has been placed.",
      data: {
        order,
        address,
        shirt,
      },
    }),
    {
      status: 201,
    }
  );
};

export const GET = async (request) => {
  connectToDb();
  try {
    const orders = await Order.find()
      .populate("address")
      .populate("shirt")
      .populate("user");

    return new Response(JSON.stringify({ message: "Orders fetched", orders }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
      }
    );
  }
};
