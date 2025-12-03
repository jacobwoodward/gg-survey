import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Share Your Perspective",
  description: "Help me understand what's broken and how to fix it together.",
  openGraph: {
    title: "Share Your Perspective",
    description: "Help me understand what's broken and how to fix it together.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Share Your Perspective",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Share Your Perspective",
    description: "Help me understand what's broken and how to fix it together.",
    images: ["/og-image.png"],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
