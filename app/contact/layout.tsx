import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dilli Dilli",
  description:
    "Connect with Dilli Dilli for reservations, inquiries, or feedback. We're committed to providing exceptional service and creating memorable dining experiences for our guests.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
