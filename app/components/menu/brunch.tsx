import { brunchMenuInfo } from "@/data/menu-info";

const Brunch = () => {
  return (
    <section className="pt-[72px]">
      <div className="boxed flex flex-col gap-14">
        <div className="relative flex max-w-max min-w-max flex-col gap-10">
          <h1 className="text-accent text-7xl leading-[0.8] md:text-8xl xl:text-[148px]">
            {brunchMenuInfo.title}
          </h1>
          <p className="text-primary-light font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl xl:text-8xl">
            our specialities
          </p>
        </div>
        <div className="flex flex-col gap-10 py-[72px]">
          {/* Old Delhi */}
          <h3 className="text-accent w-full text-center text-6xl md:text-7xl xl:text-[120px]">
            Old Delhi
          </h3>
          <h4 className="text-accent text-5xl md:text-6xl xl:text-8xl">main</h4>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {brunchMenuInfo.dishes.oldDelhi
                .slice(0, Math.ceil(brunchMenuInfo.dishes.oldDelhi.length / 2))
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
              {brunchMenuInfo.dishes.oldDelhi
                .slice(Math.ceil(brunchMenuInfo.dishes.oldDelhi.length / 2))
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

          {/* Old Delhi Specials */}
          <h4 className="text-accent mt-8 text-8xl">specials</h4>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            {brunchMenuInfo.dishes.specials.oldDelhiSpecials
              .slice(
                0,
                Math.ceil(
                  brunchMenuInfo.dishes.specials.oldDelhiSpecials.length / 2,
                ),
              )
              .map((dish) => (
                <div key={dish.name}>
                  <h3 className="text-accent text-6xl">{dish.name}</h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-accent max-w-xs text-wrap">
                      {dish.ingredients.join(" | ")}
                    </p>
                    <div className="flex flex-col gap-6">
                      {dish.options.map((option) => (
                        <div
                          key={option.name}
                          className="flex w-full justify-between"
                        >
                          <p className="text-primary text-4xl">{option.name}</p>
                          <p className="text-primary text-4xl">
                            ${option.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            {brunchMenuInfo.dishes.specials.oldDelhiSpecials
              .slice(brunchMenuInfo.dishes.specials.oldDelhiSpecials.length / 2)
              .map((dish) => (
                <div key={dish.name} className="pt-20">
                  <h3 className="text-accent text-6xl">{dish.name}</h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-accent max-w-xs text-wrap">
                      {dish.ingredients.join(" | ")}
                    </p>
                    <div className="flex flex-col gap-6">
                      {dish.options.map((option) => (
                        <div
                          key={option.name}
                          className="flex w-full justify-between"
                        >
                          <p className="text-primary text-4xl">{option.name}</p>
                          <p className="text-primary text-4xl">
                            ${option.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* New Delhi */}
          <h3 className="text-accent w-full text-center text-[120px]">
            New Delhi
          </h3>
          <h4 className="text-accent text-8xl">main</h4>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {brunchMenuInfo.dishes.newDelhi
                .slice(0, Math.ceil(brunchMenuInfo.dishes.newDelhi.length / 2))
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
              {brunchMenuInfo.dishes.newDelhi
                .slice(Math.ceil(brunchMenuInfo.dishes.newDelhi.length / 2))
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

          {/* New Delhi Specials */}
          <h4 className="text-accent mt-8 text-8xl">specials</h4>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            {brunchMenuInfo.dishes.specials.newDelhiSpecials
              .slice(
                0,
                Math.ceil(
                  brunchMenuInfo.dishes.specials.newDelhiSpecials.length / 2,
                ),
              )
              .map((dish) => (
                <div key={dish.name}>
                  <h3 className="text-accent text-6xl">{dish.name}</h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-accent max-w-xs text-wrap">
                      {dish.ingredients.join(" | ")}
                    </p>
                    <div className="flex flex-col gap-6">
                      {dish.options.map((option) => (
                        <div
                          key={option.name}
                          className="flex w-full justify-between"
                        >
                          <p className="text-primary text-4xl">{option.name}</p>
                          <p className="text-primary text-4xl">
                            ${option.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            {brunchMenuInfo.dishes.specials.newDelhiSpecials
              .slice(brunchMenuInfo.dishes.specials.newDelhiSpecials.length / 2)
              .map((dish) => (
                <div key={dish.name} className="pt-20">
                  <h3 className="text-accent text-6xl">{dish.name}</h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-accent max-w-xs text-wrap">
                      {dish.ingredients.join(" | ")}
                    </p>
                    <div className="flex flex-col gap-6">
                      {dish.options.map((option) => (
                        <div
                          key={option.name}
                          className="flex w-full justify-between"
                        >
                          <p className="text-primary text-4xl">{option.name}</p>
                          <p className="text-primary text-4xl">
                            ${option.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Drinks */}
          <h3 className="text-accent w-full text-center text-[120px]">
            Drinks
          </h3>

          {/* Spirit Free */}
          <h4 className="text-accent text-8xl">spirit free</h4>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {brunchMenuInfo.dishes.drinks.spiritFree
                .slice(
                  0,
                  Math.ceil(brunchMenuInfo.dishes.drinks.spiritFree.length / 2),
                )
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
              {brunchMenuInfo.dishes.drinks.spiritFree
                .slice(
                  Math.ceil(brunchMenuInfo.dishes.drinks.spiritFree.length / 2),
                )
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

          {/* Full of Spirit */}
          <h4 className="text-accent text-8xl">full of spirit</h4>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {brunchMenuInfo.dishes.drinks.alcoholic
                .slice(
                  0,
                  Math.ceil(brunchMenuInfo.dishes.drinks.alcoholic.length / 2),
                )
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
              {brunchMenuInfo.dishes.drinks.alcoholic
                .slice(
                  Math.ceil(brunchMenuInfo.dishes.drinks.alcoholic.length / 2),
                )
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

          {/* Sides */}
          <h3 className="text-accent w-full text-center text-[120px]">Sides</h3>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {brunchMenuInfo.dishes.sides
                .slice(0, Math.ceil(brunchMenuInfo.dishes.sides.length / 2))
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
                  </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 pt-20">
              {brunchMenuInfo.dishes.sides
                .slice(Math.ceil(brunchMenuInfo.dishes.sides.length / 2))
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
                  </div>
                ))}
            </div>
          </div>

          {/* Caffeine */}
          <h3 className="text-accent w-full text-center text-[120px]">
            Caffeine
          </h3>
          <div className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {brunchMenuInfo.dishes.caffeine
                .slice(0, Math.ceil(brunchMenuInfo.dishes.caffeine.length / 2))
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
                  </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 pt-20">
              {brunchMenuInfo.dishes.caffeine
                .slice(Math.ceil(brunchMenuInfo.dishes.caffeine.length / 2))
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
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brunch;
