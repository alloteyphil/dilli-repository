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
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      />
      <p className="text-primary absolute top-1/2 left-1/2 z-10 min-w-[250px] -translate-x-1/2 -translate-y-1/2 text-center text-3xl">
        {text}
      </p>
    </div>
  );
};

export default PrivateDiningCard;
