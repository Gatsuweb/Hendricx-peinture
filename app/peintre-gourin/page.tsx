import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/LocalSeoPage";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import { isLocalPageNoindex, localPages } from "../local-pages";

const page = localPages["peintre-gourin"];

export const metadata: Metadata = createMetadata({
  title: "Peintre a Gourin | Renovation et peinture en Centre Bretagne",
  description: page.description,
  path: `/${page.slug}`,
  keywords: page.keywords,
  noindex: isLocalPageNoindex(page.slug),
});

export default function PeintreGourinPage() {
  return (
    <PageShell>
      <LocalSeoPage page={page} />
    </PageShell>
  );
}
