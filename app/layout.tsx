import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AtmosphericBg from "@/components/AtmosphericBg";
import ThemeApplicator from "@/components/ThemeApplicator";
import LanguageTransition from "@/components/LanguageTransition";
import { LanguageProvider } from "@/contexts/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jasper van Tilborg — Brand Strategist & Visual Designer",
  description:
    "Showcase portfolio of Jasper van Tilborg — Brand Strategist & Visual Designer at Fontys University of Applied Sciences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark overflow-x-clip">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${playfairDisplay.variable} ${dmSans.variable} font-body antialiased bg-background text-on-surface overflow-x-clip`}
      >
        <LanguageProvider>
          <ThemeApplicator />
          <AtmosphericBg />
          <Navbar />
          <LanguageTransition>
            {children}
            <Footer />
          </LanguageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
