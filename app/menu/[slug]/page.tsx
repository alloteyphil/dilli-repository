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
    <div className="pt-[72px]">
      <div className="boxed flex flex-col gap-14">
        <div className="flex items-end justify-between">
          <div className="relative flex max-w-max flex-col gap-10">
            <h1 className="text-accent text-[148px] leading-[0.8]">
              {menu.title}
            </h1>
            <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 text-8xl">
              our specialities
            </p>
          </div>
          <p className="text-primary max-w-[400px] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-28">
          <div className="flex flex-col gap-6">
            {menu.dishes
              .slice(0, Math.ceil(menu.dishes.length / 2))
              .map((dish) => (
                <div key={dish.name} className="flex flex-col">
                  <div className="text-primary flex justify-between">
                    <p className="text-4xl">{dish.name}</p>
                    <p className="text-4xl">${dish.price}</p>
                  </div>
                  <p className="text-accent">{dish.ingredients.join(" | ")}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-6 pt-20">
            {menu.dishes
              .slice(Math.ceil(menu.dishes.length / 2))
              .map((dish) => (
                <div key={dish.name} className="flex flex-col">
                  <div className="text-primary flex justify-between">
                    <p className="text-4xl">{dish.name}</p>
                    <p className="text-4xl">${dish.price}</p>
                  </div>
                  <p className="text-accent">{dish.ingredients.join(" | ")}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
