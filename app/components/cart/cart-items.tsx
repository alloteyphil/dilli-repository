"use client";

import { useState, useEffect } from "react";
import CartItem from "./cart-item";
import { useCartStore } from "@/store/cartStore";

const CartItems = () => {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>loading</div>; // Or a loading skeleton
  }

  return (
    <div className="flex max-h-[500px] flex-col gap-6 overflow-y-auto">
      {items?.map((item) => (
        <CartItem key={`${item.id}_${item.variant}`} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
