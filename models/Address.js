import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  city: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  street: {
    type: String,
    maxlength: 256,
    trim: true,
  },
  houseNumber: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    maxlength: 15,
  },
});

const Address =
  mongoose.models.Address || mongoose.model("Address", addressSchema);

export default Address;
