import { getProducts } from "@/actions/get-product.actions";
import MerchandiseCarousel from "./merchandise-carousel";
import MerchandiseCard from "./merchandise-card";

const Merchandise = async () => {
  const data = await getProducts();

  return (
    <div className="bg-secondary py-[72px]">
      <div className="boxed flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-primary text-[148px] leading-none">
            spice your styling
          </h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
            shop our merchandise
          </p>
        </div>
        {Array.isArray(data.products) && (
          <MerchandiseCarousel products={data.products} />
        )}
      </div>
    </div>
  );
};

export default Merchandise;
