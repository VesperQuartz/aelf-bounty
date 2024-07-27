import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MyRuntimeProvider } from "@/app/MyRuntimeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aelf",
  description: "Your Personalized Ai Assistant for Aelf Documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en" className="h-full dark">
        <body className={`${inter.className} h-full`}>{children}</body>
      </html>
    </MyRuntimeProvider>
  );
}
