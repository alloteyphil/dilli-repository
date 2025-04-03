"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import Ellipse from "../shared/ellipse";
import Button from "../shared/button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const MerchandiseCard = ({ product }: { product: Product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const { addItem } = useCart();

  return (
    <div className="flex max-w-[361.92px] flex-col gap-4 max-md:max-w-full">
      <div className="group relative h-[489px] w-[361.92px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          className="size-full object-contain"
        />

        <Ellipse className="bg-secondary absolute -top-5 -left-5 z-10 size-[40px]" />
        <Ellipse className="bg-secondary absolute -top-5 -right-5 z-10 size-[40px]" />
        <Ellipse className="bg-secondary absolute -bottom-5 -left-5 z-10 size-[40px]" />
        <Ellipse className="bg-secondary absolute -right-5 -bottom-5 z-10 size-[40px]" />

        <Button
          variant="outline"
          onClick={() =>
            addItem({
              id: product._id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image,
              slug: product.slug,
              variant: selectedVariant,
            })
          }
          className="absolute bottom-8 left-1/2 z-10 w-[320px] -translate-x-1/2 translate-y-[100px] px-28 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
        >
          add to cart
        </Button>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-primary text-2xl">{product.name}</p>
          <p className="text-accent pr-1 text-2xl md:pr-0">$ {product.price}</p>
        </div>
        {product.variants.length > 1 && (
          <div className="flex gap-2">
            {product.variants.map((variant, index) => (
              <div
                onClick={() => setSelectedVariant(variant)}
                key={index}
                className={`border-accent relative cursor-pointer rounded-full border p-5 ${
                  selectedVariant === variant
                    ? "bg-accent text-secondary"
                    : "text-accent bg-transparent"
                }`}
              >
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {variant}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchandiseCard;
