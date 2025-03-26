import MenuCarousel from "../components/menu-page/menu-carousel";
import MenuLinks from "../components/menu-page/menu-links";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary-dark py-[72px]">
      <div className="boxed flex flex-col gap-4">
        <div className="relative flex max-w-max flex-col gap-10">
          <h1 className="text-primary text-[148px] leading-none">OUR MENU</h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
            WHAT WE SERVE
          </p>
        </div>
        <MenuLinks />
      </div>
      <MenuCarousel />
      {children}
    </div>
  );
};

export default layout;
