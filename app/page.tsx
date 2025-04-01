import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import OurStory from "./components/homepage/our-story";
import MenuSection from "./components/homepage/menu-section";
import Testimonials from "./components/homepage/testimonials";
import News from "./components/homepage/news";
import Merchandise from "./components/homepage/merchandise";
import { createOrder } from "@/actions/order/order.actions";

const page = async () => {
  const testOrderData = {
    stripeId: "cs_test_123456789",
    userDetails: {
      email: "test@example.com",
      name: "John Doe",
      address: {
        city: "New York",
        address: "123 Main St",
        address2: "Apt 4B",
        postCode: "10001",
      },
    },
    items: [
      {
        id: "prod_123",
        variant: "Small",
        quantity: 2,
      },
      {
        id: "prod_456",
        variant: "Medium",
        quantity: 1,
      },
    ],
    totalAmount: "99.99",
    createdAt: new Date(),
  };

  const order = await createOrder(testOrderData);

  console.log(order);

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <OurStory />
      <MenuSection />
      <Testimonials />
      <News />
      <Merchandise />
    </div>
  );
};

export default page;
