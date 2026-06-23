import HomeClient from "@/components/HomeClient";
import { ORGANIZATION_JSON_LD, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("home");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_JSON_LD),
        }}
      />
      <HomeClient />
    </>
  );
}
