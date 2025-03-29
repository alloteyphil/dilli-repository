"use client";

import Image from "next/image";
import outerBorder from "@/public/images/checkout-border.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import Button from "../shared/button";

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  postCode: string;
}

const PersonalInfoCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      console.log(data);
      // Add your form submission logic here
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
          <div className="flex flex-col gap-3">
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
            <div className="flex items-center gap-2">
              <input type="checkbox" className="border-primary" />
              <p className="text-primary">
                email me with new launches and offers
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-primary text-4xl">Delivery</h2>
            <div className="flex w-full gap-5">
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
            </div>
            <input
              {...register("address", {
                required: "Address is required",
              })}
              placeholder="Address*"
              className={cn("input", errors.address && "border-red-500")}
            />
            <input
              {...register("address2", {
                required: "Address is required",
              })}
              placeholder="APPARTMENT, SUIT, ETC"
              className={cn("input", errors.address2 && "border-red-500")}
            />
            <div className="flex w-full gap-5">
              <input
                {...register("city", {
                  required: "City is required",
                })}
                placeholder="City*"
                className={cn("input", errors.city && "border-red-500")}
              />
              <input
                {...register("postCode", {
                  required: "Post code is required",
                })}
                placeholder="PostCode*"
                className={cn("input", errors.postCode && "border-red-500")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-primary text-4xl">Payment</h2>
            <div className="flex w-full gap-3">
              <Button
                className="bg-primary text-secondary border-primary hover:bg-primary focus:bg-primary focus-visible:bg-primary w-full max-w-full border"
                variant="default"
              >
                PayPal
              </Button>
              <Button
                className="bg-primary text-secondary border-primary hover:bg-primary focus:bg-primary focus-visible:bg-primary w-full max-w-full border"
                variant="default"
              >
                shop pay
              </Button>
              <Button
                className="bg-primary text-secondary border-primary hover:bg-primary focus:bg-primary focus-visible:bg-primary w-full max-w-full border"
                variant="default"
              >
                apple pay
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Image src={outerBorder} alt="outer border" className="" />
    </div>
  );
};

export default PersonalInfoCard;
