import Button from "../shared/button";
import TestimonialsCarousel from "./testimonials-carousel";

const Testimonials = () => {
  return (
    <div className="bg-primary flex flex-col gap-10 py-[72px]">
      <div className="boxed">
        <div className="relative flex max-w-max flex-col items-center gap-10">
          <h1 className="text-primary-light text-[200px] leading-none">
            loved by people
          </h1>
          <p className="text-secondary font-script absolute top-15 left-1/2 min-w-max -translate-x-1/2 rotate-[-5deg] text-8xl">
            what people are saying
          </p>
        </div>
      </div>
      <TestimonialsCarousel />
      <div className="mt-5 flex justify-center">
        <Button href="/reserve" variant="default">
          Reserve A TABLE
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
