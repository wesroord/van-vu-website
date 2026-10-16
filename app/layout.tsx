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
    "Authentieke Vietnamese loempia's op festivals, markten en evenementen in de regio. Bekijk onze wekelijkse locaties en vind ons bij jou in de buurt.",
  keywords: ["loempia", "Vietnamese loempia", "foodtruck", "festival", "markt", "VAN-VU", "catering"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "VAN-VU | Vietnamese Loempia's",
    description: "Authentieke Vietnamese loempia's op festivals en evenementen",
    type: "website",
    images: [{ url: "/icon-512.png" }],
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
