import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Dilli Dilli",
  description: "Indian Restaurant in New York",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[2500px] overflow-x-hidden">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
