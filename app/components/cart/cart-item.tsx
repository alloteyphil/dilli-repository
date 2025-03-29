import type { CartItem } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ item }: { item: CartItem }) => {
  return (
    <div className="relative flex w-full items-center gap-6">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className="size-[100px] object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-between">
          <Link href={`/products/${item.slug}`}>
            <p className="text-primary decoration-primary hover:underline">
              {item.name}
            </p>
          </Link>
          <p className="text-accent">${item.price}</p>
        </div>
        <div className="flex gap-1">
          <p className="text-accent">
            {item.variant === "S"
              ? "Small"
              : item.variant === "M"
                ? "Medium"
                : item.variant === "L"
                  ? "Large"
                  : "One Size"}
          </p>
          <p className="text-accent">{item.quantity}X</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
