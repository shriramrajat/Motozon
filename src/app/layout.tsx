import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  weight: ["400", "600", "700"],
  subsets: ["devanagari"],
});

import { PublicLayoutWrapper } from "@/components/layout/PublicLayoutWrapper";

export const metadata: Metadata = {
  title: "Motozon | Turn Your Car Into a Source of Monthly Income",
  description: "Motozon helps individuals purchase commercial vehicles with finance, permits, fleet attachment, insurance and complete business support in Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${notoSansDevanagari.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-light text-brand-dark">
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
      </body>
    </html>
  );
}
