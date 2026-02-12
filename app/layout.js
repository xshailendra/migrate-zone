import { Outfit, Raleway_Dots, Poppins, Oxanium, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const ralewayDots = Raleway_Dots({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-raleway-dots",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-poppins",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-oxanium",
});

export const metadata = {
  title: "Best Visa Consultant | Migrate Zone",
  description: "Expert Visa Guidance Simple, Fast & Affordable.",
};

import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${syne.variable} ${ralewayDots.variable} ${poppins.variable} ${oxanium.variable} antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <ScrollToTop />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

