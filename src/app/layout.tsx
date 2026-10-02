import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maccafe | Artisan Espresso & Fresh Sourdough Pastries",
  description:
    "Artisan espresso & fresh sourdough pastries in a cozy, modern space. Open 10 AM – 8 PM daily in SoHo.",
  keywords: [
    "Maccafe",
    "artisan espresso",
    "sourdough pastries",
    "cappuccino",
    "cold brew",
    "cinnamon bun",
    "avocado toast",
    "cozy modern cafe",
  ],
  openGraph: {
    title: "Maccafe | Artisan Espresso & Fresh Sourdough Pastries",
    description:
      "Artisan espresso & fresh sourdough pastries in a cozy, modern space. Open 10 AM – 8 PM daily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAFAF8] text-[#1F1D1A] antialiased selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
