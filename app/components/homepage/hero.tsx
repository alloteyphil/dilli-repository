import Image from "next/image";
import hero from "@/public/images/hero-food.png";
import Button from "../shared/button";

const Hero = () => {
  return (
    <div className="bg-secondary px-2 pt-10 pb-[72px]">
      <div className="relative mx-auto w-[1600px] max-w-[1600px]">
        <h1 className="text-primary text-center text-[200px] leading-[0.9] tracking-tight">
          A Food Tale of Two Cities - Old Delhi & New Delhi, india.
        </h1>
        <Image
          src={hero}
          alt="hero"
          className="absolute -bottom-72 left-28 scale-[45%]"
        />
        <Button
          variant="outline"
          className="absolute bottom-32 left-60 z-10 cursor-default"
          innerTextStyle="cursor-default"
        >
          Delhi’s culinary landscape
        </Button>
        <Button
          variant="outline"
          className="absolute bottom-64 left-[730px] cursor-default"
          innerTextStyle="cursor-default"
        >
          a welcoming embrace
        </Button>
        <Button
          variant="outline"
          className="absolute top-28 right-56 cursor-default"
          innerTextStyle="cursor-default"
        >
          heart of New York City
        </Button>
        <Button
          variant="outline"
          className="absolute right-40 -bottom-6 cursor-default"
          innerTextStyle="cursor-default"
        >
          a timeless charm
        </Button>
      </div>
    </div>
  );
};

export default Hero;
