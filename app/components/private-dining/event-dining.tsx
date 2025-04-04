import Button from "../shared/button";
import Image from "next/image";
import event1 from "@/public/images/event1.png";
import event2 from "@/public/images/event2.png";
import event3 from "@/public/images/event3.png";

const EventDining = () => {
  return (
    <div
      id="event-dining"
      className="bg-secondary-dark py-[300px] max-md:overflow-x-hidden"
    >
      <div className="boxed relative flex flex-col items-center justify-center gap-15">
        <div className="relative max-w-max">
          <h1 className="text-accent text-center text-7xl leading-none md:text-8xl xl:text-[148px]">
            event to
            <br />
            cater?
          </h1>
          <p className="text-primary-light font-script md:text-6l absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl leading-none xl:text-8xl">
            connect to our
            <br />
            partner brand
          </p>
        </div>
        <Button variant="default" href="mailto:contact@dilli-dilli.com">
          get in touch
        </Button>
        <Image
          src={event1}
          alt="event1"
          className="border-secondary-border absolute top-60 left-10 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 scale-50 -rotate-[10.11deg] border-[14px] object-cover md:left-36 md:scale-75 lg:left-50 xl:top-70 xl:scale-100"
        />
        <Image
          src={event2}
          alt="event2"
          className="border-secondary-border absolute -top-30 -right-80 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 scale-50 rotate-[13.31deg] border-[14px] object-cover md:-top-10 md:-right-80 md:scale-75 lg:-right-40 xl:top-30 xl:scale-100"
        />
        <Image
          src={event3}
          alt="event3"
          className="border-secondary-border absolute top-30 h-[350px] w-[341px] -translate-x-1/2 -translate-y-1/2 scale-50 -rotate-[10.11deg] border-[14px] object-cover max-md:left-full md:top-50 md:left-full md:scale-75 lg:right-10 xl:top-[550px] xl:scale-100"
        />
      </div>
    </div>
  );
};

export default EventDining;
