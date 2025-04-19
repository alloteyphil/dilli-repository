"use client";

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

interface AnimateWrapperProps {
  children: React.ReactNode;
}

const AnimateWrapper = ({ children }: AnimateWrapperProps) => {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
};

export default AnimateWrapper;
