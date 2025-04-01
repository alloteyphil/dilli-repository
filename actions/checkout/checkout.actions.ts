"use server";

import type { CartItem } from "@/types/cart";
import { createCheckoutSession } from "../stripe/stripe.actions";

export const checkout = async (
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
  if (!email || !items || !shipping) {
    throw new Error("Missing required fields");
  }

  if (items.length === 0) {
    throw new Error("No items to checkout");
  }

  try {
    const session = await createCheckoutSession(items, email, shipping);
    return session;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create checkout session");
  }
};
