import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio - Marcos Fidelibus",
  description: "Marcos Fidelibus Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
