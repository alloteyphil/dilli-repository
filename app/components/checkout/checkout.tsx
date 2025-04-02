"use client";

import Image from "next/image";
import outerBorder from "@/public/images/checkout-border.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import Button from "../shared/button";
import { checkout } from "@/actions/checkout/checkout.actions";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  postCode: string;
}

const CheckoutForm = () => {
  const { items } = useCart();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const stripeSessionUrl = await checkout(items, data.email, {
        first_name: data.firstName,
        last_name: data.lastName,
        address: {
          city: data.city,
          address: data.address,
          post_code: data.postCode,
          address2: data.address2,
        },
      });
      if (stripeSessionUrl) {
        router.push(stripeSessionUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative z-10 h-[872px] w-[694px]">
      <div className="border-primary bg-secondary-dark absolute inset-[40px] z-10 rounded-sm border p-10">
        <form
          className="flex h-full flex-col justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h2 className="text-primary text-4xl">Contact</h2>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email*"
              className={cn("input", errors.email && "border-red-500")}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="border-primary" />
              <p className="text-primary">
                email me with new launches and offers
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex flex-col gap-6">
            <h2 className="text-primary text-4xl">Delivery</h2>

            {/* Name */}
            <div className="flex w-full gap-5">
              {/* First Name */}
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                  })}
                  placeholder="First Name*"
                  className={cn("input", errors.firstName && "border-red-500")}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                  })}
                  placeholder="Last Name*"
                  className={cn("input", errors.lastName && "border-red-500")}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="flex w-full gap-2">
              <input
                {...register("address", {
                  required: "Address is required",
                })}
                placeholder="Address*"
                className={cn("input", errors.address && "border-red-500")}
              />
              {errors.address && (
                <p className="text-xs text-red-500">{errors.address.message}</p>
              )}
            </div>

            {/* Address 2 */}
            <div className="flex w-full gap-5">
              <input
                {...register("address2", {
                  required: "Address is required",
                })}
                placeholder="APARTMENT, SUITE, ETC"
                className={cn("input", errors.address2 && "border-red-500")}
              />
              {errors.address2 && (
                <p className="text-xs text-red-500">
                  {errors.address2.message}
                </p>
              )}
            </div>

            {/* City and Post Code */}
            <div className="flex w-full gap-5">
              {/* City */}
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("city", {
                    required: "City is required",
                  })}
                  placeholder="City*"
                  className={cn("input", errors.city && "border-red-500")}
                />
                {errors.city && (
                  <p className="text-xs text-red-500">{errors.city.message}</p>
                )}
              </div>

              {/* Post Code */}
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("postCode", {
                    required: "Post code is required",
                  })}
                  placeholder="PostCode*"
                  className={cn("input", errors.postCode && "border-red-500")}
                />
                {errors.postCode && (
                  <p className="text-xs text-red-500">
                    {errors.postCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="flex flex-col gap-6">
            <h2 className="text-primary text-4xl">Payment</h2>
            <div className="w-full">
              <Button
                className="bg-primary text-secondary border-primary hover:bg-primary focus:bg-primary focus-visible:bg-primary w-full max-w-full border"
                variant="default"
              >
                continue to checkout
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Image src={outerBorder} alt="outer border" />
    </div>
  );
};

export default CheckoutForm;
