import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Büroassist | Sympathische Bürohilfe für kleine Firmen",
  description: "Moderne, sympathische Unterstützung für alle Büroaufgaben – damit Sie sich auf das Wesentliche konzentrieren können.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${instrument.variable}`}>
      <body className="font-sans bg-[#F8F5F0] text-[#2C3E2D] antialiased">
        {children}
      </body>
    </html>
  );
}