import { scheduledLocalSlugs } from "./seo";

export type LocalPageData = {
  slug: string;
  city: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  landmarks: string;
  housing: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  nearby: string[];
  gallery: Array<{ src: string; alt: string; caption: string }>;
  reviews: Array<{ quote: string; author: string; context: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const localPages: Record<string, LocalPageData> = {
  "peintre-carhaix-plouguer": {
    slug: "peintre-carhaix-plouguer",
    city: "Carhaix-Plouguer",
    title: "Peintre a Carhaix-Plouguer",
    description:
      "Hendricx Peinture intervient a Carhaix-Plouguer pour peinture interieure, exterieure, renovation de maisons bretonnes et fresques murales sur mesure.",
    keywords: [
      "peintre carhaix",
      "peintre carhaix-plouguer",
      "artisan peintre carhaix",
      "entreprise peinture carhaix",
      "peintre interieur carhaix",
      "peintre exterieur carhaix",
    ],
    intro:
      "Hendricx Peinture accompagne les particuliers, commerces et lieux professionnels de Carhaix-Plouguer pour des travaux de peinture soignes, de la renovation interieure aux fresques murales artistiques.",
    landmarks:
      "Autour du centre-ville, de la gare, des quartiers proches du canal de Nantes a Brest et des axes vers Plouguer, Cleden-Poher ou Poullaouen, les batiments melangent maisons de ville, pavillons, longeres renovees et locaux commerciaux.",
    housing:
      "A Carhaix, les chantiers demandent souvent une vraie attention aux murs anciens, aux supports qui ont travaille avec l'humidite et aux pieces exposees aux variations du climat du Centre Bretagne.",
    sections: [
      {
        title: "Peinture interieure a Carhaix-Plouguer",
        body: [
          "Une peinture interieure reussie a Carhaix ne se limite pas a appliquer une teinte. Dans beaucoup de maisons du secteur, les murs ont connu plusieurs couches, des reprises localisees, parfois des traces d'humidite ou de petits mouvements du support. Avant de parler couleur, Hendricx Peinture verifie l'etat des fonds, les anciennes peintures, les fissures fines, les zones poudreuses et la lumiere naturelle de chaque piece. Cette preparation permet d'obtenir un rendu net dans un salon, une chambre, une cage d'escalier ou une entree tres sollicitee.",
          "Le choix des finitions est adapte a l'usage : mat profond pour une ambiance douce, velours pour une piece de vie, satin lessivable pour une cuisine, une circulation ou une location. Dans les interieurs proches du centre de Carhaix, ou l'on trouve aussi bien des maisons anciennes que des renovations recentes, la precision des raccords, des angles et des plafonds fait souvent la difference. L'objectif est simple : un chantier propre, un rendu durable et une couleur qui respecte le caractere du lieu.",
        ],
      },
      {
        title: "Peinture exterieure et protection des facades",
        body: [
          "Le climat du Centre Bretagne impose une vraie rigueur pour les peintures exterieures. Pluie, vent, mousses, alternance d'humidite et de periodes plus seches fragilisent les volets, portails, boiseries, murets et facades. A Carhaix-Plouguer, un bon resultat depend d'abord du diagnostic : support farineux, ancienne peinture qui s'ecaille, bois grise, microfissures ou zones exposees plein ouest ne demandent pas le meme traitement.",
          "Hendricx Peinture intervient avec une logique de protection autant que d'esthetique. Nettoyage, egrenage, impression, choix d'une peinture adaptee, respect des temps de sechage : chaque etape compte pour eviter une degradation rapide. Sur les maisons bretonnes, les longeres renovees et les extensions plus contemporaines autour de Carhaix, l'enjeu est de garder une facade harmonieuse tout en renforcant la tenue des supports face aux conditions locales.",
        ],
      },
      {
        title: "Renovation de longeres et maisons du Poher",
        body: [
          "Les longeres et maisons anciennes autour de Carhaix ont souvent des murs epais, des enduits heterogenes et des pieces ou la gestion de l'humidite reste essentielle. Une renovation peinture doit respecter cette realite. Recouvrir trop vite un support mal prepare peut enfermer les defauts, marquer les reprises ou creer des cloques. L'approche de Hendricx Peinture consiste a observer le batiment avant de proposer une finition : nature du mur, ventilation, exposition, ancien enduit, traces de salpetre ou raccords recents.",
          "Cette lecture du bati permet de choisir les bons produits et la bonne methode. Dans une piece de vie renovee, une cuisine ouverte, une chambre sous rampant ou une entree de longere, la peinture doit valoriser la pierre, le bois et les volumes sans donner un aspect artificiel. Les teintes sobres, les blancs casses, les verts profonds ou les nuances minerales fonctionnent particulierement bien dans les interieurs du Poher quand ils sont poses avec precision.",
        ],
      },
      {
        title: "Fresques murales et decoration artistique",
        body: [
          "Carhaix-Plouguer possede une identite culturelle forte, entre centre historique, vie associative, commerces, musique et evenements qui attirent bien au-dela du secteur. Une fresque murale peut prolonger cette energie dans un commerce, un espace d'accueil, une maison familiale ou un lieu de travail. Hendricx Peinture cree des compositions sur mesure, pensees pour l'architecture du mur, la lumiere, les couleurs deja presentes et l'histoire que le client souhaite raconter.",
          "La fresque n'est pas un decor plaque. Elle doit tenir compte des proportions, des passages, de la distance de lecture et de l'ambiance voulue. Une creation abstraite dans un salon, un motif identitaire dans une boutique ou un decor plus doux dans une chambre d'enfant ne suivent pas la meme logique. Le travail se construit par etapes : intention, croquis, choix chromatique, preparation du support, realisation et finition.",
        ],
      },
      {
        title: "Pourquoi choisir Hendricx Peinture pres de Carhaix",
        body: [
          "Faire appel a un artisan peintre local permet de gagner en justesse. Les contraintes des maisons de Carhaix, de Plouguer, de Cleden-Poher ou de Poullaouen ne sont pas celles d'un interieur standard. Les murs respirent differemment, les facades subissent un climat humide, et les attentes varient entre renovation familiale, mise en valeur d'un bien ou creation artistique. Hendricx Peinture apporte une approche precise, a la fois technique et sensible.",
          "Le chantier est pense pour limiter les nuisances : protection des sols, organisation des pieces, preparation soignee, nettoyage, conseils sur les couleurs et communication claire avant intervention. Cette exigence sert directement la qualite finale. Une peinture bien preparee vieillit mieux, reste plus lisible dans le temps et evite les reprises prematurees. Pour un devis a Carhaix-Plouguer, le premier rendez-vous permet de cadrer les surfaces, les contraintes et le niveau de finition attendu.",
        ],
      },
      {
        title: "Intervention autour de Carhaix-Plouguer",
        body: [
          "Depuis Paule, Hendricx Peinture se deplace facilement vers Carhaix-Plouguer et les communes voisines : Cleden-Poher, Motreff, Poullaouen, Mael-Carhaix, Glomel, Treogan ou Callac selon la nature du projet. Cette proximite facilite les visites techniques, les ajustements de planning et les echanges avant devis. Elle permet aussi de mieux anticiper les contraintes propres aux chantiers du Centre Bretagne : accessibilite, temps de sechage, saison, ventilation et humidite.",
          "Les demandes les plus frequentes concernent la remise en peinture d'une piece de vie, la renovation complete d'un interieur, les finitions apres travaux, les boiseries exterieures, les facades et les projets muraux personnalises. Pour chaque chantier, la priorite reste la meme : comprendre le lieu avant d'intervenir, proposer une solution realiste, puis executer avec soin.",
        ],
      },
    ],
    nearby: ["Cleden-Poher", "Motreff", "Poullaouen", "Mael-Carhaix", "Glomel"],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
        alt: "Peinture interieure soignee dans une maison a Carhaix-Plouguer",
        caption: "Finition mate et preparation des murs pour une piece de vie proche de Carhaix.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw",
        alt: "Enduit mineral et renovation interieure autour de Carhaix",
        caption: "Travail de matiere pour valoriser les volumes d'une renovation en Centre Bretagne.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABtvKqmQHN6ZMgVE5FUR6lH0cfaBb-KU6jxn_JSmTOcR0N76qOcTZw7cHKx7ZzoS2vBP_jvApyTaEr8WCW-GNxoqGZwUydb0wT5XMY-1BalcxPv87eEC0AFS7FJz8PtxypUY0lN5Wx7TOC2V58EI3mrq_vOinjXbSYrF9gSzrUurTy7ULeCbY0Y7QMn2I4aiZD2jrZYYsqlvfmesNrjxbjoCMX2DEdWWWv_Nvvw2zpqdn65VUL5iX4SWb9buzgptGpxxeWuFasT-o",
        alt: "Fresque murale artistique pour un projet a Carhaix-Plouguer",
        caption: "Creation murale sur mesure pour donner une identite forte a un espace.",
      },
    ],
    reviews: [
      {
        quote:
          "Le chantier a ete tres bien protege et les finitions sont nettes. Les conseils de couleurs ont vraiment change la piece.",
        author: "Client particulier",
        context: "Renovation interieure a Carhaix-Plouguer",
      },
      {
        quote:
          "Approche serieuse sur les supports anciens, avec des explications claires avant le devis.",
        author: "Proprietaire de maison",
        context: "Maison ancienne secteur Poher",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous rapidement a Carhaix-Plouguer ?",
        answer:
          "Oui, les visites de devis sont possibles a Carhaix-Plouguer et dans les communes proches selon le planning et la nature des travaux.",
      },
      {
        question: "Pouvez-vous traiter des murs anciens ou humides ?",
        answer:
          "Oui. Le support est verifie avant travaux afin d'identifier humidite, fissures, anciennes couches et besoin de preparation specifique.",
      },
      {
        question: "Realisez-vous des fresques pour les commerces de Carhaix ?",
        answer:
          "Oui. Les fresques peuvent etre concues pour une boutique, un accueil, un restaurant, un bureau ou une maison particuliere.",
      },
    ],
  },
  "peintre-rostrenen": {
    slug: "peintre-rostrenen",
    city: "Rostrenen",
    title: "Peintre a Rostrenen",
    description:
      "Artisan peintre a Rostrenen : peinture interieure, exterieure, renovation de longere, decoration murale et fresque artistique en Centre Bretagne.",
    keywords: ["peintre rostrenen", "artisan peintre rostrenen", "renovation rostrenen", "peinture centre bretagne"],
    intro:
      "Hendricx Peinture intervient a Rostrenen pour redonner de la tenue aux interieurs, proteger les exterieurs et creer des fresques murales adaptees aux maisons, commerces et lieux de vie du secteur.",
    landmarks:
      "Rostrenen se situe au coeur du Centre Bretagne, a proximite du canal, de la campagne vallonnee et des routes vers Glomel, Plouguernevel, Mael-Carhaix et Gouarec.",
    housing:
      "Le parc local alterne maisons de bourg, pavillons, batiments agricoles transformes, longeres et interieurs renoves ou la preparation des murs conditionne la qualite finale.",
    sections: [
      {
        title: "Un artisan peintre pour les interieurs de Rostrenen",
        body: [
          "A Rostrenen, beaucoup de projets de peinture partent d'un besoin tres concret : rafraichir une piece sombre, moderniser une maison avant installation, finir une renovation ou harmoniser plusieurs volumes apres des travaux. Hendricx Peinture commence par lire l'espace. Orientation des fenetres, hauteur sous plafond, etat des enduits, traces d'anciennes fixations, fissures fines ou differences d'absorption influencent le resultat. Une peinture interieure durable repose sur cette preparation invisible.",
          "Les maisons du secteur peuvent presenter des murs irreguliers, surtout dans les batiments anciens ou les pieces ayant connu plusieurs renovations. Les reprises sont alors traitees avec soin pour eviter les marques sous lumiere rasante. La finition est choisie selon l'usage : mat pour un rendu calme, velours pour une bonne resistance, satin pour les zones plus exposees. Cette approche convient aussi bien aux maisons de bourg qu'aux longeres autour de Rostrenen.",
        ],
      },
      {
        title: "Renovation interieure en Centre Bretagne",
        body: [
          "Renover un interieur a Rostrenen implique souvent de composer avec l'humidite du climat breton, des murs epais et des pieces qui ventilent plus ou moins bien. La peinture ne doit pas masquer un probleme, elle doit accompagner un support sain. Avant intervention, Hendricx Peinture verifie les fonds et conseille sur les corrections utiles : lessivage, poncage, rebouchage, impression adaptee, reprise d'enduit ou choix d'une finition plus respirante selon le cas.",
          "Dans une longere renovee, une maison familiale ou un logement locatif, les attentes ne sont pas identiques. Certains clients recherchent une ambiance sobre et lumineuse, d'autres veulent une couleur plus affirmee pour structurer une piece. Le role de l'artisan consiste a relier l'envie esthetique a la realite technique. C'est ce qui permet d'obtenir un resultat propre, coherent et durable, sans surprise apres sechage.",
        ],
      },
      {
        title: "Peinture exterieure, boiseries et facades",
        body: [
          "Les exterieurs de Rostrenen subissent des conditions changeantes : pluie reguliere, vent, mousses, projections et variations de temperature. Les volets, portails, portes de garage, bardages et facades demandent donc une preparation rigoureuse. Une peinture exterieure qui tient dans le temps commence par un support propre, sec, adherent et compatible avec le produit choisi.",
          "Hendricx Peinture adapte la methode au support : bois a degriser ou poncer, ancienne peinture a egrener, facade a nettoyer, fissures a reprendre, impression a appliquer. L'objectif n'est pas seulement de changer une couleur, mais de proteger le materiau. Sur les maisons autour de Rostrenen, Glomel ou Plouguernevel, cette exigence est essentielle pour eviter l'ecaillement rapide et conserver une facade soignee.",
        ],
      },
      {
        title: "Decoration murale et fresques personnalisees",
        body: [
          "Une fresque murale a Rostrenen peut transformer un mur d'accueil, une cage d'escalier, une piece de vie ou un espace professionnel. Le territoire possede une identite rurale et culturelle forte ; une creation murale peut s'en inspirer sans tomber dans le decor attendu. Hendricx Peinture travaille la composition, les couleurs et la matiere pour que la fresque s'integre naturellement au lieu.",
          "Le projet peut etre discret, graphique, abstrait ou plus narratif. Il commence par un echange sur l'ambiance, les contraintes et la place du mur dans le quotidien. La preparation reste aussi importante que pour une peinture classique : un support mal prepare fragilise la creation. Une fois le fond stabilise, la fresque est realisee avec une attention particuliere aux raccords, aux lignes et a la lecture de l'ensemble.",
        ],
      },
      {
        title: "Pourquoi choisir Hendricx Peinture a Rostrenen",
        body: [
          "Choisir Hendricx Peinture, c'est choisir une approche qui ne separe pas la technique du rendu visuel. Un chantier de peinture reussi doit etre propre pendant les travaux, lisible dans le devis et durable apres reception. Les protections, les temps de sechage, l'ordre des pieces et les choix de finition sont expliques avant de commencer afin que le client sache comment le chantier va se derouler.",
          "Cette methode convient aux renovations completes comme aux interventions plus ciblees. Elle est particulierement utile dans le bati du Centre Bretagne, ou les supports sont rarement parfaitement standards. A Rostrenen, l'enjeu est souvent de respecter le caractere d'une maison tout en lui apportant de la lumiere et de la nettete. Le resultat attendu : une peinture qui valorise l'espace sans l'aplatir.",
        ],
      },
      {
        title: "Zone d'intervention autour de Rostrenen",
        body: [
          "Depuis Paule, les deplacements vers Rostrenen sont adaptes aux visites de devis et aux chantiers dans les communes voisines. Hendricx Peinture peut intervenir vers Glomel, Mael-Carhaix, Plouguernevel, Gouarec, Bonen ou les hameaux proches selon le calendrier. Cette zone de travail permet de suivre les projets avec souplesse et de revenir facilement pour ajuster un point technique si necessaire.",
          "Les demandes concernent aussi bien des pieces interieures que des facades, des boiseries, des finitions apres travaux ou des creations murales. Pour obtenir un devis, le plus efficace est de decrire le lieu, les surfaces approximatives, l'etat des supports et l'objectif recherche. Une visite permet ensuite de valider les contraintes et de proposer une solution coherente.",
        ],
      },
    ],
    nearby: ["Glomel", "Mael-Carhaix", "Plouguernevel", "Gouarec", "Bonen"],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw",
        alt: "Renovation interieure et finition murale a Rostrenen",
        caption: "Preparation minutieuse pour un rendu sobre dans une maison du Centre Bretagne.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
        alt: "Peinture decorative mate dans un interieur a Rostrenen",
        caption: "Teinte profonde et finition adaptee a une piece de vie sollicitee.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY2veYLDhzNiFrE5y9DioL4vTdxXl5BZlEJOKbpjzT7kFYsrDOk6nhoCNIJnGcWAyq7KUBi1dbtawp2QMo3SwIGBZcVawLP5lgPZ6hhfcoY0z2zxym5Yz-RpVFRYDPbdxmQiRE0CjmrW5LRauPPtJ1HKOwr6KJfguM4obtCIlwOQ8-SbZsow6YXzCrRzIs-Gpx9RoJj6g_1RARAaOGfwbKZKgTgMz-J9TO7Zl93WpHOnwUwyp_laumW_Qlt7OHm4Mw_FwX7RWq7Og",
        alt: "Fresque murale personnalisee autour de Rostrenen",
        caption: "Composition murale pensee pour l'usage et la lumiere du lieu.",
      },
    ],
    reviews: [
      {
        quote:
          "Travail propre et precis. Les reprises de murs anciens ont ete faites avant peinture, ce qui se voit dans le resultat.",
        author: "Habitant de Rostrenen",
        context: "Renovation de piece de vie",
      },
      {
        quote:
          "Bonne ecoute sur l'ambiance souhaitee et conseils utiles pour choisir une finition plus durable.",
        author: "Client particulier",
        context: "Peinture interieure pres de Rostrenen",
      },
    ],
    faqs: [
      {
        question: "Hendricx Peinture intervient-il a Rostrenen et autour ?",
        answer:
          "Oui, les interventions sont possibles a Rostrenen, Glomel, Mael-Carhaix, Plouguernevel et dans les communes proches selon le projet.",
      },
      {
        question: "Quelle peinture choisir pour une maison humide ?",
        answer:
          "Le choix depend du diagnostic. Il faut d'abord comprendre l'origine de l'humidite puis utiliser une preparation et une finition compatibles.",
      },
      {
        question: "Pouvez-vous peindre une longere en renovation ?",
        answer:
          "Oui, les longeres demandent une preparation particuliere des murs, des enduits et des finitions pour respecter le bati ancien.",
      },
    ],
  },
  "peintre-gourin": {
    slug: "peintre-gourin",
    city: "Gourin",
    title: "Peintre a Gourin",
    description:
      "Peintre a Gourin pour renovation interieure, peinture exterieure, decoration murale et fresque personnalisee. Page planifiee pour publication mois 2.",
    keywords: ["peintre gourin", "artisan peintre gourin", "renovation gourin", "peinture exterieure gourin"],
    intro:
      "Hendricx Peinture prepare son intervention SEO locale a Gourin avec une page dediee aux maisons du secteur, aux renovations du bati ancien et aux besoins de peinture durable en climat breton.",
    landmarks:
      "Gourin, porte du Morbihan interieur, relie le Centre Bretagne aux Montagnes Noires, avec un habitat fait de maisons de bourg, longeres, pavillons et anciennes fermes.",
    housing:
      "Les supports y sont souvent exposes a l'humidite, aux vents et aux ecarts de temperature, ce qui impose une preparation attentive en interieur comme en exterieur.",
    sections: [
      {
        title: "Peinture interieure pour maisons de Gourin",
        body: [
          "A Gourin, les projets de peinture interieure concernent souvent des maisons familiales, des longeres renovees ou des logements qui ont besoin d'etre remis au propre avant une nouvelle occupation. Les murs peuvent etre irreguliers, les plafonds marques par le temps et les anciennes peintures parfois brillantes ou mal adherentes. Hendricx Peinture aborde ces chantiers avec une logique de preparation d'abord : proteger, nettoyer, poncer, reboucher, imprimer, puis seulement appliquer la finition.",
          "Le choix des couleurs tient compte de la lumiere du secteur, parfois douce et changeante, et de la presence frequente du bois, de la pierre ou de sols fonces dans les maisons bretonnes. Une teinte trop froide peut durcir une piece ; une nuance bien choisie peut au contraire apporter de la chaleur sans perdre en sobriete. L'objectif est d'obtenir un interieur net, confortable et durable.",
        ],
      },
      {
        title: "Renovation de longeres et batiments anciens",
        body: [
          "Le secteur de Gourin compte de nombreuses longeres et maisons anciennes qui demandent une attention specifique. Les murs epais, les enduits anciens, les reprises successives et les zones sensibles a l'humidite ne supportent pas les solutions rapides. Une renovation peinture doit commencer par comprendre le support : est-il sain, respirant, regulier, bloque par une ancienne couche ou fragilise par des infiltrations anciennes ?",
          "Hendricx Peinture adapte les produits et la preparation a cette lecture. Dans une longere, une peinture doit respecter le caractere du bati tout en apportant de la clarte. Les finitions minerales, les mats profonds, les blancs casses et les couleurs naturelles peuvent accompagner la pierre et les poutres sans donner un rendu trop neuf. Ce travail de nuance est essentiel pour conserver l'authenticite du lieu.",
          "Le travail peut aussi concerner les dependances transformees, les anciennes pieces agricoles devenues salons ou ateliers, et les etages dont les supports ont ete repris partiellement au fil des annees. Dans ces volumes, il faut souvent harmoniser des zones neuves et anciennes pour eviter les differences visibles apres peinture.",
        ],
      },
      {
        title: "Exterieurs exposes au climat des Montagnes Noires",
        body: [
          "La peinture exterieure autour de Gourin doit composer avec un climat humide et parfois venteux. Les volets, portails, bardages, portes et facades prennent rapidement les marques de l'exposition. Avant toute mise en peinture, il faut evaluer l'adherence, l'encrassement, les mousses, les anciennes couches et le niveau d'humidite du support. Un produit performant pose sur une base mal preparee ne donnera pas un resultat durable.",
          "Les interventions exterieures sont donc planifiees avec prudence selon la meteo et le temps de sechage. Le travail peut inclure nettoyage, poncage, egrenage, impression et application de finitions adaptees. Pour une maison proche de Gourin, Le Saint, Roudouallec ou Langonnet, cette rigueur permet de proteger les supports tout en ameliorant l'aspect general de la facade.",
        ],
      },
      {
        title: "Fresques murales et decoration personnalisee",
        body: [
          "Une fresque murale a Gourin peut donner une identite forte a un espace prive ou professionnel. Dans un commerce, elle aide a creer une ambiance memorisable. Dans une maison, elle peut structurer un mur, accompagner un escalier ou transformer une piece de vie. Hendricx Peinture concilie l'approche artistique et les contraintes de chantier : le mur doit etre propre, stable et adapte a la creation.",
          "Chaque projet commence par un echange. Le style peut etre abstrait, graphique, vegetal, mineral ou inspire du territoire sans devenir caricatural. Les couleurs sont choisies pour fonctionner avec la lumiere, le mobilier et les volumes. Cette attention evite l'effet decoratif passager et permet a la fresque de rester juste dans le temps.",
        ],
      },
      {
        title: "Un chantier propre et lisible",
        body: [
          "Pour un client a Gourin, la qualite d'un artisan peintre se voit autant pendant les travaux qu'a la reception. La protection des sols, des menuiseries et du mobilier, l'organisation des etapes et la proprete quotidienne changent l'experience du chantier. Hendricx Peinture privilegie une methode claire, avec un devis qui distingue preparation, produits, surfaces et niveau de finition.",
          "Cette transparence permet de comparer autre chose qu'un prix global. Une piece avec beaucoup de reprises, un plafond abime ou des boiseries anciennes ne demande pas le meme temps qu'un mur neuf. En expliquant les etapes, l'artisan aide le client a comprendre ou se situe la valeur du travail et pourquoi la preparation conditionne la duree de vie du resultat.",
        ],
      },
      {
        title: "Intervention autour de Gourin",
        body: [
          "La page Gourin est preparee pour une publication progressive. Une fois activee, elle ciblera Gourin et les communes proches comme Le Saint, Langonnet, Roudouallec, Spezet ou Plouray selon les demandes. Cette zone complete naturellement les interventions en Centre Bretagne, entre Carhaix, Rostrenen et les limites du Morbihan interieur.",
          "Les demandes attendues concernent la renovation d'interieurs, les finitions apres travaux, la remise en peinture de maisons anciennes, les boiseries exterieures et les projets de fresques. Le contact reste le meme : decrire le lieu, les surfaces, les supports et l'objectif, puis organiser une visite technique lorsque le projet entre dans la zone et le planning.",
          "Cette preparation anticipe aussi les recherches locales des habitants qui ne cherchent pas seulement un peintre, mais un interlocuteur capable de comprendre les contraintes des maisons du pays de Gourin : acces parfois etroits, murs anciens, pieces fraiches, delais lies a la meteo et besoin de finitions sobres.",
        ],
      },
    ],
    nearby: ["Le Saint", "Langonnet", "Roudouallec", "Spezet", "Plouray"],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
        alt: "Peinture interieure pour maison ancienne a Gourin",
        caption: "Finition profonde pour un interieur de maison ancienne dans le pays de Gourin.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw",
        alt: "Renovation de longere bretonne autour de Gourin",
        caption: "Travail de support et rendu mineral pour accompagner pierre et boiseries.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABtvKqmQHN6ZMgVE5FUR6lH0cfaBb-KU6jxn_JSmTOcR0N76qOcTZw7cHKx7ZzoS2vBP_jvApyTaEr8WCW-GNxoqGZwUydb0wT5XMY-1BalcxPv87eEC0AFS7FJz8PtxypUY0lN5Wx7TOC2V58EI3mrq_vOinjXbSYrF9gSzrUurTy7ULeCbY0Y7QMn2I4aiZD2jrZYYsqlvfmesNrjxbjoCMX2DEdWWWv_Nvvw2zpqdn65VUL5iX4SWb9buzgptGpxxeWuFasT-o",
        alt: "Fresque murale personnalisee a Gourin",
        caption: "Projet de decoration murale pour donner une identite a un espace.",
      },
    ],
    reviews: [
      {
        quote:
          "Les contraintes d'humidite ont ete prises au serieux avant la mise en peinture, avec un rendu final tres propre.",
        author: "Proprietaire de longere",
        context: "Projet prepare pour Gourin",
      },
      {
        quote:
          "Conseils clairs sur les finitions et sur les couleurs adaptees a une maison peu lumineuse.",
        author: "Client particulier",
        context: "Interieur en Centre Bretagne",
      },
    ],
    faqs: [
      {
        question: "La page peintre a Gourin est-elle publiee ?",
        answer:
          "Elle est preparee techniquement mais placee en noindex pour une activation progressive au mois 2.",
      },
      {
        question: "Quels travaux sont prevus autour de Gourin ?",
        answer:
          "Peinture interieure, peinture exterieure, renovation de maisons anciennes, boiseries et fresques murales sur mesure.",
      },
      {
        question: "Pourquoi traiter l'humidite avant peinture ?",
        answer:
          "Parce qu'une peinture posee sur un support humide ou instable peut cloquer, marquer ou se degrader rapidement.",
      },
    ],
  },
  "peintre-huelgoat": {
    slug: "peintre-huelgoat",
    city: "Huelgoat",
    title: "Peintre a Huelgoat",
    description:
      "Peintre a Huelgoat pour maisons anciennes, renovation interieure, peinture exterieure et fresques murales. Page planifiee pour publication mois 2.",
    keywords: ["peintre huelgoat", "artisan peintre huelgoat", "renovation huelgoat", "fresque murale bretagne"],
    intro:
      "Hendricx Peinture prepare une page locale dediee a Huelgoat, a son environnement forestier, a son bati ancien et aux travaux de peinture adaptes a un climat humide.",
    landmarks:
      "Huelgoat est marque par sa foret, ses chaos rocheux, son lac et un habitat touristique ou residentiel qui demande souvent un soin particulier dans les finitions.",
    housing:
      "Entre maisons de bourg, residences secondaires, gites, longeres et habitations proches de la foret, les supports peuvent etre soumis a l'humidite, aux mousses et a une lumiere interieure parfois tamisee.",
    sections: [
      {
        title: "Peinture interieure dans les maisons de Huelgoat",
        body: [
          "A Huelgoat, la peinture interieure doit souvent composer avec des ambiances singulieres : maisons proches de la foret, pieces peu lumineuses, murs anciens et volumes parfois atypiques. Hendricx Peinture aborde ces interieurs avec une attention particuliere a la lumiere. Une couleur qui fonctionne dans une piece tres ouverte peut devenir trop dense dans une maison ombragee. Le choix des teintes et des finitions doit donc tenir compte du lieu, pas seulement d'un nuancier.",
          "La preparation reste centrale. Les murs peuvent porter des traces d'humidite ancienne, de condensation, d'anciennes peintures ou de petites fissures. Avant d'appliquer une finition, les supports sont verifies, repris et imprimes si necessaire. Cette methode evite les marques et permet d'obtenir un rendu propre dans une maison principale, un gite, une residence secondaire ou un local recevant du public.",
        ],
      },
      {
        title: "Renovation de gites et residences secondaires",
        body: [
          "Le secteur de Huelgoat attire des residents, des visiteurs et des proprietaires de gites qui souhaitent conserver le charme local tout en proposant des interieurs confortables. Une renovation peinture doit alors etre solide, facile a entretenir et coherente avec l'ambiance du batiment. Les pieces de passage, les chambres, les salles communes et les escaliers n'ont pas les memes contraintes.",
          "Hendricx Peinture conseille des finitions adaptees a l'usage : velours ou satin dans les zones sollicitees, mat plus enveloppant dans les pieces calmes, teintes naturelles pour accompagner la pierre, le bois et les vues sur la vegetation. Le but est d'ameliorer l'experience des occupants tout en limitant l'entretien premature. Dans un gite, une peinture bien choisie est aussi un investissement de presentation.",
          "Les proprietaires de residences secondaires doivent aussi penser a l'occupation intermittente. Une maison fermee une partie de l'annee ne reagit pas comme un logement chauffe en continu. Le choix des produits, la ventilation et la preparation des zones sensibles prennent alors une importance particuliere.",
        ],
      },
      {
        title: "Exterieurs exposes a la foret et a l'humidite",
        body: [
          "Autour de Huelgoat, les exterieurs subissent une humidite reguliere, la presence de mousses et parfois une exposition ombragee qui ralentit le sechage des supports. Les facades, boiseries, volets et portails demandent donc une preparation serieuse. Nettoyer, decontaminer si besoin, poncer, egrener et appliquer une impression adaptee sont des etapes indispensables pour une tenue correcte.",
          "Le calendrier compte aussi. Une intervention exterieure doit etre prevue selon la meteo, l'exposition et le temps necessaire au support pour revenir a un etat favorable. Hendricx Peinture evite les applications precipitees qui compromettent la durabilite. Cette prudence est particulierement importante pour les maisons proches de la foret, du lac ou des zones ombragees.",
        ],
      },
      {
        title: "Fresques murales inspirees par un lieu fort",
        body: [
          "Huelgoat offre un imaginaire puissant : foret, roche, eau, chemins, lumiere filtree. Une fresque murale peut s'inspirer de cet environnement sans le copier litteralement. Hendricx Peinture peut creer une composition abstraite, mineralisee, vegetale ou graphique, adaptee a une maison, un gite, un espace d'accueil ou un commerce. Le travail part toujours du mur et de son usage.",
          "Une fresque reussie doit rester lisible a plusieurs distances et ne pas saturer l'espace. Les couleurs sont choisies pour dialoguer avec les materiaux existants. La preparation du fond est traitee avec la meme exigence qu'une renovation classique, car la creation artistique doit durer. Cette approche permet d'obtenir une decoration murale personnelle, mais integree au lieu.",
        ],
      },
      {
        title: "Choisir un artisan peintre pour un bati sensible",
        body: [
          "Le bati de Huelgoat demande souvent de la nuance. Il peut etre tentant de couvrir rapidement un mur marque par l'age ou l'humidite, mais la peinture revele toujours les defauts mal traites. Hendricx Peinture privilegie le diagnostic, la preparation et le conseil. Cette exigence vaut pour une petite piece comme pour une renovation complete.",
          "L'artisan prend en compte la destination du bien, la frequence d'occupation, la ventilation, les contraintes de delai et le rendu souhaite. Dans une residence secondaire, il faut parfois penser a la tenue dans le temps malgre les periodes sans chauffage constant. Dans une maison principale, le confort quotidien et la facilite d'entretien priment. Le devis doit integrer ces realites.",
        ],
      },
      {
        title: "Intervention autour de Huelgoat",
        body: [
          "Cette page est preparee pour une activation au mois 2. Elle couvrira Huelgoat et les communes proches comme Berrien, Locmaria-Berrien, Scrignac, Poullaouen et Plouye selon les projets. Cette zone complete la presence locale autour de Carhaix-Plouguer et du Centre Bretagne, avec un angle specifique sur les maisons proches de la foret et les lieux touristiques.",
          "Les demandes pourront concerner une renovation interieure, une remise en peinture avant location, des boiseries exterieures, une facade, une cage d'escalier ou une fresque personnalisee. Comme pour les autres secteurs, la premiere etape consiste a comprendre le lieu et ses contraintes avant d'etablir une proposition.",
          "Cette page est construite pour repondre aux recherches des habitants et proprietaires qui veulent un peintre connaissant le contexte de Huelgoat : humidite de sous-bois, maisons en pierre, gites a remettre au propre, facades exposees et interieurs ou la couleur doit apporter de la lumiere sans trahir le caractere local.",
        ],
      },
    ],
    nearby: ["Berrien", "Locmaria-Berrien", "Scrignac", "Poullaouen", "Plouye"],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw",
        alt: "Renovation interieure pour maison proche de Huelgoat",
        caption: "Finition adaptee aux maisons proches de la foret et aux pieces peu lumineuses.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
        alt: "Peinture mate pour gite ou residence secondaire a Huelgoat",
        caption: "Couleur sobre et entretien facilite pour un lieu regulierement occupe.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY2veYLDhzNiFrE5y9DioL4vTdxXl5BZlEJOKbpjzT7kFYsrDOk6nhoCNIJnGcWAyq7KUBi1dbtawp2QMo3SwIGBZcVawLP5lgPZ6hhfcoY0z2zxym5Yz-RpVFRYDPbdxmQiRE0CjmrW5LRauPPtJ1HKOwr6KJfguM4obtCIlwOQ8-SbZsow6YXzCrRzIs-Gpx9RoJj6g_1RARAaOGfwbKZKgTgMz-J9TO7Zl93WpHOnwUwyp_laumW_Qlt7OHm4Mw_FwX7RWq7Og",
        alt: "Fresque murale inspiree par Huelgoat et son environnement forestier",
        caption: "Creation murale inspiree par la matiere, la lumiere et le paysage local.",
      },
    ],
    reviews: [
      {
        quote:
          "Une vraie attention au contexte de la maison, notamment aux murs froids et aux zones plus humides.",
        author: "Proprietaire pres de Huelgoat",
        context: "Renovation interieure",
      },
      {
        quote:
          "La proposition de couleurs respectait le caractere de la maison sans l'assombrir.",
        author: "Client particulier",
        context: "Maison proche de la foret",
      },
    ],
    faqs: [
      {
        question: "La page peintre a Huelgoat est-elle indexee ?",
        answer:
          "Non, elle est preparee en noindex pour respecter une publication progressive au mois 2.",
      },
      {
        question: "Peut-on peindre une maison humide proche de la foret ?",
        answer:
          "Oui, mais seulement apres diagnostic du support, preparation adaptee et choix d'une finition compatible.",
      },
      {
        question: "Realisez-vous des fresques pour gites ou commerces ?",
        answer:
          "Oui, une fresque peut etre concue pour renforcer l'identite d'un gite, d'un accueil ou d'un commerce local.",
      },
    ],
  },
};

export function isLocalPageNoindex(slug: string) {
  return scheduledLocalSlugs.includes(slug);
}
