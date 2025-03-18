import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
