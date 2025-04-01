"use server";

import type { CartItem } from "@/types/cart";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia",
});

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://dilli-dilli.vercel.app"
    : process.env.BASE_URL;

export const createCheckoutSession = async (
  items: CartItem[],
  email: string,
  shipping: {
    address: {
      city: string;
      address: string;
      address2: string;
      post_code: string;
    };
    first_name: string;
    last_name: string;
  },
) => {
  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: { name: item.name },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Restructure items to only include id, variant, and quantity
  const simplifiedItems = items.map(({ id, variant, quantity }) => ({
    id,
    variant,
    quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    payment_method_types: ["card", "cashapp"],
    customer_email: email,
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/cancel`,
    metadata: {
      customer_name: `${shipping.first_name} ${shipping.last_name}`,
      customer_email: email,
      shipping_address: JSON.stringify(shipping),
      items: JSON.stringify(simplifiedItems),
      total_amount: totalAmount.toString(),
    },
  });

  return session.url;
};
