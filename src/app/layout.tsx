import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echo Design System - Documentation",
  description: "A comprehensive design system built on Tailwind CSS and shadcn/ui components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
