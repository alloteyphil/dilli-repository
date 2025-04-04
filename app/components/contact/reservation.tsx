import Button from "../shared/button";
import Link from "next/link";
import Image from "next/image";
import or from "@/public/images/or.svg";
import phone from "@/public/images/PhoneCall.svg";
import Map from "./map";

const Reservation = () => {
  return (
    <section
      id="reservation"
      className="bg-secondary overflow-x-hidden py-[72px]"
    >
      <div className="boxed relative flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-primary text-center text-7xl leading-none md:text-8xl xl:text-[148px]">
            make a reservation
          </h1>
          <p className="text-accent font-script xl:ext-8xl absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl md:text-6xl">
            reservations & bookings
          </p>
          <Map />
        </div>
        <div className="flex w-full max-w-[738px] flex-col gap-8">
          <Link
            target="_blank"
            href="https://www.opentable.com/r/dilli-dilli-reservations-new-york?restref=1395760&lang=en-US&ot_source=Restaurant%20website"
          >
            <Button variant="default" className="w-full max-w-full">
              Find a table
            </Button>
          </Link>
          <Image src={or} alt="or" />
          <Button
            icon={<Image src={phone} alt="phone" />}
            variant="default"
            href="tel:+16466698261"
            className="flex w-full max-w-full items-center justify-center gap-2"
          >
            call us on +1 (646) 669-8261
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
