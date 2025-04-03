import Image from "next/image";
import Button from "../shared/button";
import hero1 from "@/public/images/hero1.png";
import hero2 from "@/public/images/hero2.png";
import hero3 from "@/public/images/hero3.png";

const Hero = () => {
  return (
    <>
      {/* <div className="bg-secondary px-2 pt-10 pb-[72px]">
        <div className="relative mx-auto w-[1600px] max-w-[1600px]">
          <h1 className="text-primary text-center text-[200px] leading-[0.9]">
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
            Delhi's culinary landscape
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
      </div> */}
      <div className="relative h-[100vh] overflow-x-hidden">
        <Image
          src={hero2}
          alt="hero"
          className="size-full object-cover object-center"
          priority
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/20" />
        <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="text-secondary mx-auto flex w-md max-w-screen flex-col items-center justify-center gap-6 px-4 md:w-4xl xl:w-[1200px] xl:gap-4 xl:px-0">
            <p className="text-md tracking-[0.2em] md:text-xl xl:text-2xl">
              Delhi's culinary landscape
            </p>
            <h1 className="text-secondary text-center text-4xl md:text-7xl xl:text-8xl">
              A Food Tale of Two Cities <br /> Old Delhi & New Delhi, india.
            </h1>
            <p className="font-script text-center text-3xl leading-[0.5] text-wrap md:text-5xl xl:mt-5 xl:text-6xl xl:leading-normal">
              a welcoming embrace in the heart of New York City
            </p>
            <div className="flex gap-2 md:gap-6 xl:w-[400px]">
              <Button href="/menu" variant="outline" className="mt-10 w-full">
                view our menu
              </Button>
              <Button
                href="/contact#reservation"
                variant="default"
                className="mt-10 w-full"
              >
                book now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
