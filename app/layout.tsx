import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { cn } from "@/lib/utils";
import info from "@/public/data/info.json";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mansur Nurmukhambetov",
  description: info.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" typeof="image/png" />
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
