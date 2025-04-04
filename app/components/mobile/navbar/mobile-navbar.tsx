"use client";

import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import phone from "@/public/images/phone-button.svg";
import darkLogo from "@/public/images/logos.svg";
import lightLogo from "@/public/images/home-logo.svg";
import Image from "next/image";
import Link from "next/link";
import useMobileNavbarToggle from "@/store/mobile-navbar-toggle.store";

const MobileNavbar = () => {
  const pathname = usePathname();

  const { isOpen, setIsOpen } = useMobileNavbarToggle();

  return (
    <div
      className={`flex w-full items-center justify-between p-4 md:p-8 xl:hidden ${pathname.includes("/menu") ? "bg-secondary-dark" : pathname === "/" ? "absolute top-0 left-0 z-50 w-full bg-transparent" : "bg-secondary"}`}
    >
      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 size-10 ${pathname === "/" ? "text-secondary" : "text-accent"}`}
      />
      <Link href="/" className="relative z-50">
        <Image
          src={pathname === "/" ? lightLogo : darkLogo}
          alt="logo"
          className="w-40"
        />
      </Link>
      <Link href="tel:+1234567890">
        <Image src={phone} alt="phone" className="relative z-50 size-10" />
      </Link>
    </div>
  );
};

export default MobileNavbar;
