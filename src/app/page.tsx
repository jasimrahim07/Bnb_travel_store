import GoogleAnalytics from "@/components/GoogleAnalytics";
import HomeClient from "@/components/HomeClient";
import { homeMetadata, ORGANIZATION_JSON_LD } from "@/lib/seo";

export const metadata = homeMetadata();

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
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
