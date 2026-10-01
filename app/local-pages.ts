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
    title: "Peintre à Carhaix-Plouguer",
    description:
      "Artisan peintre à Carhaix-Plouguer pour vos peintures intérieures, rénovations, façades, boiseries et fresques murales. Devis sur visite.",
    keywords: [
      "peintre carhaix",
      "peintre carhaix-plouguer",
      "artisan peintre carhaix",
      "entreprise peinture carhaix",
      "peintre interieur carhaix",
      "peintre exterieur carhaix",
    ],
    intro:
      "Depuis Paule, Hendricx Peinture intervient à Carhaix-Plouguer pour rénover un intérieur, protéger les éléments extérieurs ou créer une fresque sur mesure. Chaque projet commence par l’observation du support et de l’usage réel des pièces.",
    landmarks:
      "Carhaix réunit un centre-ville au patrimoine ancien, des quartiers résidentiels, des locaux professionnels et un territoire rural qui s’étend vers le Poher. Le canal de Nantes à Brest, le secteur de la gare et les axes vers Cléden-Poher ou Poullaouen composent des contextes bâtis très différents.",
    housing:
      "Maisons de ville, pavillons, longères rénovées ou commerces ne demandent ni les mêmes préparations ni les mêmes finitions. La visite sur place sert à vérifier les fonds, la lumière, la ventilation et les zones exposées avant de chiffrer les travaux.",
    sections: [
      {
        title: "Peinture intérieure : préparer avant de décorer",
        body: [
          "Dans un salon, une chambre ou une cage d’escalier, le résultat dépend d’abord de ce qui se trouve sous la peinture. Anciennes couches, petites fissures, reprises d’enduit ou différences d’absorption peuvent rester visibles si elles ne sont pas traitées. Hendricx Peinture contrôle les fonds, protège les zones conservées et prépare les surfaces avant l’application.",
          "La finition est ensuite choisie selon l’usage : un mat pour adoucir un plafond ou une pièce calme, un velours pour une pièce de vie, un satin plus facile à entretenir dans une circulation. Les teintes sont étudiées avec la lumière naturelle, le mobilier et les volumes pour obtenir un ensemble cohérent, plutôt qu’une couleur isolée sur un nuancier.",
        ],
      },
      {
        title: "Rénover une maison ancienne dans le Poher",
        body: [
          "Autour de Carhaix-Plouguer, le bâti ancien présente souvent des murs épais, des enduits de différentes époques et des pièces qui n’ont pas toutes la même ventilation. Avant de repeindre, il faut distinguer un défaut de surface d’un problème d’humidité actif. Une peinture ne doit jamais servir à dissimuler une cause qui demande d’abord une correction adaptée.",
          "Lorsque le support est sain, le travail peut comprendre lessivage, ponçage, rebouchage, reprise d’enduit et impression. Cette progression permet d’harmoniser les zones neuves et anciennes, de limiter les marques en lumière rasante et de conserver le caractère de la maison, notamment lorsqu’elle associe pierre, bois et murs peints.",
        ],
      },
      {
        title: "Façades, volets et boiseries extérieures",
        body: [
          "Pluie, vent et alternance de périodes humides sollicitent les façades, volets, portails et bardages du Centre Bretagne. Un support qui farine, une ancienne peinture qui s’écaille ou un bois grisé demandent des réponses différentes. Le diagnostic détermine le nettoyage, l’égrenage, l’impression et le produit de finition à retenir.",
          "Les travaux extérieurs sont planifiés selon l’exposition et la météo. Le respect du séchage entre les couches compte autant que la teinte choisie : il conditionne l’adhérence et la tenue du système dans le temps.",
        ],
      },
      {
        title: "Fresque murale pour un intérieur ou un commerce",
        body: [
          "L’identité culturelle de Carhaix se prête aux projets visuels singuliers. Une fresque peut donner un point focal à une pièce de vie, rendre un accueil mémorable ou traduire l’univers d’un commerce sans surcharger l’espace.",
          "Le projet se construit à partir du mur, de la distance de lecture, des passages et des couleurs déjà présentes. Après un échange sur l’intention, Hendricx Peinture prépare une direction graphique, ajuste la palette puis réalise la composition sur un support correctement préparé.",
        ],
      },
    ],
    nearby: ["Cléden-Poher", "Motreff", "Poullaouen", "Maël-Carhaix", "Glomel"],
    gallery: [
      {
        src: "/photos/476836935_2078489489256904_6370289537618551027_n.jpg",
        alt: "Exemple de peinture intérieure réalisée par Hendricx Peinture",
        caption: "Finition intérieure et soin des raccords dans une pièce de vie.",
      },
      {
        src: "/photos/480347323_2084649431974243_4394888306244998500_n.jpg",
        alt: "Exemple de travail de matière en rénovation intérieure",
        caption: "Travail de matière pour donner du relief sans alourdir le volume.",
      },
      {
        src: "/photos/661744embeddedImage.jpg",
        alt: "Exemple de fresque murale réalisée par Hendricx Peinture",
        caption: "Création murale sur mesure pensée pour l’architecture du lieu.",
      },
    ],
    reviews: [],
    faqs: [
      {
        question: "Hendricx Peinture se déplace-t-il à Carhaix-Plouguer ?",
        answer:
          "Oui. Les visites de devis sont possibles à Carhaix-Plouguer et dans les communes proches selon la nature du projet et le planning.",
      },
      {
        question: "Pouvez-vous repeindre un mur ancien ou marqué par l’humidité ?",
        answer:
          "Le support est d’abord diagnostiqué. Si l’humidité est active, sa cause doit être traitée avant la peinture. Lorsque le mur est sain, une préparation et une finition compatibles sont proposées.",
      },
      {
        question: "Que faut-il indiquer pour demander un devis ?",
        answer:
          "Précisez la commune, les pièces ou surfaces concernées, l’état apparent des supports et le résultat souhaité. Des photos peuvent aider au premier échange, puis une visite permet de confirmer le chiffrage.",
      },
      {
        question: "Réalisez-vous des fresques pour les commerces de Carhaix ?",
        answer:
          "Oui. Une fresque peut être conçue pour une boutique, un espace d’accueil, un restaurant, un bureau ou une habitation.",
      },
    ],
  },
  "peintre-rostrenen": {
    slug: "peintre-rostrenen",
    city: "Rostrenen",
    title: "Peintre à Rostrenen",
    description:
      "Artisan peintre à Rostrenen pour peinture intérieure, rénovation de bâti ancien, façades, boiseries et fresques murales. Devis sur visite.",
    keywords: [
      "peintre rostrenen",
      "artisan peintre rostrenen",
      "renovation rostrenen",
      "peinture interieur rostrenen",
      "peinture centre bretagne",
    ],
    intro:
      "Hendricx Peinture intervient à Rostrenen et dans le Kreiz Breizh pour préparer les supports, remettre les pièces en couleur, protéger les extérieurs et réaliser des décors muraux adaptés au lieu.",
    landmarks:
      "Rostrenen se trouve au cœur du Pays Fisel, à la croisée du canal de Nantes à Brest et des voies vertes du Centre Bretagne. Le bourg, les quartiers résidentiels et les hameaux voisins réunissent des maisons d’âges et de constructions variés.",
    housing:
      "Maison de bourg, pavillon ou longère ne se rénovent pas de la même manière. La nature des anciens enduits, la ventilation, l’exposition et l’usage des pièces guident la préparation et le choix de la finition.",
    sections: [
      {
        title: "Peinture intérieure pour des pièces faciles à vivre",
        body: [
          "Rafraîchir une pièce, harmoniser plusieurs volumes après travaux ou préparer une maison avant installation commence par un état des lieux. Hendricx Peinture observe les enduits, les anciennes peintures, les fissures fines et les différences d’absorption qui pourraient réapparaître après séchage.",
          "Le choix entre mat, velours et satin dépend de la lumière et de l’entretien attendu. Une entrée, une cuisine ou une location demandent une résistance différente d’une chambre. Cette attention évite les choix purement esthétiques qui vieillissent mal à l’usage.",
        ],
      },
      {
        title: "Rénovation de longères et de murs anciens",
        body: [
          "Dans le Kreiz Breizh, certaines rénovations associent murs épais, reprises récentes et enduits plus anciens. Avant d’appliquer une finition, il faut vérifier que le support est sain et comprendre l’origine d’éventuelles traces d’humidité. Lessivage, ponçage, rebouchage, reprise d’enduit ou impression sont ensuite adaptés au constat.",
          "L’objectif est de retrouver un fond régulier sans effacer le caractère du bâtiment. Les couleurs peuvent apporter de la lumière, souligner une menuiserie ou structurer un grand volume, à condition de rester cohérentes avec la pierre, le bois et la lumière naturelle.",
        ],
      },
      {
        title: "Peinture extérieure et protection des boiseries",
        body: [
          "Les volets, portails, bardages et façades sont exposés à la pluie, au vent et aux variations de température. Leur tenue dépend d’un support propre, sec et adhérent. Une ancienne couche qui s’écaille ou un bois grisé ne peuvent pas être simplement recouverts.",
          "La méthode est ajustée au matériau et à son état : nettoyage, ponçage ou égrenage, reprise ponctuelle, impression puis finition. Les travaux sont positionnés dans une fenêtre météo compatible afin de ne pas compromettre le séchage.",
        ],
      },
      {
        title: "Décoration et fresque murale sur mesure",
        body: [
          "Une fresque peut transformer un mur d’accueil, une cage d’escalier, une chambre ou un espace professionnel. À Rostrenen, elle peut s’inspirer d’une identité, d’une activité ou d’une ambiance sans reproduire un décor convenu.",
          "La composition tient compte des proportions, des passages et de la distance de lecture. Le projet avance par étapes : échange sur l’intention, direction graphique, palette, préparation du fond puis réalisation. Le décor reste ainsi lié à l’usage quotidien du lieu.",
        ],
      },
    ],
    nearby: ["Glomel", "Maël-Carhaix", "Plouguernével", "Gouarec", "Bonen"],
    gallery: [
      {
        src: "/photos/477796924_2078489629256890_7221419132280354026_n.jpg",
        alt: "Exemple de rénovation intérieure réalisée par Hendricx Peinture",
        caption: "Préparation des murs et finition sobre pour un intérieur durable.",
      },
      {
        src: "/photos/480680043_2084649251974261_4842625914116337843_n.jpg",
        alt: "Exemple de peinture décorative mate dans une pièce de vie",
        caption: "Teinte profonde choisie selon la lumière et l’usage de la pièce.",
      },
      {
        src: "/photos/2962805embeddedImage.jpg",
        alt: "Exemple de fresque murale personnalisée par Hendricx Peinture",
        caption: "Composition murale conçue pour dialoguer avec le volume existant.",
      },
    ],
    reviews: [],
    faqs: [
      {
        question: "Hendricx Peinture intervient-il à Rostrenen et autour ?",
        answer:
          "Oui. Les interventions sont possibles à Rostrenen, Glomel, Maël-Carhaix, Plouguernével et dans les communes proches selon le projet et le planning.",
      },
      {
        question: "Quelle peinture choisir pour une maison humide ?",
        answer:
          "Le choix dépend du diagnostic. Il faut d’abord identifier et traiter la cause d’une humidité active, puis utiliser une préparation et une finition compatibles avec le support sain.",
      },
      {
        question: "Pouvez-vous intervenir dans une longère en rénovation ?",
        answer:
          "Oui. Une visite permet de distinguer les supports anciens des reprises neuves et de définir les préparations nécessaires avant la finition.",
      },
      {
        question: "Comment préparer une demande de devis à Rostrenen ?",
        answer:
          "Indiquez l’adresse ou la commune, les surfaces concernées, l’état des murs ou boiseries et le rendu recherché. Des photos facilitent le premier échange avant la visite.",
      },
    ],
  },  "peintre-gourin": {
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
        src: "/photos/6974435embeddedImage.jpg",
        alt: "Peinture interieure pour maison ancienne a Gourin",
        caption: "Finition profonde pour un interieur de maison ancienne dans le pays de Gourin.",
      },
      {
        src: "/photos/715164embeddedImage.jpg",
        alt: "Renovation de longere bretonne autour de Gourin",
        caption: "Travail de support et rendu mineral pour accompagner pierre et boiseries.",
      },
      {
        src: "/photos/311261embeddedImage.jpg",
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
        src: "/photos/477592076_2078489795923540_2799130433770111071_n.jpg",
        alt: "Renovation interieure pour maison proche de Huelgoat",
        caption: "Finition adaptee aux maisons proches de la foret et aux pieces peu lumineuses.",
      },
      {
        src: "/photos/480481780_2084649165307603_7857932999276320151_n.jpg",
        alt: "Peinture mate pour gite ou residence secondaire a Huelgoat",
        caption: "Couleur sobre et entretien facilite pour un lieu regulierement occupe.",
      },
      {
        src: "/photos/830e704a-58d9-4ba1-bd83-2b2384fa5691.jpg",
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
