import { MovingCarousel } from "../shared/moving-carousel";
import { photos } from "@/data/footer-carousel-photos";
import FooterCarouselCard from "./footer-carousel-card";

const FooterCarousel = () => {
  return (
    <div className="absolute -bottom-32 left-1/2 z-20 w-full -translate-x-1/2">
      <MovingCarousel speed="very-slow">
        {photos.map((photo, index) => (
          <FooterCarouselCard key={index} photo={photo} />
        ))}
      </MovingCarousel>
    </div>
  );
};

export default FooterCarousel;
