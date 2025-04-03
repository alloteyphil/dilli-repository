import Image from "next/image";
import menuBorder from "@/public/images/menu-border.svg";

const MenuCard = ({ photo }: { photo: any }) => {
  return (
    <div className="relative h-max w-max">
      <Image
        src={photo}
        alt="menu-card-photo"
        placeholder="blur"
        className="border-primary absolute inset-1/2 z-10 size-full -translate-x-1/2 -translate-y-1/2 scale-x-85 scale-y-80 rounded-sm border object-cover object-center max-md:h-[250px] max-md:w-[395px]"
      />
      <Image
        src={menuBorder}
        alt="menu-border"
        className="max-md:h-[268px] max-md:w-[424px]"
      />
    </div>
  );
};

export default MenuCard;
