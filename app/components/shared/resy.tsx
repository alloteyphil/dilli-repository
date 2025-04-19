import { cn } from "@/lib/cn";
import Link from "next/link";

const ResyButton = ({ className }: { className?: string }) => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  return (
    <Link
      href={`https://resy.com/cities/new-york-ny/venues/dilli-dilli?date=${formattedDate}&seats=2`}
      target="_blank"
      className={cn("focus:ring-0 focus:outline-none", className)}
    >
      <button className="text-primary-light cursor-pointer rounded-none bg-[#FF462D] px-8 py-4 focus:ring-0 focus:outline-none">
        <p className="">Book Now</p>
      </button>
    </Link>
  );
};

export default ResyButton;
