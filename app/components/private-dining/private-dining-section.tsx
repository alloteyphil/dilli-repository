import Link from "next/link";
import Button from "../shared/button";
import PrivateDiningCard from "./private-dining-card";
import { privateDiningCardContent } from "@/data/dining";
const PrivateDiningSection = () => {
  return (
    <div className="bg-primary py-[72px]">
      <div className="boxed flex flex-col items-center gap-15">
        <div className="relative max-w-max">
          <h1 className="text-primary-light text-[148px] leading-none">
            private dining
          </h1>
          <p className="text-secondary font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
            make memories
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {privateDiningCardContent.map((item, index) => (
            <PrivateDiningCard key={index} text={item.text} />
          ))}
        </div>
        <Link
          href="https://www.opentable.com/r/dilli-dilli-reservations-new-york?restref=1395760&lang=en-US&ot_source=Restaurant%20website"
          target="_blank"
        >
          <Button variant="default" className="min-w-[700px]">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PrivateDiningSection;
