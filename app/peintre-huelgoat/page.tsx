import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/LocalSeoPage";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import { isLocalPageNoindex, localPages } from "../local-pages";

const page = localPages["peintre-huelgoat"];

export const metadata: Metadata = createMetadata({
  title: "Peintre a Huelgoat | Peinture, renovation et fresque murale",
  description: page.description,
  path: `/${page.slug}`,
  keywords: page.keywords,
  noindex: isLocalPageNoindex(page.slug),
});

export default function PeintreHuelgoatPage() {
  return (
    <PageShell>
      <LocalSeoPage page={page} />
    </PageShell>
  );
}
