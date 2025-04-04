"use client";

import contactBorder from "@/public/images/contact-border.svg";
import Image from "next/image";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { cn } from "@/lib/utils";
import mobileContactBorder from "@/public/images/mobile-contact-form.svg";
import { toast } from "sonner";

interface FormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  subject: string;
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
      console.log("Form submitted with data:", data);
      toast.success("Success", {
        description: "Your message has been sent successfully!",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
        className: "bg-red-500 text-secondary",
      });
    }
  };

  const onError = (errors: FieldErrors<FormInput>) => {
    const firstError = Object.values(errors)[0]?.message;
    toast.error("Validation Error", {
      description: firstError || "Please check the form for errors.",
      classNames: {
        toast: "!bg-red-400 !text-secondary",
        description: "!text-secondary",
      },
    });
  };

  return (
    <div className="bg-secondary overflow-x-hidden py-[72px]">
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
        <div className="relative z-10 h-auto w-max md:w-[700px] xl:h-[700px] xl:w-[900px]">
          <div className="border-primary bg-secondary-dark absolute inset-[30px] z-10 rounded-sm border p-10 lg:inset-[40px]">
            <form
              className="flex h-full flex-col justify-between gap-4"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              {/*Name*/}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/*First Name*/}
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

                {/*Last Name*/}
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

              {/*Phone Number & Email*/}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/*Phone Number*/}
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
                    "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                    errors.phoneNumber &&
                      "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                  )}
                />

                {/*Email*/}
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
              </div>

              {/*Subject*/}
              <input
                {...register("subject")}
                placeholder="Subject"
                className={cn(
                  "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent w-full rounded-full border px-5 py-3 text-xl font-semibold uppercase",
                  errors.subject &&
                    "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                )}
              />

              {/*Message*/}
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
                  "bg-secondary font-primary text-primary placeholder:text-primary border-primary focus:outline-accent focus-visible:outline-accent h-[200px] w-full resize-none rounded-2xl border px-5 py-3 text-xl font-semibold uppercase",
                  errors.message &&
                    "border-red-400 focus:outline-red-400 focus-visible:outline-red-400",
                )}
              />

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
            className="hidden h-full w-full md:block"
            priority
          />
          <Image
            src={mobileContactBorder}
            alt="menu-border"
            className="block h-auto w-[90vw] md:hidden"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
