import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labro Infra - Mumbai 3.0 / KSC Land Investment Opportunities",
  description: "Invest early in Mumbai 3.0 - KSC (Karnala-Sai-Chirner) New Town before prices rise. Government-planned growth corridor with infrastructure-driven development. Premium land investment opportunities.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Labro Infra - Mumbai 3.0 / KSC Land Investment Opportunities",
    description: "Invest early in Mumbai 3.0 - KSC (Karnala-Sai-Chirner) New Town before prices rise. Government-planned growth corridor with infrastructure-driven development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
