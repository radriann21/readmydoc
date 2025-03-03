import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import { MardownEditorProvider } from "@/providers/MarkdownEditorStoreProvider";
import "./globals.css";
import "github-markdown-css/github-markdown-light.css"

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
      <body suppressHydrationWarning className={`${cabin.variable} max-w-full min-h-screen`}>
        <MardownEditorProvider>
          {children}
        </MardownEditorProvider>
      </body>
    </html>
  );
}
