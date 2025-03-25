import { testimonials } from "@/data/testimonials";
import TestimonialsCard from "./testimonials-card";
import icon1 from "@/public/images/testimonialIcon1.svg";
import icon2 from "@/public/images/testimonialIcon2.svg";
import icon3 from "@/public/images/testimonialIcon3.svg";
import { MovingCarousel } from "../shared/moving-carousel";

const icons = [icon1, icon2, icon3];

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
