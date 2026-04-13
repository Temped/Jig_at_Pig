import type { Metadata } from "next";
import { Archivo_Black, Monoton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const neon = Monoton({
  variable: "--font-neon",
  subsets: ["latin"],
  weight: "400",
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jig at the Pig — An Adventure Through Time",
  description:
    "Jig at the Pig presents An Adventure Through Time. 6th June at The Pig's Nose, Prawle. Fancy dress essential. £10 a ticket.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${neon.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
