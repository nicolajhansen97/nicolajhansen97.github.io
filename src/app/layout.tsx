import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/motion/cursor-glow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolaj Hansen — Backend Developer",
  description:
    "Backend developer from Denmark. Building apps, APIs, and scalable systems.",
  openGraph: {
    title: "Nicolaj Hansen — Backend Developer",
    description:
      "Backend developer from Denmark. Building apps, APIs, and scalable systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
