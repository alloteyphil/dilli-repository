import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import OurStory from "./components/homepage/our-story";
import MenuSection from "./components/homepage/menu-section";
import Testimonials from "./components/homepage/testimonials";
import News from "./components/homepage/news";
import Merchandise from "./components/homepage/merchandise";

const page = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <OurStory />
      <MenuSection />
      <Testimonials />
      <News />
      {process.env.NODE_ENV !== "production" && <Merchandise />}
    </main>
  );
};

export default page;
