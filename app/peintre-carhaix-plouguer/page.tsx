import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/LocalSeoPage";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import { isLocalPageNoindex, localPages } from "../local-pages";

const page = localPages["peintre-carhaix-plouguer"];

export const metadata: Metadata = createMetadata({
  title: "Peintre a Carhaix-Plouguer | Artisan peinture interieure et exterieure",
  description: page.description,
  path: `/${page.slug}`,
  keywords: page.keywords,
  noindex: isLocalPageNoindex(page.slug),
});

export default function PeintreCarhaixPage() {
  return (
    <PageShell>
      <LocalSeoPage page={page} />
    </PageShell>
  );
}
