import OrderSummary from "../components/checkout/order-summary";
import CheckoutForm from "../components/checkout/checkout";

const page = () => {
  return (
    <main className="bg-secondary">
      <div className="boxed relative flex flex-col items-center gap-10">
        <div className="relative max-w-max">
          <h1 className="text-primary text-[148px] leading-none">checkout</h1>
          <p className="text-accent font-script absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] text-8xl">
            get your merch
          </p>
        </div>
        <div className="grid grid-cols-2 gap-30">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

export default page;
