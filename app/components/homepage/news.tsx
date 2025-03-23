import Image from "next/image";
import outerBorder from "@/public/images/newsouterborder.svg";
import innerBorder from "@/public/images/newsinnerborder.svg";
import tag1 from "@/public/images/newstag1.svg";
import tag2 from "@/public/images/newstag2.svg";
import tag3 from "@/public/images/newstag3.svg";
import { news } from "@/data/news";
import Link from "next/link";

const News = () => {
  return (
    <div className="bg-secondary-dark py-[72px]">
      <div className="boxed flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-accent text-[148px] leading-none">as seen on</h1>
          <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
            Read all about
          </p>
        </div>
        <div className="relative grid grid-cols-3 gap-10">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              photo={item.image}
              description={item.description}
              link={item.link}
            />
          ))}
          <Image
            src={tag1}
            alt="tag1"
            className="absolute -top-13 -left-10 z-10"
          />
          <Image
            src={tag2}
            alt="tag2"
            className="absolute top-70 right-[32%] z-10"
          />
          <Image
            src={tag3}
            alt="tag3"
            className="absolute -top-20 right-10 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default News;

const NewsCard = ({
  photo,
  description,
  link,
}: {
  photo: any;
  description: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative size-[400px]">
        <Image
          src={outerBorder}
          alt="outer border"
          className="z-[1] size-full"
        />
        <Image
          src={innerBorder}
          alt="inner border"
          className="absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={photo}
          alt="news photo"
          className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex max-w-[400px] flex-col gap-2">
        <Link href={link} target="_blank" className="text-primary">
          <p className="hover:decoration-accent line-clamp-4 hover:underline">
            {description}
          </p>
        </Link>
        <Link href={link} target="_blank" className="text-accent">
          <p className="hover:decoration-accent hover:underline">Read more</p>
        </Link>
      </div>
    </div>
  );
};
