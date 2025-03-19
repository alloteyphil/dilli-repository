import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
const page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
    </div>
  );
};

export default page;
