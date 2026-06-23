import SiteShell from "@/components/layout/SiteShell";
import InnerPageContent from "@/components/pages/InnerPageContent";
import { INNER_PAGES } from "@/data/innerPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <SiteShell>
      <InnerPageContent page={INNER_PAGES.about} />
    </SiteShell>
  );
}
