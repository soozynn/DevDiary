import Header from "@/containers/Header";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/containers/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soozynn | Developer Experience at Vercel and Next.js",
  description: "soozynn.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
