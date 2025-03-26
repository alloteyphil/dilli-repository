import { MovingCarousel } from "../shared/moving-carousel";
import MenuCard from "./menu-card";
import { menuCarouselPhotos } from "@/data/menu-carousel-photos";

const MenuCarousel = () => {
  return (
    <div className="mt-10">
      <MovingCarousel speed="super-slow">
        {menuCarouselPhotos.map((photo, index) => (
          <MenuCard key={index} photo={photo} />
        ))}
      </MovingCarousel>
    </div>
  );
};

export default MenuCarousel;
