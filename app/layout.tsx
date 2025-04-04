import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import MobileNavbar from "./components/mobile/navbar/mobile-navbar";
import MobileMenuDrawer from "./components/mobile/navbar/mobile-menu-drawer";

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
        <CartProvider>
          <Toaster  />
          <Navbar />
          <MobileNavbar />
          <MobileMenuDrawer />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
