import { menuInfo } from "@/data/menu-info";

type Params = Promise<{
  slug: string;
}>;

const page = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  let menu = menuInfo.find((item) => item.slug === slug);

  if (!menu) {
    menu = menuInfo.find((item) => item.slug === "small-plates")!;
  }

  return (
    <section className="pt-[72px]">
      <div className="boxed flex flex-col gap-14">
        <div className="relative flex max-w-max min-w-max flex-col gap-10">
          <h1 className="text-accent text-7xl leading-[0.8] md:text-8xl xl:text-[148px]">
            {menu.title}
          </h1>
          <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl xl:text-8xl">
            our specialities
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {menu.dishes
              .slice(0, Math.ceil(menu.dishes.length / 2))
              .map((dish) => (
                <div key={dish.name} className="flex flex-col">
                  <div className="text-primary flex justify-between">
                    <div className="flex gap-2">
                      <p className="text-4xl">{dish.name}</p>
                      {dish.notes.length > 0 && (
                        <p className="text-accent text-base">
                          {`(${dish.notes.join(" | ")})`}
                        </p>
                      )}
                    </div>

                    <p className="text-4xl">${dish.price}</p>
                  </div>
                  <p className="text-accent max-w-xs text-wrap">
                    {dish.ingredients.join(" | ")}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-6 pt-20">
            {menu.dishes
              .slice(Math.ceil(menu.dishes.length / 2))
              .map((dish) => (
                <div key={dish.name} className="flex flex-col">
                  <div className="text-primary flex justify-between">
                    <div className="flex gap-2">
                      <p className="text-4xl">{dish.name}</p>
                      {dish.notes.length > 0 && (
                        <p className="text-accent text-base">
                          {`(${dish.notes.join(" | ")})`}
                        </p>
                      )}
                    </div>
                    <p className="text-4xl">${dish.price}</p>
                  </div>
                  <p className="text-accent max-w-xs text-wrap">
                    {dish.ingredients.join(" | ")}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
