import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoreLine - The Ultimate Gaming Experience",
  description: "Discover the latest games, reviews, and gaming community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        <main className="min-h-screen">
          {children}
        </main>
        <AudioPlayer />
      </body>
    </html>
  );
}
