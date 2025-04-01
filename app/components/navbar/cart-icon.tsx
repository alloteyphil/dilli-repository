"use client";

import { useCart } from "@/context/CartContext";
import { CircleIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  const { totalItems } = useCart();

  return (
    <Link href="/checkout" className="relative" prefetch={true}>
      <ShoppingCartIcon className="size-6" />
      <div className="absolute -top-2 -right-3">
        <CircleIcon className="fill-accent text-accent size-6" />
        <p className="text-secondary absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-[14px]">
          {totalItems}
        </p>
      </div>
    </Link>
  );
};

export default CartIcon;
