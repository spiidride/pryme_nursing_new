import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pryme Nursing - Healthcare Staffing Reimagined",
  description:
    "Connect healthcare professionals, agencies, and patients seamlessly. Join thousands who trust Pryme Nursing for verified healthcare staffing solutions.",
  keywords:
    "healthcare staffing, nursing jobs, medical professionals, healthcare recruitment, verified nurses",
  authors: [{ name: "Pryme Nursing" }],
  openGraph: {
    title: "Pryme Nursing - Healthcare Staffing Reimagined",
    description:
      "Connect healthcare professionals, agencies, and patients seamlessly.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pryme Nursing - Healthcare Staffing Reimagined",
    description:
      "Connect healthcare professionals, agencies, and patients seamlessly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/pryme-favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/pryme-favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/pryme-favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/pryme-favicon.png"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
