"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import Button from "../shared/button";
import CartItems from "../cart/cart-items";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

interface FormInput {
  discountCode: string;
}

const OrderSummary = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
  };

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <h1 className="text-accent text-6xl">Order Summary</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-accent text-3xl">apply discount code</h2>
          <div className="flex w-full gap-5">
            <input
              {...register("discountCode")}
              placeholder="Your code"
              className={cn(
                "input w-full",
                errors.discountCode && "border-red-500",
              )}
            />
            <Button className="w-full max-w-[200px]" variant="default">
              apply
            </Button>
          </div>
        </div>
        <div className="bg-primary h-[1px] w-full" />
        <CartItems />
        <div className="bg-primary h-[1px] w-full" />
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <div>loading</div>
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="text-accent text-3xl">Subtotal</p>
              <p className="text-accent text-3xl">
                ${totalPrice && totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="bg-primary h-[1px] w-full" />
            <div className="flex justify-between">
              <p className="text-accent text-5xl">Total</p>
              <p className="text-accent text-5xl">
                ${totalPrice && totalPrice.toFixed(2)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
