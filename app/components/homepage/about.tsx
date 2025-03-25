import React from "react";
import Button from "../shared/button";
import AboutImages from "./about-images";
const About = () => {
  return (
    <div className="bg-accent py-[72px]">
      <div className="flex flex-col gap-10">
        <div className="boxed grid w-full grid-cols-2">
          <div className="relative max-w-max">
            <h1 className="text-secondary text-[148px] leading-none">
              About
              <br />
              Dilli Dilli
            </h1>
            <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] text-8xl">
              India’s food capital
            </p>
          </div>
          <div className="flex items-start justify-between">
            <p className="text-secondary max-w-[500px]">
              <span className="italic">It all began with a vision</span> — a
              desire to share the forgotten flavors of Delhi's rich culinary
              heritage with the world. The founders, a group of passionate food
              lovers and designers, knew that they wanted to create something
              exceptional.
            </p>
            <Button variant="outline" href="#our-story">
              View our story
            </Button>
          </div>
        </div>
        <div>
          <AboutImages />
        </div>
      </div>
    </div>
  );
};

export default About;
