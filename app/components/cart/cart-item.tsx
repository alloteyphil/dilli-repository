import type { CartItem } from "@/types/cart";
import { CircleIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
const CartItem = ({ item }: { item: CartItem }) => {
  const { removeItem } = useCart();

  return (
    <div className="relative flex w-full items-center gap-6 py-2">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className="size-[100px] object-cover"
        />
        <div className="absolute -top-2 -right-2">
          <CircleIcon className="fill-accent text-accent size-5" />
          <p className="text-secondary absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-[10px]">
            {item.quantity}
          </p>
        </div>
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
        <div className="flex justify-between">
          <p className="text-accent">
            {item.variant === "S"
              ? "Small"
              : item.variant === "M"
                ? "Medium"
                : item.variant === "L"
                  ? "Large"
                  : "One Size"}
          </p>
          <Trash2Icon
            onClick={() => removeItem(item.id)}
            className="text-primary size-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
