import SiteShell from "@/components/layout/SiteShell";
import InnerPageContent from "@/components/pages/InnerPageContent";
import { INNER_PAGES } from "@/data/innerPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("holidays");

export default function HolidaysPage() {
  return (
    <SiteShell>
      <InnerPageContent page={INNER_PAGES.holidays} />
    </SiteShell>
  );
}
