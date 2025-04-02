import Button from "../components/shared/button";

const CancelPage = () => {
  return (
    <div className="bg-secondary">
      <div className="boxed flex min-h-screen flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-primary text-[148px] leading-none">
            Order Cancelled
          </h1>
          <p className="text-accent font-script text-8xl">No worries!</p>
          <p className="text-accent mt-5 text-xl">
            Your order was cancelled. You can try again whenever you're ready.
          </p>
          <Button href="/" variant="default">
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
