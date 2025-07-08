import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSmokeyCursorUI from "@/components/ClientSmokeyCursorUI";
import { AuroraBackground } from "@/components/AuroraBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lingesh T - AI/ML Enthusiast & Full-Stack Developer",
  description: "Portfolio of Lingesh T, AI/ML enthusiast and full-stack developer. Projects, skills, experience, and contact.",
  keywords: "Lingesh T, AI, ML, Full-Stack, Developer, Portfolio, React, FastAPI, Python, Projects, Resume",
  authors: [{ name: "Lingesh T" }],
  openGraph: {
    title: "Lingesh T - AI/ML Enthusiast & Full-Stack Developer",
    description: "Portfolio of Lingesh T, AI/ML enthusiast and full-stack developer. Projects, skills, experience, and contact.",
    url: "https://yourdomain.com",
    siteName: "Lingesh T Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lingesh T Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingesh T - AI/ML Enthusiast & Full-Stack Developer",
    description: "Portfolio of Lingesh T, AI/ML enthusiast and full-stack developer. Projects, skills, experience, and contact.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yourdomain.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-900 text-white`}>
        <AuroraBackground>
          <ClientSmokeyCursorUI />
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
