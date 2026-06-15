import type { Metadata } from "next";
import { SITE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact | B&B Travel Store",
  description: `Get in touch with ${SITE.name}. WhatsApp, call, or visit for a free travel consultation.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
