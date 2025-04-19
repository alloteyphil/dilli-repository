import type React from "react";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export function PhoneFrame({
  children,
  className = "",
  width = 375,
  height = 812,
}: IPhoneFrameProps) {
  // Calculate dimensions based on the provided width
  const scale = width / 375;
  const scaledHeight = 812 * scale; // Calculate screen dimensions (approximately 90% of the phone width and appropriate height)

  const screenWidth = width * 0.9;
  const screenHeight = screenWidth * (16 / 9); // Assuming 16:9 aspect ratio for the screen
  // Calculate positions for centering the screen

  const screenX = (width - screenWidth) / 2;
  const screenY = (scaledHeight - screenHeight) / 2 - 10 * scale; // Slight adjustment to account for notch

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height: scaledHeight }}
    >
      {/* Content Container - this is where the video will be placed */}
      <div
        className="absolute overflow-hidden rounded-2xl bg-black"
        style={{
          left: screenX,
          top: screenY,
          width: screenWidth,
          height: screenHeight,
          zIndex: 1,
        }}
      >
        {children}
      </div>

      {/* iPhone SVG Frame */}
      <svg
        width={width}
        height={scaledHeight}
        viewBox={`0 0 ${width} ${scaledHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute top-0 left-0 z-10"
      >
        {/* Phone Outer Frame */}
        <rect
          x={scale * 10}
          y={scale * 10}
          width={width - scale * 20}
          height={scaledHeight - scale * 20}
          rx={scale * 40}
          fill="#111111"
          stroke="#333333"
          strokeWidth={scale}
        />

        {/* Screen Cutout - this creates a "hole" where the video will show through */}
        <rect
          x={screenX}
          y={screenY}
          width={screenWidth}
          height={screenHeight}
          rx={scale * 15}
          fill="transparent"
          stroke="#222222"
          strokeWidth={scale}
        />

        {/* Notch */}
        <rect
          x={width / 2 - scale * 70}
          y={scale * 10}
          width={scale * 140}
          height={scale * 25}
          rx={scale * 12}
          fill="#111111"
        />

        {/* Home Indicator */}
        <rect
          x={width / 2 - scale * 60}
          y={scaledHeight - scale * 30}
          width={scale * 120}
          height={scale * 5}
          rx={scale * 2.5}
          fill="#333333"
        />

        {/* Side Button */}
        <rect
          x={width - scale * 3}
          y={scaledHeight / 4}
          width={scale * 3}
          height={scale * 60}
          rx={scale}
          fill="#222222"
        />

        {/* Volume Buttons */}
        <rect
          x={0}
          y={scaledHeight / 4}
          width={scale * 3}
          height={scale * 40}
          rx={scale}
          fill="#222222"
        />

        <rect
          x={0}
          y={scaledHeight / 4 + scale * 60}
          width={scale * 3}
          height={scale * 40}
          rx={scale}
          fill="#222222"
        />
      </svg>
    </div>
  );
}
