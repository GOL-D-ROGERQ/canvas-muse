import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Protection from "@/components/protection";
import AppLoader from "@/components/AppLoader";
import CustomCursor from "@/components/CustomCursor";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CanvasMuse | Fine Art Portfolio",
  description:
    "Explore a curated collection of original artworks, paintings, and creative masterpieces at CanvasMuse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8F5F0]`}
>
  <ScrollProgress />

  <AppLoader />

  <Protection />
<CustomCursor />
  {children}
        <AppLoader />

        <Protection />

        {children}
      </body>
    </html>
  );
}