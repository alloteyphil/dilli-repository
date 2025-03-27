"use client";

import Script from "next/script";

const ResyButton = () => {
  return (
    <>
      <div className="text-center">
        <a
          href="https://resy.com/cities/new-york-ny/venues/dilli-dilli"
          id="resyButton-Gf6WZMQ0m66MPbLUz84dG"
        >
          Book your DILLI DILLI reservation on Resy
        </a>
      </div>
      <Script
        src="https://widgets.resy.com/embed.js"
        onLoad={() => {
          window.resyWidget.addButton(
            document.getElementById("resyButton-Gf6WZMQ0m66MPbLUz84dG"),
            {
              venueId: 85502,
              apiKey: "HWQnCztcSSaRCbenSbVu947DGQ1WhEjX",
              replace: true,
            },
          );
        }}
      />
    </>
  );
};

// TypeScript declaration
declare global {
  interface Window {
    resyWidget: {
      addButton: (
        element: HTMLElement | null,
        config: {
          venueId: number;
          apiKey: string;
          replace: boolean;
        },
      ) => void;
    };
  }
}

export default ResyButton;
