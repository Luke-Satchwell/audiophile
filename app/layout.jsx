import Footer from "@/components/Footer";
import "/styles/globals.css";
import { Manrope } from "next/font/google";

import About from "@/components/About";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Audiophile",
  description: "Fulfill all of your audio needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} max-w-[1440px] mx-auto overflow-x-hidden`}
      >
        {children}

        <About />

        <Footer />
      </body>
    </html>
  );
}
