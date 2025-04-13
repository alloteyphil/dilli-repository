import Image from "next/image";
import Button from "../shared/button";
import menu1 from "@/public/images/about-5-resized.png";
import menu2 from "@/public/images/menu2.png";
import menu3 from "@/public/images/about-1-resized.png";

const MenuSection = () => {
  return (
    <section className="bg-secondary overflow-x-hidden py-[72px]">
      <div className="boxed relative">
        <div className="relative flex flex-col items-center gap-10">
          <h1 className="text-accent text-7xl leading-none text-nowrap md:text-8xl xl:text-[148px]">
            small plates
          </h1>
          <div className="relative max-w-max">
            <h1 className="text-primary text-7xl leading-none md:text-8xl xl:text-[148px]">
              signatures
            </h1>
            <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl xl:text-8xl">
              our specialities
            </p>
          </div>
          <h1 className="text-accent text-7xl leading-none md:text-8xl xl:text-[148px]">
            large plates
          </h1>
          <h1 className="text-accent text-7xl leading-none md:text-8xl xl:text-[148px]">
            brunch
          </h1>
          <h1 className="text-accent text-7xl leading-none md:text-8xl xl:text-[148px]">
            sides
          </h1>
          <h1 className="text-accent text-7xl leading-none md:text-8xl xl:text-[148px]">
            desserts
          </h1>
          <Button variant="default" href="/menu" className="xl:mt-10">
            View Full Menu
          </Button>
        </div>
        <Button
          innerTextStyle="cursor-default"
          variant="outline-dark"
          className="absolute top-80 left-25 z-10 max-md:py-2 md:top-40 md:left-25 xl:top-[500px] xl:left-[390px]"
        >
          dilli dilli tikki
        </Button>
        <Button
          innerTextStyle="cursor-default"
          variant="outline-dark"
          className="absolute right-20 bottom-[430px] z-10 max-md:py-2 md:right-46 md:bottom-[460px] xl:right-[350px] xl:bottom-[680px]"
        >
          jalebi rabdi
        </Button>
        <Button
          innerTextStyle="cursor-default"
          variant="outline-dark"
          className="absolute right-10 bottom-40 z-10 max-md:py-2 md:right-39 md:bottom-50 xl:right-20 xl:bottom-72"
        >
          WENGERS SHAMI KEBAB
        </Button>

        <Image
          src={menu1}
          alt="menu"
          className="border-secondary-border absolute -bottom-12 left-15 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 scale-50 rotate-[349.89deg] border-[14px] object-cover md:-bottom-4 md:left-20 md:scale-70 xl:bottom-4 xl:left-[250px] xl:scale-100"
        />
        <Image
          src={menu2}
          alt="menu"
          className="border-secondary-border absolute -right-84 -bottom-10 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 scale-50 rotate-[13.31deg] border-[14px] object-cover md:-right-74 md:bottom-10 md:scale-70 xl:-right-44 xl:bottom-63 xl:scale-100"
        />
        <Image
          src={menu3}
          alt="menu"
          className="border-secondary-border absolute -right-78 -bottom-25 h-[350.4px] w-[341.36px] -translate-x-1/2 -translate-y-1/2 scale-50 rotate-[349.89deg] border-[14px] object-cover object-bottom md:-right-62 md:-bottom-25 md:scale-70 xl:right-5 xl:bottom-6 xl:scale-100"
        />
      </div>
    </section>
  );
};

export default MenuSection;
