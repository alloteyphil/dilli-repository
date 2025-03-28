import Button from "../shared/button";
import TestimonialsCarousel from "./testimonials-carousel";

const Testimonials = () => {
  return (
    <div className="bg-primary flex flex-col gap-10 py-[72px]">
      <div className="boxed">
        <div className="relative max-w-max">
          <h1 className="text-primary-light text-[148px] leading-none">
            loved by people
          </h1>
          <p className="text-secondary font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
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
    </div>
  );
};

export default Testimonials;
