import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAN-VU | Vietnamese Loempia's",
  description:
    "Authentieke Vietnamese loempia's op festivals, markten en evenementen door heel Nederland. Bekijk onze agenda en vind ons bij jou in de buurt.",
  keywords: ["loempia", "Vietnamese loempia", "foodtruck", "festival", "markt", "VAN-VU"],
  openGraph: {
    title: "VAN-VU | Vietnamese Loempia's",
    description: "Authentieke Vietnamese loempia's op festivals en evenementen",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#0d0d0d] text-[#f5f0eb] antialiased">
        {children}
      </body>
    </html>
  );
}
