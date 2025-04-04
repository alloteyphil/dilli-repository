import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Dining | Dilli Dilli",
  description:
    "Experience a unique dining experience with our private dining options. Perfect for special occasions, our private dining spaces offer a cozy and intimate setting for your group.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
