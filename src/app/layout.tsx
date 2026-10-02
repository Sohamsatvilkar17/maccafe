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
  title: "The Daily Brew | Boutique Specialty Coffee & Artisan Bakery",
  description:
    "Experience handcrafted single-origin coffees, small-batch roasted beans, and warm organic pastries baked fresh every dawn at The Daily Brew.",
  keywords: [
    "artisan coffee",
    "specialty cafe",
    "espresso bar",
    "single origin roastery",
    "fresh bakery",
    "The Daily Brew",
  ],
  openGraph: {
    title: "The Daily Brew | Boutique Specialty Coffee & Artisan Bakery",
    description:
      "Handcrafted coffee, small-batch roasts, and organic morning pastries in a warm, sunlit neighborhood space.",
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
