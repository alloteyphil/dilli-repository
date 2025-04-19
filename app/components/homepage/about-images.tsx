import Image from "next/image";
import aboutImage1 from "@/public/images/about-1-resized.png";
import aboutImage2 from "@/public/images/about-2-resized.png";
import aboutImage3 from "@/public/images/about-3-resized.png";
import aboutImage4 from "@/public/images/about-4-resized.png";
import aboutImage5 from "@/public/images/about-5-resized.png";
import spark from "@/public/images/spark.svg";
import AnimateWrapper from "../shared/animate-wrapper";

const AboutImages = () => {
  return (
    <div className="intersect:animate-fade intersect-once animate-delay-600 flex gap-4 px-4 md:px-8 xl:px-0">
      <Image
        src={aboutImage1}
        className="hidden h-[450px] rounded-full object-cover object-bottom xl:block"
        alt="about-image-1"
      />

      <Image
        src={aboutImage2}
        className="object-cover max-lg:w-full max-md:h-[300px]"
        alt="about-image-2"
      />

      <div className="relative max-h-max max-w-max max-lg:hidden">
        <Image
          src={aboutImage3}
          className="h-[450px] rounded-full object-cover object-[25%_50%] max-md:h-[200px] max-md:w-[150px]"
          alt="about-image-3"
        />
        <Image
          src={spark}
          className="absolute inset-1/2 z-100 size-28 -translate-x-1/2 -translate-y-1/2 max-md:size-10"
          alt="spark"
        />
        <div className="border-secondary absolute inset-[25px] rounded-full border max-md:inset-[10px]" />
      </div>

      <Image
        src={aboutImage4}
        className="max-lg:w-full max-md:h-[300px]"
        alt="about-image-4"
      />

      <Image
        src={aboutImage5}
        className="hidden h-[450px] rounded-full object-cover object-center xl:block"
        alt="about-image-5"
      />
    </div>
  );
};

export default AboutImages;
