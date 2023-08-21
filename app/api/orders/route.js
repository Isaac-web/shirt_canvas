import Address from "@models/Address";
import Order from "@models/Order";
import Shirt from "@models/Shirt";

export const POST = async (request) => {
  console.log("Something happened.");
  const body = await request.json();

  // create order
  const subtotal = Number((body.order.quantity * 49.99).toFixed(2));
  const delivery = 10;
  const order = new Order({
    user: body.user._id,
    quantity: body.quantity,
    subtotal,
    delivery,
    total: subtotal + delivery,
  });

  const address = new Address({
    orderId: order._id,
    city: body.address.city,
    street: body.address.street,
    houseNumber: body.address.houseNumber,
    phone: body.address.phone,
  });

  const shirt = new Shirt({
    orderId: order._id,
    color: body.shirt.color,
    logo: body.shirt.logo,
    logoScale: body.shirt.scale,
    logoPosition: body.shirt.logoPosition,
    textureImage: body.shirt.textureImage,
    texture: body.shirt.texture,
    size: body.shirt.size,
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
