"use client";
import "/styles/globals.css";
import { Manrope } from "next/font/google";

import CategoryLinks from "@/components/CategoryLinks";
import About from "@/components/About";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Audiophile",
  description: "Fulfill all of your audio needs",
};

export default function RootLayout({ children }) {
  return (
    <body
      className={`${manrope.className} max-w-[1440px] mx-auto overflow-x-hidden`}
    >
      <main className=" mt-16 md:mt-[120px] lg:mt-40">
        {children}
        <CategoryLinks />
        <About />
      </main>
      <Footer />
    </body>
  );
}
