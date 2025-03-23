"use client";

import { cn } from "@/lib/cn";
import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "outline" | "outline-dark";
  href?: string;
  innerTextStyle?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "default",
      href,
      onClick,
      innerTextStyle,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick?.(e);
      if (href) {
        router.push(href);
      }
    };

    return (
      <button
        className={cn(
          `max-w-max min-w-max cursor-pointer rounded-full px-5 py-2 transition-all duration-300 ${variant === "default" ? "bg-accent text-secondary hover:bg-accent-dark" : variant === "outline" ? "border-accent text-accent bg-secondary hover:bg-accent hover:text-secondary border" : "border-accent text-accent bg-primary-light hover:bg-accent hover:text-primary-light cursor-default border"}`,
          className,
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <p className={cn("cursor-pointer", innerTextStyle)}>{children}</p>
      </button>
    );
  },
);

export default Button;
