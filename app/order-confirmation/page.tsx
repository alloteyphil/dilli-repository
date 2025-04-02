"use client";

import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

const SuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Add a small delay to ensure proper state updates
    const timer = setTimeout(() => {
      clearCart();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-secondary">
      <div className="boxed flex min-h-screen flex-col items-center gap-10 pt-60">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-primary text-[148px] leading-none">Thank You</h1>
          <p className="text-accent font-script text-8xl">
            Your order is confirmed!
          </p>
          <p className="text-accent mt-5 text-xl">
            We'll send you an email with your order details shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
