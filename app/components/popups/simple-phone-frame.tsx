import type React from "react";

interface ISimplePhoneFrameProps {
  // No children needed for this overlay approach
  className?: string;
  width?: number;
  height?: number;
}

export function SimplePhoneFrame({
  className = "",
  width = 375,
  height = 812,
}: ISimplePhoneFrameProps) {
  // Calculate dimensions based on the provided width
  const scale = width / 375;
  const scaledHeight = 812 * scale;

  // Define dimensions for frame elements
  const framePadding = 10 * scale;
  const frameWidth = width - 2 * framePadding;
  const frameHeight = scaledHeight - 2 * framePadding;
  const frameCornerRadius = 40 * scale;

  return (
    // Renders only the SVG overlay
    <svg
      width={width}
      height={scaledHeight}
      viewBox={`0 0 ${width} ${scaledHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Apply className to the SVG itself, ensuring absolute positioning and lower z-index
      className={`pointer-events-none absolute top-0 left-0 ${className}`}
      style={{ width, height: scaledHeight, zIndex: 1 }}
    >
      {/* Phone Outer Frame */}
      <rect
        x={framePadding}
        y={framePadding}
        width={frameWidth}
        height={frameHeight}
        rx={frameCornerRadius}
        fill="#111111" // Solid fill for the phone body
        stroke="#333333"
        strokeWidth={scale}
      />
    </svg>
  );
}
