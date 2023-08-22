import User, { validate } from "@models/User";
import { hashPassword } from "@utils/crypt";
import { connectToDb } from "@utils/db";

export const POST = async (request) => {
  const body = await request.json();

  const { error } = validate(body);
  if (error)
    return new Response(JSON.stringify({ message: error.details[0].message }), {
      status: 400,
    });

  connectToDb();

  const { name, email, password, phone } = body;
  const user = new User({
    name,
    email,
    phone,
  });

  user.password = await hashPassword(password);

  const admin = await User.findOne();
  if (!admin) user.isAdmin = true;

  await user.save();

  user.password = undefined;

  const res = new Response(
    JSON.stringify({ message: "User created successfully", user }),
    {
      status: 200,
    }
  );

  return res;
};
