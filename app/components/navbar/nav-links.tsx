"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "motion/react";

const NavLinks = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });

  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Menu",
      path: "/menu",
    },

    {
      name: "Private Dining",
      path: "/private-dining",
    },
  ];

  return (
    <div
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          width: 0,
        }));
      }}
      className="relative flex items-center gap-10"
    >
      {links.map((link, index) => (
        <Link
          key={link.path}
          href={link.path}
          ref={(el) => {
            linksRef.current[index] = el;
          }}
          onMouseEnter={() => {
            if (!linksRef.current[index]) return;

            const { width } = linksRef.current[index].getBoundingClientRect();

            setPosition({
              left: linksRef.current[index].offsetLeft,
              width: width,
            });
          }}
        >
          <p>{link.name}</p>
        </Link>
      ))}
      <motion.div
        animate={position}
        className="bg-accent absolute bottom-[2px] h-0.5"
      ></motion.div>
    </div>
  );
};

export default NavLinks;
