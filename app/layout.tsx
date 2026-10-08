import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import "./styles/redesign.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileContactBar from "./components/MobileContactBar";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import SchemaMarkup from "./components/SchemaMarkup";
import { assetPath } from "./paths";
import { site } from "./site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Globpave Construction | Construction & Paving in Zimbabwe",
    template: "%s | Globpave Construction",
  },
  description: site.description,
  keywords: ["construction company Zimbabwe", "builders Harare", "paving contractors Harare", "civil construction", "road construction Zimbabwe", "roofing contractors Harare", "plumbers Harare", "renovation contractors Harare", "property maintenance Harare"],
  authors: [{ name: "Globpave Construction" }],
  creator: "Globpave Construction",
  publisher: "Globpave Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Globpave Construction | Construction & Paving in Zimbabwe",
    description: site.description,
    url: site.url,
    siteName: "Globpave Construction",
    locale: "en_ZW",
    type: "website",
    images: [{ url: "/images/projects/project-20.jpeg", width: 1080, height: 474, alt: "Patterned paving completed by Globpave Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globpave Construction | Construction & Paving in Zimbabwe",
    description: site.description,
    images: ["/images/projects/project-20.jpeg"],
  },
  alternates: { canonical: "/" },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ "--cloud-image": `url("${assetPath("/images/header-clouds.webp")}")` } as CSSProperties}
      >
        <SchemaMarkup />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsapp />
        <MobileContactBar />
      </body>
    </html>
  );
}
