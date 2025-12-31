import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LoadingProvider } from "@/context/LoadingContext";
import { ScrollProvider } from "@/context/ScrollContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jiwon's Portfolio",
  description: "Jiwon's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
