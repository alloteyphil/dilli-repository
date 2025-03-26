"use client";

import { menuLinks } from "@/data/menu-links";
import Button from "../shared/button";
import { usePathname } from "next/navigation";

const MenuLinks = () => {
  const pathname = usePathname();

  const slug = pathname.split("/")[2];

  return (
    <div className="flex gap-4">
      {menuLinks.map((link) => (
        <Button
          key={link.name}
          href={`/menu${link.href}`}
          variant={
            !slug && link.href === "/small-plates"
              ? "default"
              : slug === link.href.split("/")[1]
                ? "default"
                : "outline"
          }
        >
          {link.name}
        </Button>
      ))}
    </div>
  );
};

export default MenuLinks;
