import Image from "next/image";
import ellipse from "@/public/images/ellipse.svg";
import Ellipse from "../shared/ellipse";
import { CircleIcon } from "lucide-react";

const HeroPrivateDining = () => {
  return (
    <div className="bg-secondary py-3">
      <div className="bg-accent relative h-[800px] w-screen max-w-[4000px]">
        <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 gap-[5px] overflow-x-hidden">
          {Array.from({ length: 400 }).map((_, index) => (
            <CircleIcon
              key={index}
              className="fill-secondary text-secondary size-[28px]"
            />
          ))}
        </div>
        <div className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-[5px] overflow-x-hidden">
          {Array.from({ length: 400 }).map((_, index) => (
            <CircleIcon
              key={index}
              className="fill-secondary text-secondary size-[28px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPrivateDining;
