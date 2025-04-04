import Image from "next/image";
import instagram from "@/public/images/InstagramLogo.svg";
import Link from "next/link";

const FooterCarouselCard = ({ photo }: { photo: string }) => {
  return (
    <Link
      href="https://www.instagram.com/dillidillinyc?igsh=dXU3Y3BmY3Rsamsz"
      target="_blank"
      className="group relative size-[260px] overflow-hidden max-md:size-40"
    >
      <div className="border-secondary absolute inset-1/2 z-[2] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-90 border opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <img
        src={photo}
        width={260}
        height={260}
        alt="footer-carousel"
        className="size-full object-cover object-center transition-all duration-500 group-hover:scale-105"
      />
      <img
        src="/images/InstagramLogo.svg"
        alt="instagram"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"
      />
    </Link>
  );
};

export default FooterCarouselCard;
