# Publication des pages SEO locales

Le projet contient actuellement 4 pages locales :

- `/peintre-carhaix-plouguer`
- `/peintre-rostrenen`
- `/peintre-gourin`
- `/peintre-huelgoat`

La publication progressive est pilotee dans `app/seo.ts` :

- `publishedLocalSlugs` : pages indexables, ajoutees au sitemap et affichees dans les liens internes.
- `scheduledLocalSlugs` : pages accessibles techniquement, mais en `noindex` et absentes du sitemap.

Au signal de publication, toutes les deux semaines :

1. Deplacer le slug concerne de `scheduledLocalSlugs` vers `publishedLocalSlugs`.
2. Verifier que la page n'affiche plus de mention "planifiee" dans ses textes et FAQ.
3. Lancer `npm.cmd run lint`.
4. Lancer `npm.cmd run build`.
5. Deployer.

Ordre recommande :

1. `peintre-gourin`
2. `peintre-huelgoat`

Ne pas publier deux pages locales en meme temps si l'objectif est une cadence progressive toutes les deux semaines.
