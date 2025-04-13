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
    <footer className="flex flex-col">
      <div className="bg-secondary relative pt-[72px] pb-32 md:pb-48">
        <div className="boxed flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="relative max-w-max">
            <h1 className="text-primary-light text-7xl leading-[0.8] md:text-8xl xl:text-[148px]">
              socials
            </h1>
            <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl md:text-6xl xl:text-8xl">
              follow us on
            </p>
          </div>
          <div className="flex gap-2 md:gap-4">
            <Link
              target="_blank"
              href="https://www.instagram.com/dillidillinyc?igsh=dXU3Y3BmY3Rsamsz"
            >
              <Button
                variant="default"
                icon={
                  <Image src={instagram} alt="instagram" className="size-6" />
                }
                className="flex gap-2"
              >
                Instagram
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://www.tiktok.com/@dilli.dilli.nyc?_t=ZT-8uy1w96X7WM&_r=1"
            >
              <Button
                variant="default"
                icon={<Image src={tiktok} alt="tiktok" className="size-6" />}
                className="flex gap-2"
              >
                TikTok
              </Button>
            </Link>
          </div>
        </div>
        <FooterCarousel />
      </div>
      <div className="bg-accent flex w-full flex-col gap-14 pt-40 pb-10 md:pt-60">
        <div className="boxed w-full">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            <div className="border-secondary my-auto flex max-h-max flex-col items-start justify-center gap-4 py-2 md:items-center md:border-r">
              <p className="text-primary-light text-2xl">contact</p>
              <div className="text-secondary flex flex-col items-start md:items-center">
                <Link
                  href="https://maps.app.goo.gl/bpu3qn4q62dAsJNv7"
                  target="_blank"
                  className="hover:underline"
                >
                  <p>250 WEST 47TH STREET </p>
                </Link>
                <Link
                  href="https://maps.app.goo.gl/bpu3qn4q62dAsJNv7"
                  target="_blank"
                  className="hover:underline"
                >
                  <p>NEW YORK, NY 10036</p>
                </Link>
                <Link href="tel:+19298227049" className="underline">
                  <p> +1 (929) 822-7049</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 py-2 md:items-center">
              <p className="text-primary-light text-2xl">hours</p>
              <div className="text-secondary flex flex-col items-start md:items-center">
                <p>Mon - sun</p>
                <p>5:00 PM - 10:30 PM</p>
                <p>sat - sun</p>
                <p>Brunch 12:00 PM - 3:00 PM</p>
                <p>Dinner 5:00 PM - 10:30 PM</p>
              </div>
            </div>
            <div className="border-secondary my-auto flex max-h-max flex-col items-start justify-center gap-4 py-2 md:items-center md:border-l">
              <p className="text-primary-light text-2xl">Socials</p>
              <div className="text-secondary flex flex-col items-start md:items-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/dillidillinyc?igsh=dXU3Y3BmY3Rsamsz"
                  className="hover:underline"
                >
                  <p>Instagram</p>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@dilli.dilli.nyc?_t=ZT-8uy1w96X7WM&_r=1"
                  className="hover:underline"
                >
                  <p>TikTok</p>
                </Link>
                <div className="h-[28px] w-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            className="w-[1600px] scale-90 xl:scale-100"
          />
          <Image
            src={copyright}
            alt="copyright"
            className="scale-75 xl:scale-100"
          />
          {/* <p className="text-secondary font-script text-3xl">
            {`© ${new Date().getFullYear()} all rights reserved by dilli-dilli.com`}
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
