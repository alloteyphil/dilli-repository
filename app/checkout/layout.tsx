import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Dilli Dilli",
  description:
    "Complete your order with ease. Our secure checkout process ensures a smooth and hassle-free experience.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
