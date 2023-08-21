import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      max: 100000,
      required: true,
      default: 1,
    },
    subtotal: {
      type: Number,
      min: 0,
      max: 100000,
      required: true,
      default: function () {
        return this.quantity * 49.99;
      },
      get: function (value) {
        return value.toFixed(2);
      },
    },
    delivery: {
      type: Number,
      min: 0,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      maxlength: 4096,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
