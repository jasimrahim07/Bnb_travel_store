import type { Metadata } from "next";

export const SITE_URL = "https://www.bnbtravelstore.com";
export const GOOGLE_SITE_VERIFICATION = "71d1B0nUJWqXo8gvn4p7SbyIwLYLW3dw7RjWwPr5Kgs";
export const GA_MEASUREMENT_ID = "G-PGYBC5L2P9";

export const PAGE_SEO = {
  home: {
    title: "B&B Travel Store - Best Travel Agency in Karachi",
    description:
      "Book flights, tours, visas, hotels, umrah and holiday packages with B&B Travel Store, a trusted travel agency in Karachi for reliable travel services.",
    path: "/",
  },
  "visa-services": {
    title: "Professional Visa Consultancy Services | B&B Travel Store",
    description:
      "B&B Travel Store offers expert visa consultants for visit, business and travel visas with professional guidance and support. Contact us today for visa help!",
    path: "/visa-services",
  },
  evisas: {
    title: "Apply for E-Visa Online With B&B Travel Store",
    description:
      "We help you apply for e-visa online with expert guidance, document support and smooth processing for hassle-free travel. Contact today!",
    path: "/evisas",
  },
  holidays: {
    title: "Plan Your Holidays with B&B Travel Store",
    description:
      "Plan domestic and international tours with B&B Travel Store. Get custom holiday packages, travel guidance and support for your perfect trip.",
    path: "/holidays",
  },
  umrah: {
    title: "Complete Umrah Travel Packages from Pakistan",
    description:
      "Book complete Umrah travel packages from Pakistan with B&B Travel Store. Get visa assistance, book flights, hotels and transport with expert guidance.",
    path: "/umrah",
  },
  "flights-hotels": {
    title: "Book Flight Tickets & Hotel Reservations | B&B Travel Store",
    description:
      "Book flight tickets and hotel reservations with B&B Travel Store. Get affordable fares, comfortable stays, and reliable support for local and international travel.",
    path: "/flights-hotels",
  },
  about: {
    title: "About B&B Travel Store | Your Travel Partner",
    description:
      "Discover B&B Travel Store, your reliable travel partner for visas, flights, hotels, Umrah packages, domestic tours, and international holidays.",
    path: "/about",
  },
  contact: {
    title: "Contact us | Travel Support & Bookings",
    description:
      "Get in touch with us if you have any questions about visas, travel packages, or any other travel-related queries. Our team is here to guide and assist you.",
    path: "/contact",
  },
} as const;

export type PageSeoKey = keyof typeof PAGE_SEO;

function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function homeMetadata(): Metadata {
  return {
    ...pageMetadata("home"),
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
  };
}

export function pageMetadata(key: PageSeoKey): Metadata {
  const page = PAGE_SEO[key];
  const url = canonicalUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
    },
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "B&B Travel Store",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92 321 2299387",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["en", "Urdu"],
  },
  sameAs: `${SITE_URL}/`,
} as const;
