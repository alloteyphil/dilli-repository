import Image from "next/image";
import Button from "../shared/button";
import menu1 from "@/public/images/about-5-resized.png";
import menu2 from "@/public/images/menu2.png";
import menu3 from "@/public/images/about-1-resized.png";

const MenuSection = () => {
  return (
    <div className="bg-secondary py-[72px]">
      <div className="boxed relative">
        <div className="relative flex flex-col items-center gap-10">
          <h1 className="text-accent text-[148px] leading-none">
            small plates
          </h1>
          <div className="relative max-w-max">
            <h1 className="text-primary text-[148px] leading-none">
              signatures
            </h1>
            <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 text-8xl">
              our specialities
            </p>
          </div>
          <p className="text-primary -mt-4 max-w-92 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-accent text-[148px] leading-none">
            large plates
          </h1>
          <h1 className="text-accent text-[148px] leading-none">sides</h1>
          <h1 className="text-accent text-[148px] leading-none">desserts</h1>
          <Button variant="default" className="mt-10">
            View Full Menu
          </Button>
        </div>
        <Button
          innerTextStyle="cursor-default"
          variant="outline-dark"
          className="absolute bottom-[640px] left-[390px] z-10"
        >
          GILAFI PANEER
        </Button>
        <Button
          innerTextStyle="cursor-default"
          variant="outline-dark"
          className="absolute right-[350px] bottom-[680px] z-10"
        >
          jalebi rabdi
        </Button>
        <Button
          innerTextStyle="cursor-default"
          variant="outline-dark"
          className="absolute right-30 bottom-72 z-10"
        >
          KOYLA CHICKEN
        </Button>

        <Image
          src={menu1}
          alt="menu"
          className="border-secondary-border absolute bottom-4 left-[280px] h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 rotate-[349.89deg] border-[14px] object-cover"
        />
        <Image
          src={menu2}
          alt="menu"
          className="border-secondary-border absolute -right-44 bottom-63 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 rotate-[13.31deg] border-[14px] object-cover"
        />
        <Image
          src={menu3}
          alt="menu"
          className="border-secondary-border absolute right-5 bottom-6 h-[350.4px] w-[341.36px] -translate-x-1/2 -translate-y-1/2 rotate-[349.89deg] border-[14px] object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default MenuSection;
