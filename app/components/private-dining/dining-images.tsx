import Image from "next/image";
import { diningPhotos } from "@/data/dining";
import { cn } from "@/lib/utils";

const DiningImages = () => {
  return (
    <div className="mx-auto mt-4 grid max-w-[1300px] grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-10 xl:grid-cols-4">
      {diningPhotos.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative h-[300px] w-full md:h-[500px]",
            index % 2 !== 0 ? "mt-20 hidden md:block" : "",
            index === 3 ? "md:hidden xl:block" : "",
          )}
        >
          <div className="border-secondary absolute inset-1/2 z-[2] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-90 border opacity-0 transition-all duration-300 group-hover:opacity-100" />
          <Image
            src={item.image}
            className={`size-full object-cover object-center`}
            alt="dining-image"
          />
          <p className="font-script text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl opacity-0 transition-all duration-300 group-hover:opacity-100">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DiningImages;
