import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mansur Nurmukhambetov",
  description:
    "Machine Learning Engineer & Community Builder. I turn data into magic—from molecules to neural nets.",
  openGraph: {
    title: "Mansur Nurmukhambetov",
    description:
      "Machine Learning Engineer & Community Builder. I turn data into magic—from molecules to neural nets.",
    url: "https://nomomon.xyz/",
    type: "website",
    images: [
      {
        url: "https://nomomon.xyz/preview.png",
        width: 1200,
        height: 630,
        alt: "Mansur Nurmukhambetov preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansur Nurmukhambetov",
    description:
      "Machine Learning Engineer & Community Builder. I turn data into magic—from molecules to neural nets.",
    images: ["https://nomomon.xyz/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
