"use client";

import Image from "next/image";
import NavLinks from "./nav-links";
import Button from "../shared/button";
import Link from "next/link";
import logo from "@/public/images/logos.svg";
import { usePathname } from "next/navigation";
import CartIcon from "./cart-icon";
import homeLogo from "@/public/images/home-logo.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={` ${pathname.includes("/menu") ? "bg-secondary-dark" : pathname === "/" ? "absolute top-0 left-0 z-50 w-full bg-transparent" : "bg-secondary"}`}
    >
      <div className="boxed text-accent flex items-center justify-between py-8">
        <div className="min-w-max">
          <NavLinks isHome={pathname === "/"} />
        </div>
        <Link href="/" prefetch={true}>
          <Image
            src={pathname === "/" ? homeLogo : logo}
            alt="logo"
            className={"scale-90"}
          />
        </Link>
        <div className="flex items-center gap-10">
          {process.env.NODE_ENV !== "production" && (
            <CartIcon isHome={pathname === "/"} />
          )}
          <Link
            prefetch={true}
            href="/private-dining#event-dining"
            className="group relative"
          >
            <p
              className={`${pathname === "/" ? "text-secondary" : "text-accent"} min-w-max`}
            >
              Event Catering
            </p>
            <span
              className={`link-underline ${
                pathname === "/" ? "bg-secondary" : "bg-accent"
              } `}
            />
          </Link>
          <Link prefetch={true} href="/contact" className="group relative">
            <Button variant="default">Get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
