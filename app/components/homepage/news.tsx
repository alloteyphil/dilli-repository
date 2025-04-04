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
    <section className="bg-secondary-dark overflow-x-hidden py-[72px]">
      <div className="boxed flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-accent text-center text-7xl leading-none md:text-8xl xl:text-[148px]">
            as seen on
          </h1>
          <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-center text-5xl md:text-6xl xl:text-8xl">
            Read all about
          </p>
        </div>
        <div className="relative grid w-full grid-cols-1 place-items-center gap-10 xl:grid-cols-3 xl:gap-0">
          {news.map((item) => (
            <div key={item.id} className="relative">
              <NewsCard
                photo={item.image}
                description={item.description}
                link={item.link}
              />
              {item.id === 1 ? (
                <Image
                  src={tag1}
                  alt="tag1"
                  className="absolute -top-13 -left-24 z-10 scale-75 md:scale-100"
                />
              ) : item.id === 2 ? (
                <Image
                  src={tag2}
                  alt="tag2"
                  className="absolute -right-14 bottom-40 z-10 scale-75 md:scale-100 lg:top-70 lg:left-60 xl:-right-14 xl:bottom-40"
                />
              ) : (
                <Image
                  src={tag3}
                  alt="tag3"
                  className="absolute -top-10 -right-20 z-10 scale-75 md:scale-100 lg:top-80 lg:-left-24 xl:-top-20 xl:left-40"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <div className="flex flex-col gap-4 lg:flex-row xl:flex-col xl:gap-10">
      <div className="relative size-[400px] scale-90 md:scale-100">
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
      <div className="mx-auto flex max-w-screen flex-col items-center gap-2 px-4 md:max-w-[400px] md:px-0 lg:pt-6 xl:pt-0">
        <Link href={link} target="_blank" className="text-primary">
          <p className="hover:decoration-accent line-clamp-4 hover:underline">
            {description}
          </p>
        </Link>
        <Link
          href={link}
          target="_blank"
          className="text-accent w-full text-start"
        >
          <p className="hover:decoration-accent hover:underline">Read more</p>
        </Link>
      </div>
    </div>
  );
};
