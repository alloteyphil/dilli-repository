import Image from "next/image";
import outerBorder from "@/public/images/productouterborder.svg";
import innerBorder from "@/public/images/productinnerborder.svg";
import type { Product } from "@/types/product";
import Ellipse from "../shared/ellipse";
import Button from "../shared/button";

const MerchandiseCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative h-[489px] w-[361.92px]">
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
        href={`/products/${product.slug}`}
        className="absolute bottom-8 left-1/2 z-10 w-[320px] -translate-x-1/2 translate-y-[100px] px-28 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
      >
        buy now
      </Button>
    </div>
  );
};

export default MerchandiseCard;
