import type { Metadata } from "next";
import {
  Dancing_Script,
  Inter,
  Playfair_Display,
} from "next/font/google";
import { SITE } from "@/lib/siteConfig";
import { PAGE_SEO, SITE_URL } from "@/lib/seo";
import TawkToChat from "@/components/TawkToChat";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  applicationName: SITE.name,
  icons: {
    icon: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    siteName: SITE.name,
    type: "website",
    url: SITE_URL,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${dancingScript.variable}`}
    >
      <body className="font-sans-body antialiased">
        {children}
        <TawkToChat />
      </body>
    </html>
  );
}
