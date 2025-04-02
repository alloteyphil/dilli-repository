"use client";

import { useCart } from "@/context/CartContext";
import { CircleIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const CartIcon = ({ isHome = false }: { isHome?: boolean }) => {
  const { totalItems } = useCart();

  return (
    <Link href="/checkout" className="relative" prefetch={true}>
      <ShoppingCartIcon
        className={`${isHome ? "text-secondary" : "text-accent"} size-6`}
      />
      <div className="absolute -top-2 -right-3">
        <CircleIcon
          className={`${isHome ? "text-secondary fill-secondary" : "fill-accent text-accent"} size-6`}
        />
        <p
          className={`absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-[14px] ${
            isHome ? "text-accent" : "text-secondary"
          }`}
        >
          {totalItems}
        </p>
      </div>
    </Link>
  );
};

export default CartIcon;
