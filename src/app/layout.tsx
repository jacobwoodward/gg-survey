import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Share Your Perspective",
  description: "Help us understand what's broken and how to fix it together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
