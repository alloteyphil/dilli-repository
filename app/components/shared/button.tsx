"use client";

import { cn } from "@/lib/cn";
import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "outline" | "outline-dark";
  href?: string;
  innerTextStyle?: string;
  icon?: React.ReactNode;
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
      icon,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      href && e.preventDefault();
      onClick?.(e);
      if (href) {
        router.push(href);
      }
    };

    return (
      <button
        className={cn(
          `max-h-max max-w-max min-w-max cursor-pointer rounded-full px-5 py-3 transition-all duration-300 ${variant === "default" ? "bg-accent border-accent text-secondary hover:bg-accent-dark border" : variant === "outline" ? "border-accent text-accent bg-secondary hover:bg-accent hover:text-secondary border" : "border-accent text-accent bg-primary-light hover:bg-accent hover:text-primary-light cursor-default border"}`,
          className,
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {icon && icon}
        <p className={cn("max-h-max cursor-pointer", innerTextStyle)}>
          {children}
        </p>
      </button>
    );
  },
);

export default Button;
