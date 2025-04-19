import Image from "next/image";
import ourStory from "@/public/images/our-story1.png";
import ourStory2 from "@/public/images/our-story2.png";
import heart from "@/public/images/heart.svg";
import Button from "../shared/button";

const OurStory = () => {
  return (
    <section className="bg-secondary-dark py-[72px]">
      <div className="boxed flex w-full flex-col gap-10 md:flex-row">
        <div className="relative w-full max-md:min-h-[300px] lg:w-[45%]">
          <div className="intersect:animate-fade-right intersect-once animate-delay-200 relative max-w-max">
            <h1 className="text-primary text-7xl leading-[0.75] max-lg:text-nowrap md:text-8xl xl:text-[148px]">
              Our Story
            </h1>
            <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] text-5xl md:text-6xl xl:text-8xl">
              who we are
            </p>
          </div>
          <Image
            src={ourStory}
            alt="our story"
            className="intersect:animate-fade intersect-once animate-delay-400 absolute top-0 left-0 scale-75 md:top-5 md:left-8 md:scale-80 xl:top-6 xl:-left-10 xl:scale-75"
          />
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-[55%] xl:gap-10">
          <p className="text-primary intersect:animate-fade-left intersect-once animate-delay-200 xl:pl-14">
            <span className="italic">
              once upon a time, in the bustling heart of New York City, there
              stood a restaurant unlike any other
            </span>{" "}
            —a place where the colors of Old Delhi met the modern vibrancy of
            New York. It was called Dilli Dilli, and it was more than just a
            dining destination; it was an experience— a portal that transported
            you from the streets of Manhattan to the soul of India’s capital.
          </p>
          <div className="intersect:animate-fade-right intersect-once animate-delay-400 relative hidden max-h-max max-w-max lg:block">
            <Image
              src={ourStory2}
              className="h-[400px] rounded-full object-cover object-center"
              alt="about-image-3"
            />
            <Image
              src={heart}
              className="absolute inset-1/2 z-100 size-24 -translate-x-1/2 -translate-y-1/2"
              alt="spark"
            />
            <div className="border-secondary absolute inset-[25px] rounded-full border" />
          </div>
          <div className="text-primary intersect:animate-fade-left intersect-once animate-delay-200 flex flex-col gap-4 xl:pl-14">
            <p>
              It all began with a vision—a desire to share the forgotten flavors
              of Delhi's rich culinary heritage with the world. The founders, a
              group of passionate food lovers and designers, knew that they
              wanted to create something exceptional.
            </p>
            <p>
              They were determined to capture the essence of Delhi, both the old
              and the new, and bring it to the heart of New York City, a place
              known for its cultural melting pot and love for diverse cuisines.
              The facade created a timeless charm that felt like a whisper from
              Delhi’s own markets and streets. It was a welcoming embrace,
              beckoning guests to come inside and experience something special.
            </p>
            <p>
              And so, the story of Dilli Dilli continues, one bite, one drink,
              and one unforgettable experience at a time.
            </p>
          </div>
          <Button
            href="/menu"
            variant="default"
            className="intersect:animate-fade-left intersect-once animate-delay-200 max-xl:mt-6 xl:ml-14"
          >
            view our inspired menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
