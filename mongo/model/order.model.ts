import { Schema, model, models, Document } from "mongoose";
import { IOrderItem } from "@/types/order";

interface IOrder extends Document {
  stripeId: string;
  userDetails: {
    email: string;
    name: string;
    address: {
      city: string;
      address: string;
      address2: string;
      postCode: string;
    };
  };
  items: IOrderItem[];
  totalAmount: string;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    stripeId: { type: String, required: true, unique: true },
    userDetails: {
      type: {
        email: { type: String, required: true },
        name: { type: String, required: true },
        address: {
          type: {
            city: { type: String, required: true },
            address: { type: String, required: true },
            address2: { type: String, required: true },
            postCode: { type: String, required: true },
          },
          required: true,
        },
      },
      required: true,
    },
    items: [
      {
        id: { type: String, required: true },
        variant: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: String, required: true },
    createdAt: { type: Date, required: true },
  },
  { timestamps: true },
);

const Order = models.Order || model<IOrder>("Order", orderSchema);

export default Order;
