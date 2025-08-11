import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrlString = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = new URL(siteUrlString);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Nexus — Modern Communication App", template: "%s — Nexus" },
  description:
    "Nexus: Hızlı, güvenli ve modern masaüstü iletişim uygulaması. Gerçek zamanlı sesli sohbet, ekran paylaşımı ve topluluk yönetimi.",
  keywords: ["Nexus", "sohbet", "masaüstü", "electron", "sesli sohbet", "ekran paylaşımı"],
  openGraph: {
    type: "website",
    url: siteUrl.toString(),
    siteName: "Nexus",
    title: "Nexus — Modern Communication App",
    description:
      "Hızlı, güvenli ve modern masaüstü iletişim uygulaması. Gerçek zamanlı sesli sohbet, ekran paylaşımı ve topluluk yönetimi.",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Nexus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus — Modern Communication App",
    description:
      "Hızlı, güvenli ve modern masaüstü iletişim uygulaması. Gerçek zamanlı sesli sohbet, ekran paylaşımı ve topluluk yönetimi.",
    images: ["/og"],
  },
  icons: {
    icon: "/images/logo.png?v=2",
    shortcut: ["/images/logo.png?v=2"],
    apple: ["/images/logo.png?v=2"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Nexus",
              operatingSystem: "Windows, macOS, Linux",
              applicationCategory: "CommunicationApplication",
              offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
              url: siteUrl.toString(),
            }),
          }}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
