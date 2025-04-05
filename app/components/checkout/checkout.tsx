"use client";

import Image from "next/image";
import outerBorder from "@/public/images/checkout-border.svg";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { cn } from "@/lib/utils";
import Button from "../shared/button";
import { checkout } from "@/actions/checkout/checkout.actions";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import mobileOuterBorder from "@/public/images/mobile-checkout-border.svg";
import { toast } from "sonner";

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
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
        classNames: {
          toast: "!bg-red-400 !border-red-400 !text-secondary",
          description: "!text-secondary",
        },
      });
    }
  };

  const onError = (errors: FieldErrors<FormInput>) => {
    const firstError = Object.values(errors)[0]?.message;
    toast.error("Validation Error", {
      description: firstError || "Please check the form for errors.",
      classNames: {
        toast: "!bg-red-400 !border-red-400 !text-secondary",
        description: "!text-secondary",
      },
    });
  };

  return (
    <section className="relative z-10 h-auto w-full md:h-[872px] md:w-[694px]">
      <div className="border-primary bg-secondary-dark absolute inset-[30px] z-10 rounded-sm border p-6 py-8 md:inset-[40px] md:p-10 md:py-10">
        <form
          className="flex h-full flex-col justify-between"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* Contact */}
          <div className="flex flex-col gap-2 md:gap-6">
            <h2 className="text-primary text-4xl">Contact</h2>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="Email*"
              className={cn(
                "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                errors.email &&
                  "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
              )}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checked:bg-accent checked:text-secondary border-primary checked:border-accent size-3 appearance-none rounded border bg-white"
              />
              <p className="text-primary">
                email me with new launches and offers
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex flex-col gap-2 md:gap-6">
            <h2 className="text-primary text-4xl">Delivery</h2>

            {/* Name */}
            <div className="flex w-full gap-5 max-md:flex-col max-md:gap-2">
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
                  className={cn(
                    "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                    errors.firstName &&
                      "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                  )}
                />
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
                  placeholder="Last Name"
                  className={cn(
                    "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                    errors.lastName &&
                      "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                  )}
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex w-full gap-2">
              <input
                {...register("address", {
                  required: "Address is required",
                })}
                placeholder="Address*"
                className={cn(
                  "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                  errors.address &&
                    "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                )}
              />
            </div>

            {/* Address 2 */}
            <div className="flex w-full gap-5">
              <input
                {...register("address2", {
                  required: "Address is required",
                })}
                placeholder="APARTMENT, SUITE, ETC"
                className={cn(
                  "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                  errors.address2 &&
                    "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                )}
              />
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
                  className={cn(
                    "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                    errors.city &&
                      "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                  )}
                />
              </div>

              {/* Post Code */}
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("postCode", {
                    required: "Post code is required",
                  })}
                  placeholder="PostCode*"
                  className={cn(
                    "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                    errors.postCode &&
                      "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                  )}
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="flex flex-col gap-2 md:gap-6">
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
      <Image src={outerBorder} alt="outer border" className="hidden md:block" />
      <Image
        src={mobileOuterBorder}
        alt="outer border"
        className="block h-full w-[100vw] md:hidden"
      />
    </section>
  );
};

export default CheckoutForm;
