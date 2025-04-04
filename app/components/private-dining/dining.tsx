import DiningImages from "./dining-images";

const Dining = () => {
  return (
    <section className="bg-secondary py-[72px]">
      <div className="boxed flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-primary text-7xl leading-none md:text-8xl xl:text-[148px]">
            dine with us
          </h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl md:text-6xl xl:text-8xl">
            every bite tells a story
          </p>
        </div>
        <DiningImages />
      </div>
    </section>
  );
};

export default Dining;
