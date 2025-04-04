import React from "react";
import AboutImages from "./about-images";

const About = () => {
  return (
    <section className="bg-accent py-[72px]">
      <div className="flex flex-col gap-10">
        <div className="boxed flex w-full flex-col gap-2 xl:flex-row xl:justify-between xl:gap-0">
          <div className="relative max-w-max">
            <h1 className="text-secondary text-7xl leading-none md:text-8xl xl:text-[148px]">
              About
              <br />
              Dilli Dilli
            </h1>
            <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] text-5xl md:text-6xl xl:text-8xl">
              India’s food capital
            </p>
          </div>
          <div className="pt-6">
            <p className="text-secondary max-w-[500px]">
              <span className="italic">It all began with a vision</span> — a
              desire to share the forgotten flavors of Delhi's rich culinary
              heritage with the world. The founders, a group of passionate food
              lovers and designers, knew that they wanted to create something
              exceptional.
            </p>
          </div>
        </div>
        <AboutImages />
      </div>
    </section>
  );
};

export default About;
