import ResyButton from "@/components/reservation/resy-button";
import { ReservationForm } from "./reservation-form";

const Reservation = () => {
  return (
    <div className="bg-secondary py-[72px]">
      <div className="boxed flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-primary text-[148px] leading-none">
            make a reservation
          </h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
            reservations & bookings
          </p>
        </div>
        <ResyButton />
      </div>
    </div>
  );
};

export default Reservation;
