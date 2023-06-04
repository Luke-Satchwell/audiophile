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

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} max-w-[1440px] mx-auto overflow-x-hidden`}
      >
        <main>
          {children}
          <CategoryLinks />
        </main>
      </body>
    </html>
  );
}
