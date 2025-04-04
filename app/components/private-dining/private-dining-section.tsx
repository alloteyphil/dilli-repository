import Link from "next/link";
import Button from "../shared/button";
import PrivateDiningCard from "./private-dining-card";
import { privateDiningCardContent } from "@/data/dining";
const PrivateDiningSection = () => {
  return (
    <div className="bg-primary py-[72px]">
      <div className="boxed flex flex-col items-center gap-15 max-md:min-w-full">
        <div className="relative max-w-max">
          <h1 className="text-primary-light text-center text-7xl leading-none md:text-8xl xl:text-[148px]">
            private dining
          </h1>
          <p className="text-secondary font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl md:text-6xl xl:text-8xl">
            make memories
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {privateDiningCardContent.map((item, index) => (
            <PrivateDiningCard key={index} text={item.text} />
          ))}
        </div>
        <Link
          href="https://www.opentable.com/r/dilli-dilli-reservations-new-york?restref=1395760&lang=en-US&ot_source=Restaurant%20website"
          target="_blank"
          className="min-w-screen px-4 md:px-8 xl:min-w-[700px] xl:px-0"
        >
          <Button variant="default" className="w-full">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PrivateDiningSection;
