"use client";

import { menuLinks } from "@/data/menu-links";
import Button from "../shared/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuLinks = () => {
  const pathname = usePathname();

  const slug = pathname.split("/")[2];

  return (
    <div className="flex gap-4">
      {menuLinks.map((link) => (
        <Link
          prefetch={true}
          key={link.name}
          href={`/menu${link.href}`}
          className="group relative"
        >
          <Button
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
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
