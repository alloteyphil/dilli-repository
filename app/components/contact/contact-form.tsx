"use client";

import contactBorder from "@/public/images/contact-border.svg";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const ContactForm = () => {
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
    <div className="bg-secondary py-[72px]">
      <div className="relative mx-auto grid h-max place-items-center">
        <div className="absolute top-1/2 left-1/2 flex min-w-[2000px] -translate-x-1/2 -translate-y-1/2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative">
              <h1 className="text-accent min-w-max text-[148px] leading-none">
                get in touch
              </h1>
              <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
                contact us
              </p>
            </div>
          ))}
        </div>
        <div className="relative z-10 h-[700px] w-[900px]">
          <div className="border-primary bg-secondary-dark absolute inset-[40px] z-10 rounded-sm border p-10">
            <form
              className="flex h-full flex-col justify-between"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
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
                      "input",
                      errors.firstName && "border-red-500",
                    )}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    {...register("lastName")}
                    placeholder="Last Name"
                    className={cn("input", errors.lastName && "border-red-500")}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^(\+?1-?)?\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{4}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    placeholder="Phone Number*"
                    className={cn(
                      "input",
                      errors.phoneNumber && "border-red-500",
                    )}
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="Email*"
                    className={cn("input", errors.email && "border-red-500")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <input
                {...register("message")}
                placeholder="Subject"
                className="input"
              />
              <div className="flex flex-col gap-1">
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 5,
                      message: "Message must be at least 5 characters",
                    },
                  })}
                  placeholder="Message*"
                  className={cn(
                    "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full border px-5 py-3 text-xl font-semibold uppercase",
                    "h-[200px] resize-none rounded-2xl",
                    errors.message && "border-red-500",
                  )}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <input
                type="submit"
                value={isSubmitting ? "Sending..." : "Submit"}
                disabled={isSubmitting}
                className={cn(
                  "bg-accent font-primary border-accent text-secondary hover:bg-accent-dark max-h-max w-full cursor-pointer rounded-full border px-5 py-3 text-xl font-semibold uppercase transition-all duration-300",
                  isSubmitting && "cursor-not-allowed opacity-50",
                )}
              />
            </form>
          </div>
          <Image
            src={contactBorder}
            alt="menu-border"
            className="h-full w-full"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactForm;
