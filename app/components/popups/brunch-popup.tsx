"use client";

import { SimplePhoneFrame } from "./simple-phone-frame";
import { useEffect, useRef } from "react";
import Image from "next/image";
import icon from "@/public/images/popup-icon.png";
import ResyButton from "../shared/resy";
import { StarFour } from "@phosphor-icons/react";

const BrunchPopup = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Add event listeners for debugging
      video.addEventListener("error", (e) => {
        console.error("Video error:", e);
      });

      video.addEventListener("loadeddata", () => {
        console.log("Video loaded successfully");
      });

      // Force play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    }
  }, []);

  // Default dimensions for calculations
  const width = 300;
  const scale = width / 375;
  const frameCornerRadius = 40 * scale;
  const scaledHeight = 812 * scale;

  return (
    <div className="bg-primary-light relative flex h-full flex-col items-center justify-center gap-4 p-6 max-lg:h-[80v] max-lg:w-[90vw]">
      <Image
        src={icon}
        alt="Brunch Popup Icon"
        className="absolute -top-60 -left-60 z-10 scale-30 -rotate-[30deg]"
      />
      <div className="relative flex w-full justify-center">
        <h1 className="text-7xl text-[#111111]">Brunch</h1>
        <p className="absolute right-0 text-sm text-[#111111] max-lg:hidden">
          Times square
        </p>
      </div>

      <h2 className="text-3xl text-[#111111]">The Brunch Party Is Back</h2>
      <p className="text-accent max-w-[500px] text-center">
        Mark your calendars. April 20<sup>th</sup>, we are bringing back the
        fun, the beats, and a little surprise is waiting for you!{" "}
        <span className="mt-4 block">
          Party your heart out from 12pm to 3:30pm
        </span>
      </p>

      <div className="flex w-full items-center max-lg:flex-col max-lg:items-center xl:justify-between">
        <div className="flex flex-col gap-20">
          <ResyButton />
          <ResyButton className="max-lg:hidden" />
          <ResyButton className="max-lg:hidden" />
        </div>
        <div
          className="relative scale-60 max-lg:hidden xl:scale-90"
          style={{
            width: width,
            height: scaledHeight,
          }}
        >
          <div
            className="absolute inset-4 overflow-hidden"
            style={{
              borderRadius: frameCornerRadius,
              zIndex: 10,
            }}
          >
            <video
              ref={videoRef}
              src="/videos/brunch.mp4"
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              className="h-full w-full object-cover"
            >
              Could not load video
            </video>
            {/* <div
              className="absolute bottom-0 z-50 h-16 w-full bg-[#111111]"
              style={{
                borderRadius: `0px 0px ${frameCornerRadius}px ${frameCornerRadius}px `,
              }}
            /> */}
          </div>
          <SimplePhoneFrame width={width} height={scaledHeight} />
        </div>
        <div className="flex flex-col gap-20">
          <ResyButton className="max-lg:hidden" />
          <ResyButton className="max-lg:hidden" />
          <ResyButton className="max-lg:hidden" />
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex">
          <StarFour size={12} weight="fill" color="#fff" />
          <StarFour size={12} weight="fill" color="#fff" />
          <StarFour size={12} weight="fill" color="#fff" />
        </div>
        <p className="text-[#111111]">www.dilli-dilli.com</p>
        <div className="flex">
          <StarFour size={12} weight="fill" color="#fff" />
          <StarFour size={12} weight="fill" color="#fff" />
          <StarFour size={12} weight="fill" color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default BrunchPopup;
