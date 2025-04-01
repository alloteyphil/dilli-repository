"use client";

import CartItem from "./cart-item";
import { useCart } from "@/context/CartContext";

const CartItems = () => {
  const { items } = useCart();

  return (
    <div className="flex max-h-[500px] flex-col gap-6 overflow-y-auto">
      {items.map((item) => (
        <CartItem key={`${item.id}_${item.variant}`} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
