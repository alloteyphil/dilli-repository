"use server";

import Order from "@/mongo/model/order.model";
import type { IOrder } from "@/types/order";
import { connectToDatabase } from "@/mongo";

export const createOrder = async (order: IOrder) => {
  await connectToDatabase();

  if (!order) {
    throw new Error("Order is required");
  }

  try {
    const newOrder = await Order.create(order);
    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    throw new Error("Failed to create order");
  }
};
