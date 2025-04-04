import Button from "../shared/button";
import TestimonialsCarousel from "./testimonials-carousel";

const Testimonials = () => {
  return (
    <section className="bg-primary flex flex-col gap-4 py-[72px] md:gap-10">
      <div className="boxed">
        <div className="relative max-w-max">
          <h1 className="text-primary-light text-center text-7xl leading-none md:text-8xl xl:text-[148px]">
            loved by people
          </h1>
          <p className="text-secondary font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-center text-5xl md:text-8xl xl:text-8xl">
            what people are saying
          </p>
        </div>
      </div>
      <TestimonialsCarousel />
      <div className="mt-5 flex justify-center">
        <Button href="/contact#reservation" variant="default">
          Reserve A TABLE
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
