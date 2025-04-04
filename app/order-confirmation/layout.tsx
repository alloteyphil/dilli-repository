import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmation | Dilli Dilli",
  description:
    "Thank you for your order! We'll notify you once it's ready for pickup or delivery.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
