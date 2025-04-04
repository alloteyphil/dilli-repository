import { CircleIcon } from "lucide-react";
import Image from "next/image";
import privateDiningImage from "@/public/images/private-dining-hero.png";
import logo from "@/public/images/footerlogo.svg";

const HeroPrivateDining = () => {
  return (
    <section className="bg-secondary overflow-x-hidden pt-6 md:py-1">
      <div className="bg-accent relative grid w-screen max-w-screen place-items-center px-4 py-8 max-md:h-[80vh] md:max-w-[4000px] md:px-8 md:py-20 xl:px-0">
        <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 gap-[3px] overflow-x-hidden">
          {Array.from({ length: 400 }).map((_, index) => (
            <CircleIcon
              key={index}
              className="fill-secondary text-secondary size-[28px]"
            />
          ))}
        </div>
        <div className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-[3px] overflow-x-hidden">
          {Array.from({ length: 400 }).map((_, index) => (
            <CircleIcon
              key={index}
              className="fill-secondary text-secondary size-[28px]"
            />
          ))}
        </div>
        <div className="relative h-full w-full max-w-[1500px] md:h-[620px]">
          <div className="absolute inset-0 z-[5] bg-black opacity-40" />
          <Image
            src={privateDiningImage}
            alt="Private Dining"
            className="size-full object-cover"
          />
          <Image
            src={logo}
            alt="logo"
            className="absolute top-1/2 left-1/2 z-10 size-[900px] -translate-x-1/2 -translate-y-1/2 scale-80 xl:scale-100"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPrivateDining;
