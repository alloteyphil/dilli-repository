import Button from "../shared/button";
import Image from "next/image";
import event1 from "@/public/images/event1.png";
import event2 from "@/public/images/event2.png";
import event3 from "@/public/images/event3.png";

const EventDining = () => {
  return (
    <div id="event-dining" className="bg-secondary-dark py-[300px]">
      <div className="boxed relative flex flex-col items-center justify-center gap-15">
        <div className="relative max-w-max">
          <h1 className="text-accent text-center text-[148px] leading-none">
            event to
            <br />
            cater?
          </h1>
          <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl leading-none">
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
          className="border-secondary-border absolute top-70 left-50 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 -rotate-[10.11deg] border-[14px] object-cover"
        />
        <Image
          src={event2}
          alt="event2"
          className="border-secondary-border absolute top-30 -right-40 h-[556.87px] w-[374.77px] -translate-x-1/2 -translate-y-1/2 rotate-[13.31deg] border-[14px] object-cover"
        />
        <Image
          src={event3}
          alt="event3"
          className="border-secondary-border absolute top-[550px] right-15 h-[350px] w-[341px] -translate-x-1/2 -translate-y-1/2 -rotate-[10.11deg] border-[14px] object-cover"
        />
      </div>
    </div>
  );
};

export default EventDining;
