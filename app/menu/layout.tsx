import type { Metadata } from "next";
import MenuCarousel from "../components/menu/menu-carousel";
import MenuLinks from "../components/menu/menu-links";

export const metadata: Metadata = {
  title: "Menu | Dilli Dilli",
  description:
    "Experience the authentic flavors of Indian food at Dilli Dilli. Our carefully curated menu features traditional Delhi-inspired dishes, crafted with fresh ingredients and aromatic spices.",
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-secondary-dark py-[72px]">
      <div className="boxed flex flex-col gap-4">
        <div className="relative flex max-w-max flex-col gap-10">
          <h1 className="text-primary text-7xl leading-none md:text-8xl xl:text-[148px]">
            OUR MENU
          </h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl md:text-6xl xl:text-8xl">
            WHAT WE SERVE
          </p>
        </div>
        <MenuLinks />
      </div>
      <MenuCarousel />
      {children}
    </main>
  );
};

export default layout;
