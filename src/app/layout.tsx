import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synaphis | AI, Cloud & Software Solutions Partner",
  description:
    "Synaphis is a US-based outsourcing partner helping businesses build smarter with AI, cloud, and custom software. We combine US credibility with global engineering talent to deliver scalable, dependable results.",
  icons: {
    icon: "/icon.png", // or "/favicon.ico" depending on what you used
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Synaphis | AI, Cloud & Software Solutions Partner",
    description:
      "Your trusted outsourcing partner for AI, cloud, and custom software — combining US credibility with global expertise.",
    url: "https://www.synaphis.com", // 🔧 update once your domain is live
    siteName: "Synaphis",
    images: [
      {
        url: "/og-image.png", // optional — add later for social sharing
        width: 1200,
        height: 630,
        alt: "Synaphis - AI, Cloud & Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
