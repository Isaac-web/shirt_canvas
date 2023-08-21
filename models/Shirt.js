import mongoose from "mongoose";

const shirtSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  color: {
    type: String,
    maxLength: 10,
  },
  logo: {
    type: String,
  },
  logoScale: {
    type: Number,
  },
  logoPosition: {
    type: [Number],
  },
  textureImage: {
    type: String,
  },
  texture: {
    type: String,
    default: "cotton",
  },
  size: {
    type: String,
  },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
