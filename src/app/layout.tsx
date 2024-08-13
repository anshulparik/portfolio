import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshul Parik",
  description: "Software Engineer",
};

// className="m-0 p-0 border-box"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-dark text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
