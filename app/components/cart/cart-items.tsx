"use client";

import { useState, useEffect } from "react";
import CartItem from "./cart-item";
import { getCartItems } from "@/actions/cart.actions";

const CartItems = () => {
  const [mounted, setMounted] = useState(false);

  const cartItems = getCartItems();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>loading</div>; // or a loading skeleton
  }

  return (
    <div className="flex max-h-[500px] flex-col gap-6 overflow-y-auto">
      {cartItems.map((item) => (
        <CartItem key={`${item.id}_${item.variant}`} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
