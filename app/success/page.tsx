"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const { clearCart } = useCart();

  const searchParams = useSearchParams();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-secondary">
      <div className="boxed flex min-h-screen flex-col items-center justify-center gap-10">
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
