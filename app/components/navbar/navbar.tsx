import Image from "next/image";
import NavLinks from "./nav-links";
import Button from "../shared/button";
import Link from "next/link";
import logo from "@/public/images/logos.svg";

const Navbar = () => {
  return (
    <div className="bg-secondary">
      <div className="boxed text-accent flex items-center justify-between py-8">
        <div className="min-w-max">
          <NavLinks />
        </div>
        <Image src={logo} alt="logo" className="scale-90" />
        <div className="flex items-center gap-10">
          <Link href="/event-catering">
            <p className="min-w-max">Event Catering</p>
          </Link>
          <Button href="/reservation">Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
