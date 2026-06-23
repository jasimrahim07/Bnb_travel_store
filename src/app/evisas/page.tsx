import SiteShell from "@/components/layout/SiteShell";
import InnerPageContent from "@/components/pages/InnerPageContent";
import { INNER_PAGES } from "@/data/innerPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("evisas");

export default function EvisasPage() {
  return (
    <SiteShell>
      <InnerPageContent page={INNER_PAGES.evisas} />
    </SiteShell>
  );
}
