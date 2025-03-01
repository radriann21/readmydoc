import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Readmydoc",
  description: "A comfy and easy to use readme generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable} max-w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
