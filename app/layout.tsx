import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import "./styles/redesign.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileContactBar from "./components/MobileContactBar";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import SchemaMarkup from "./components/SchemaMarkup";

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

const siteDescription = "Globpave Construction provides civil works, building, paving, plumbing, roofing, electrical, fencing and property maintenance services across Zimbabwe.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globpaveconstruction.co.zw"),
  title: {
    default: "Globpave Construction | Construction & Paving in Zimbabwe",
    template: "%s | Globpave Construction",
  },
  description: siteDescription,
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
    description: siteDescription,
    url: "https://www.globpaveconstruction.co.zw",
    siteName: "Globpave Construction",
    locale: "en_ZW",
    type: "website",
    images: [{ url: "/images/projects/project-20.jpeg", width: 1080, height: 474, alt: "Patterned paving completed by Globpave Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globpave Construction | Construction & Paving in Zimbabwe",
    description: siteDescription,
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
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
