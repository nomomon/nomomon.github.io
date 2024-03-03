import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { NavBar } from "@/components/molecules/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mansur Nurmukhambetov",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="mt-2 m-auto max-w-4xl py-16 max-md:px-4 max-md:max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}