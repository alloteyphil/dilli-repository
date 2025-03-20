import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import OurStory from "./components/homepage/our-story";

const page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <OurStory />
    </div>
  );
};

export default page;
