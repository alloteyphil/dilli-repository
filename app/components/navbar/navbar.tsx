"use client";

import Image from "next/image";
import NavLinks from "./nav-links";
import Button from "../shared/button";
import Link from "next/link";
import logo from "@/public/images/logos.svg";
import { usePathname } from "next/navigation";
import CartIcon from "./cart-icon";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={` ${pathname.includes("/menu") ? "bg-secondary-dark" : "bg-secondary"}`}
    >
      <div className="boxed text-accent flex items-center justify-between py-8">
        <div className="min-w-max">
          <NavLinks />
        </div>
        <Image src={logo} alt="logo" className="scale-90" />
        <div className="flex items-center gap-10">
          {process.env.NODE_ENV !== "production" && <CartIcon />}
          <Link
            prefetch={true}
            href="/private-dining#event-dining"
            className="group relative"
          >
            <p className="min-w-max">Event Catering</p>
            <span className="link-underline" />
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
