import Image from "next/image";
import outerBorder from "@/public/images/private-outer-border.svg";
import innerBorder from "@/public/images/private-inner-border.svg";

const PrivateDiningCard = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      <Image src={outerBorder} alt="outer border" className="" />
      <Image
        src={innerBorder}
        alt="inner border"
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-90 xl:scale-100"
      />
      <p className="text-primary absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center max-md:min-w-[250px] md:min-w-[200px] md:text-xl xl:min-w-[250px] xl:text-3xl">
        {text}
      </p>
    </div>
  );
};

export default PrivateDiningCard;
