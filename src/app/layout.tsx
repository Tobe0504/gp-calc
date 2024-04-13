import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "./context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GP Calc",
  description: "Calculate grades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={inter.className} id="light">
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
