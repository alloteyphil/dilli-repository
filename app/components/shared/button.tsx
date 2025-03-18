"use client";

import { cn } from "@/lib/cn";
import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant = "default", href, onClick, ...props },
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
          `min-w-max cursor-pointer rounded-full px-5 py-2 ${variant === "default" ? "bg-accent text-secondary" : "border-accent text-accent bg-secondary hover:bg-accent hover:text-secondary border transition-all duration-100"}`,
          className,
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <p className="cursor-pointer">{children}</p>
      </button>
    );
  },
);

export default Button;
