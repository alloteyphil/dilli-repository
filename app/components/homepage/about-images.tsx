import Image from "next/image";
import aboutImage1 from "@/public/images/about-1-resized.png";
import aboutImage2 from "@/public/images/about-2-resized.png";
import aboutImage3 from "@/public/images/about-3-resized.png";
import aboutImage4 from "@/public/images/about-4-resized.png";
import aboutImage5 from "@/public/images/about-5-resized.png";
import spark from "@/public/images/spark.svg";

const AboutImages = () => {
  return (
    <div className="flex gap-4">
      <Image
        src={aboutImage1}
        className="h-[450px] rounded-full object-cover object-bottom"
        alt="about-image-1"
      />

      <Image src={aboutImage2} className="object-cover" alt="about-image-2" />

      <div className="relative max-h-max max-w-max">
        <Image
          src={aboutImage3}
          className="h-[450px] rounded-full object-cover object-[25%_50%]"
          alt="about-image-3"
        />
        <Image
          src={spark}
          className="absolute inset-1/2 z-100 size-28 -translate-x-1/2 -translate-y-1/2"
          alt="spark"
        />
        <div className="border-secondary absolute inset-[25px] rounded-full border" />
      </div>

      <Image src={aboutImage4} alt="about-image-4" />

      <Image
        src={aboutImage5}
        className="h-[450px] rounded-full object-cover object-center"
        alt="about-image-5"
      />
    </div>
  );
};

export default AboutImages;
