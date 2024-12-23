import type { Metadata } from "next";
import localFont from "next/font/local";
import { Kaushan_Script } from 'next/font/google';
import { Oswald } from 'next/font/google';
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const kaushan = Kaushan_Script({
  subsets : ["latin"],
  variable: "--font-kaushan",
  weight: ["400"]
})
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-Oswald",
  weight: "600"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ram | Portfolio",
  description: "Created by Venkat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${kaushan.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
