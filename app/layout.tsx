import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import MobileNavbar from "./components/mobile/navbar/mobile-navbar";
import MobileMenuDrawer from "./components/mobile/navbar/mobile-menu-drawer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Popup } from "./components/popups/popup";
import BrunchPopup from "./components/popups/brunch-popup";
import AnimateWrapper from "./components/shared/animate-wrapper";

export const metadata: Metadata = {
  title: "Dilli Dilli",
  description:
    "Experience the vibrant flavors of New Delhi at Dilli Dilli, Times Square's premier Indian restaurant. Savor authentic cuisine, craft cocktails, and weekend brunch in our modern, atmospheric setting. Book your table today for an unforgettable dining experience in the heart of NYC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[2500px] overflow-x-hidden">
        <AnimateWrapper>
          <Analytics />
          <Popup
            delay={4000}
            expiryDate={new Date("2025-04-20T23:59:59")}
            contentClassName=" xl:scale-90"
          >
            <BrunchPopup />
          </Popup>
          <CartProvider>
            <Toaster />
            <Navbar />
            <MobileNavbar />
            <MobileMenuDrawer />
            {children}
            <Footer />
          </CartProvider>
        </AnimateWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
