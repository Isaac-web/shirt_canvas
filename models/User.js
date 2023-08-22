import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    minlength: 7,
    maxlength: 15,
    trim: true,
  },
  imageUrl: { type: String, trim: true },
  imageBackgroundColor: { type: String, trim: true, length: 6 },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export const validate = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).required(),
    imageUrl: Joi.string().optional(),
    imageBackgroundColor: Joi.string().length(6).optional(),
    password: Joi.string().min(5).max(256).required(),
    confirmPassword: Joi.string().min(5).max(256).required(),
  });

  return schema.validate(user);
};

export default User;
