import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100","400","500", "700","900"], style:["normal","italic"] });

export const metadata: Metadata = {
  title: "Easy Fly",
  description: "A Travel Finder and Assistant, built to help you in your vacation plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="absolute top-0 pt-4 bg-blue-600 w-full h-max p-2 md:pr-16 md:p-4 md:text-xl flex justify-center md:justify-end text-white font-medium">
          <nav className="flex gap-4 md:gap-8">
            <a href="/">Home</a>
            <a href="/search">Search</a>
            <a href="">Weather Tips</a>
            <a href="">Login</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
