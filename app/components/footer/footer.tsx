import Button from "../shared/button";
import tiktok from "@/public/images/TiktokLogo.svg";
import instagram from "@/public/images/InstagramLogo.svg";
import Image from "next/image";
import FooterCarousel from "./footer-carousel";
import Link from "next/link";
import logo from "@/public/images/footerlogo.svg";
import copyright from "@/public/images/copyright.svg";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-secondary relative pt-[72px] pb-48">
        <div className="boxed flex w-full items-end justify-between">
          <div className="relative">
            <h1 className="text-primary-light text-[148px] leading-[0.8]">
              socials
            </h1>
            <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
              follow us on
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="default"
              href=""
              icon={
                <Image src={instagram} alt="instagram" className="size-6" />
              }
              className="flex gap-2"
            >
              Instagram
            </Button>
            <Button
              variant="default"
              href=""
              icon={<Image src={tiktok} alt="tiktok" className="size-6" />}
              className="flex gap-2"
            >
              TikTok
            </Button>
          </div>
        </div>
        <FooterCarousel />
      </div>
      <div className="bg-accent flex w-full flex-col gap-14 pt-60 pb-10">
        <div className="boxed w-full">
          <div className="grid w-full grid-cols-3">
            <div className="border-secondary my-auto flex max-h-max flex-col items-center justify-center gap-4 border-r py-2">
              <p className="text-primary-light text-2xl">contact</p>
              <div className="text-secondary flex flex-col items-center">
                <p>250 WEST 47TH STREET </p>
                <p>NEW YORK, NY 10036</p>
                <Link href="tel:+16466698261" className="underline">
                  <p> +1 (646) 669-8261</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-2">
              <p className="text-primary-light text-2xl">hours</p>
              <div className="text-secondary flex flex-col items-center">
                <p>Mon - sun</p>
                <p>5:00 PM - 10:30 PM</p>
                <p>sat - sun</p>
                <p>Brunch 12:00 PM - 3:00 PM</p>
                <p>Dinner 5:00 PM - 10:30 PM</p>
              </div>
            </div>
            <div className="border-secondary my-auto flex max-h-max flex-col items-center justify-center gap-4 border-l py-2">
              <p className="text-primary-light text-2xl">links</p>
              <div className="text-secondary flex flex-col items-center">
                <Link href="" className="hover:underline">
                  <p>website policy</p>
                </Link>
                <Link href="" className="hover:underline">
                  <p>terms & conditions</p>
                </Link>
                <Link href="" className="hover:underline">
                  <p>privacy policy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="w-[1600px]" />
          <Image src={copyright} alt="copyright" />
          {/* <p className="text-secondary font-script text-3xl">
            {`© ${new Date().getFullYear()} all rights reserved by dilli-dilli.com`}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
