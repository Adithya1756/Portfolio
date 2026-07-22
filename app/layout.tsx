import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";
import NetworkBackgroundClient from "@/components/NetworkBackgroundClient";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adithya-ds.vercel.app"),
  title: {
    default: "Adithya DS — Software Engineer & Full-Stack Developer",
    template: "%s — Adithya DS",
  },
  description:
    "Portfolio of Adithya DS — final-year CSE student at VIT Chennai building production systems across web, mobile, blockchain, and AI infrastructure.",
  keywords: [
    "Adithya DS",
    "Software Engineer",
    "Full Stack Developer",
    "React Native",
    "Next.js",
    "VIT Chennai",
    "Portfolio",
  ],
  authors: [{ name: "Adithya DS" }],
  openGraph: {
    title: "Adithya DS — Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Adithya DS — building production systems across web, mobile, blockchain, and AI infrastructure.",
    url: "https://adithya-ds.vercel.app",
    siteName: "Adithya DS",
    images: ["/images/profile.jpg"],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <LoadingScreen />
        <CustomCursor />
        <NetworkBackgroundClient className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen opacity-[0.35]" />
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative min-h-screen pt-28 md:pt-32">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
