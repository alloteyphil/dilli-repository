import OrderSummary from "../components/checkout/order-summary";
import CheckoutForm from "../components/checkout/checkout";

const page = () => {
  return (
    <main className="bg-secondary max-md:py-10">
      <div className="boxed relative flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-primary text-7xl leading-none md:text-8xl xl:text-[148px]">
            checkout
          </h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-5xl md:text-6xl xl:text-8xl">
            get your merch
          </p>
        </div>
        <div className="flex grid-cols-1 flex-col-reverse gap-30 md:grid xl:grid-cols-2">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

export default page;
