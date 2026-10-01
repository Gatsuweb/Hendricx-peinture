# Publication des pages SEO locales

Le projet contient quatre pages locales. Leur publication progressive est pilotée dans `app/seo.ts` :

- `publishedLocalSlugs` : pages indexables, présentes dans le sitemap et les liens internes ;
- `scheduledLocalSlugs` : pages accessibles, mais en `noindex` et absentes du sitemap ;
- `localPagePublicationDates` : calendrier éditorial de référence.

## Calendrier en cours

| Page | Date | État |
| --- | --- | --- |
| `/peintre-carhaix-plouguer` | 1er octobre 2026 | Publiée |
| `/peintre-rostrenen` | 8 octobre 2026 | Planifiée, encore en `noindex` |
| `/peintre-gourin` | À définir | Brouillon |
| `/peintre-huelgoat` | À définir | Brouillon |

## Mise en ligne d'une page planifiée

1. Relire les éléments locaux et ne conserver que les réalisations et témoignages vérifiables.
2. Déplacer le slug de `scheduledLocalSlugs` vers `publishedLocalSlugs`.
3. Ajouter un lien interne pertinent, notamment dans le pied de page si la zone doit y apparaître.
4. Vérifier la balise robots et la présence de l'URL dans `/sitemap.xml`.
5. Lancer `npm.cmd run lint` puis `npm.cmd run build`.
6. Déployer et demander l'indexation dans Google Search Console.

Une seule nouvelle page locale doit être rendue indexable à la fois. Pour la séquence actuelle, Rostrenen ne doit pas être publiée avant le 8 octobre 2026.
