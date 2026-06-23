import SiteShell from "@/components/layout/SiteShell";
import InnerPageContent from "@/components/pages/InnerPageContent";
import { INNER_PAGES } from "@/data/innerPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("visa-services");

export default function VisaServicesPage() {
  return (
    <SiteShell>
      <InnerPageContent page={INNER_PAGES["visa-services"]} />
    </SiteShell>
  );
}
