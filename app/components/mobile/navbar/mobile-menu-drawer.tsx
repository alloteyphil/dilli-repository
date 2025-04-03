"use client";

import useMobileNavbarToggle from "@/store/mobile-navbar-toggle.store";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import instagramIcon from "@/public/images/instagram-mobile-drawer.svg";
import tikTokIcon from "@/public/images/ticktok-mobile-drawer.svg";

const MobileMenuDrawer = () => {
  const { isOpen, setIsOpen } = useMobileNavbarToggle();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);
  return (
    <div
      className={`bg-secondary fixed inset-0 z-[100] h-screen w-[90vw] px-10 py-24 transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] md:w-[60vw] md:px-32 md:py-48 xl:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      ref={menuRef}
    >
      <XIcon
        className="text-accent absolute top-4 left-4 size-10 md:top-8 md:left-8"
        onClick={() => setIsOpen(false)}
      />
      <div className="text-accent flex h-full w-full flex-col items-center justify-between md:items-start">
        <div className="flex flex-col items-center justify-center gap-10 md:items-start">
          <Link
            prefetch={true}
            href="/"
            className="text-accent"
            onClick={() => setIsOpen(false)}
          >
            <p className="md:text-2xl">Home</p>
          </Link>
          <Link
            prefetch={true}
            href="/menu"
            className="text-accent"
            onClick={() => setIsOpen(false)}
          >
            <p className="md:text-2xl">Menu</p>
          </Link>
          <Link
            prefetch={true}
            href="/private-dining"
            className="text-accent"
            onClick={() => setIsOpen(false)}
          >
            <p className="md:text-2xl">private dining</p>
          </Link>
          <Link
            prefetch={true}
            href="/private-dining#event-dining"
            onClick={() => setIsOpen(false)}
          >
            <p className="md:text-2xl">event catering</p>
          </Link>
          <Link
            prefetch={true}
            href="/contact"
            className="text-accent"
            onClick={() => setIsOpen(false)}
          >
            <p className="md:text-2xl">contact</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:items-start">
          <div className="flex gap-2">
            <Image src={instagramIcon} alt="Instagram" />
            <Image src={tikTokIcon} alt="TikTok" />
          </div>
          <p className="text-center md:text-2xl">Follow us</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
