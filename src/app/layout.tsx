import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "./context/ThemeContext";
import "./globals.css";
import favIcon from "../../public/next.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GP Calc",
  description: "Achieve Academic Excellence",
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
