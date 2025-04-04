const MenuCard = ({ photo }: { photo: string }) => {
  return (
    <div className="relative h-max w-max">
      <img
        src={photo}
        width={427.55}
        height={268}
        alt="menu-card-photo"
        className="border-primary absolute inset-1/2 z-10 size-full -translate-x-1/2 -translate-y-1/2 scale-x-85 scale-y-80 rounded-sm border object-cover object-center max-md:h-[250px] max-md:w-[395px]"
      />
      <img
        src="/images/menu-border.svg"
        width={503}
        height={335}
        alt="menu-border"
        className="max-md:h-[268px] max-md:w-[424px]"
      />
    </div>
  );
};

export default MenuCard;
