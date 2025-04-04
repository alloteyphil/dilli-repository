import { testimonials } from "@/data/testimonials";
import TestimonialsCard from "./testimonials-card";
import { MovingCarousel } from "../shared/moving-carousel";

const icons = [
  "/images/testimonialIcon1.svg",
  "/images/testimonialIcon2.svg",
  "/images/testimonialIcon3.svg",
];

const TestimonialsCarousel = () => {
  return (
    <MovingCarousel>
      {testimonials.map((testimonial, index) => (
        <TestimonialsCard
          key={testimonial.id}
          author={testimonial.name}
          icon={icons[index % 3]}
          text={testimonial.text}
        />
      ))}
    </MovingCarousel>
  );
};

export default TestimonialsCarousel;
