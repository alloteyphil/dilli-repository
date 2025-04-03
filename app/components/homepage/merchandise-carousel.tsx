import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/product";
import MerchandiseCard from "./merchandise-card";

const MerchandiseCarousel = ({ products }: { products: Product[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="ml-0">
        {products.map((product) => (
          <CarouselItem
            key={product._id}
            className="pl-0 lg:basis-1/2 xl:basis-1/3"
          >
            <div className="grid place-items-center">
              <MerchandiseCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-secondary border-accent text-accent -left-3 px-8 py-6 xl:left-9" />
      <CarouselNext className="bg-secondary border-accent text-accent -right-3 px-8 py-6 xl:right-9" />
    </Carousel>
  );
};

export default MerchandiseCarousel;
