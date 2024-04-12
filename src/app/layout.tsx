import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "./context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Context

  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={inter.className}>{children}</body>
      </ThemeContextProvider>
    </html>
  );
}