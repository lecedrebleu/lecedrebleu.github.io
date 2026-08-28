export interface PracticeActivityDetail {
  slug: string;
  title: string;
  leader: string;
  schedule: string;
  audience: string;
  description: string;
  cardDescription: string;
  paragraphs: string[];
  topics?: {
    title: string;
    items: string[];
  };
  afterTopics?: string[];
  closing?: string;
}

export const practiceActivities: PracticeActivityDetail[] = [
  {
    slug: "cours-de-saxophone",
    title: "Cours de saxophone",
    leader: "Clément « Babours » Moret",
    schedule: "Les lundis et mercredis",
    audience: "Tous les niveaux et tous les âges",
    description:
      "Des cours de saxophone adaptés au niveau, aux envies et aux morceaux de chacun.",
    cardDescription:
      "Découvrir l’instrument, reprendre après une pause ou approfondir son jeu : les séances s’adaptent au niveau, aux envies et aux morceaux de chacun. Technique, son, improvisation et plaisir de jouer avancent ensemble.",
    paragraphs: [
      "Envie de découvrir le saxophone, de reprendre après quelques années ou simplement de jouer les morceaux qui vous font vibrer ? Clément « Babours » Moret propose des cours de saxophone au Cèdre bleu de Pont-Croix, ouverts à tous !",
      "Débutant complet ou musicien déjà expérimenté, chacun peut avancer à son rythme dans une ambiance conviviale et détendue. Les cours mêlent apprentissage de l’instrument, technique, musicalité et surtout… plaisir de jouer !",
      "Que vous rêviez de souffler vos premières notes, d’améliorer votre son, d’apprendre à improviser ou de travailler des morceaux que vous aimez, les séances s’adaptent aux envies et aux objectifs de chacun.",
    ],
    closing: "Alors, prêt à faire chanter le saxophone ? Venez essayer !",
  },
  {
    slug: "fanfare-musiques-festives",
    title: "Fanfare & musiques festives",
    leader: "Clément « Babours » Moret",
    schedule: "Un lundi soir sur deux, 19 h 30–21 h",
    audience:
      "Tous niveaux · vents, percussions et instruments à cordes mobiles",
    description:
      "Un atelier pour jouer ensemble et faire vivre un répertoire de musiques entraînantes.",
    cardDescription:
      "Un atelier de pratique collective pour apprendre à jouer ensemble, développer l’écoute et le rythme, et faire vivre un répertoire entraînant dans et hors les murs.",
    paragraphs: [
      "Envie de jouer en groupe, de faire du bruit — mais du joli bruit ! — et surtout de partager le plaisir de la musique ? Cet atelier propose de se retrouver autour d’un répertoire de musiques qui vous souffle dans les oreilles.",
      "L’objectif : apprendre à jouer ensemble, développer l’écoute et le sens du rythme, découvrir des morceaux entraînants et, pourquoi pas, aller faire résonner la musique en dehors des murs du Cèdre bleu !",
      "L’atelier est ouvert aux musicien·nes de tous niveaux et à différents instruments : vents, percussions et instruments à cordes mobiles. Pas besoin d’être virtuose : l’envie de jouer ensemble est le meilleur prérequis.",
    ],
    closing:
      "Venez avec votre instrument, votre bonne humeur et l’envie de partager quelques décibels !",
  },
  {
    slug: "atelier-prepajam",
    title: "Atelier prépaJAM",
    leader: "Clément « Babours » Moret",
    schedule:
      "Un lundi soir sur deux, 19 h 30–21 h, en alternance avec la fanfare",
    audience: "Tous instruments · tous niveaux",
    description:
      "Un cadre bienveillant pour prendre confiance dans l’improvisation et le jeu collectif.",
    cardDescription:
      "Un cadre bienveillant pour prendre confiance avant une jam : comprendre une grille, trouver sa place, écouter le groupe et construire une improvisation à partir de quelques notes.",
    paragraphs: [
      "Vous aimeriez vous lancer dans une jam session, mais vous ne savez jamais quoi jouer quand les autres commencent à improviser ? Cet atelier est fait pour vous !",
      "L’objectif est de prendre confiance dans l’improvisation et d’apprendre à jouer avec les autres, dans un cadre bienveillant où le droit à l’erreur fait partie du jeu.",
      "À partir de morceaux et de situations musicales concrètes, nous travaillerons l’écoute, le rythme, les grilles d’accords, les gammes, les phrases musicales et les différents outils qui permettent de construire une improvisation. Mais surtout, nous apprendrons à écouter, réagir et prendre sa place dans un groupe.",
      "L’atelier s’adresse aux musicien·nes qui souhaitent se préparer aux jam sessions du Cèdre bleu ou à n’importe quelle autre jam session, ou simplement improviser, quel que soit leur instrument. Débutant·es comme musicien·nes plus expérimenté·es sont les bienvenu·es.",
    ],
    closing:
      "Ici, pas besoin de savoir jouer un solo de dix minutes : on commence par quelques notes… et on voit où la musique nous emmène !",
  },
  {
    slug: "guitare-en-ensemble",
    title: "La guitare en ensemble",
    leader: "Nick Morrison",
    schedule: "Un mercredi soir sur deux, 18 h–19 h 30",
    audience: "Tous niveaux · guitare et autres instruments à cordes bienvenus",
    description:
      "Apprendre à l’oreille, arranger et jouer en groupe autour d’un morceau partagé.",
    cardDescription:
      "Un morceau est appris à l’oreille puis arrangé selon le groupe présent. On travaille la pulsation, l’écoute, la création de parties, l’improvisation et l’arrangement collectif.",
    paragraphs: [
      "Envie de jouer avec d’autres guitaristes, de découvrir de nouveaux morceaux et de développer votre jeu en groupe ?",
      "Un mercredi sur deux cet automne, La guitare en ensemble propose de se retrouver au Cèdre bleu autour d’un morceau appris à l’oreille, puis arrangé ensemble selon les personnes et les instruments présents.",
      "L’atelier est ouvert aux guitaristes de tous niveaux, du grand débutant au musicien plus expérimenté. Les autres instruments à cordes — basse, ukulélé, mandoline, etc. — sont également les bienvenus. Aucune expérience préalable du jeu en groupe n’est nécessaire.",
    ],
    topics: {
      title: "Au fil des séances, nous travaillerons notamment",
      items: [
        "le rythme collectif et la pulsation",
        "le jeu à l’oreille",
        "la création de parties de guitare",
        "l’écoute et la place de chacun dans l’ensemble",
        "l’improvisation",
        "l’arrangement collectif",
      ],
    },
    afterTopics: [
      "L’idée est d’apprendre la guitare en faisant de la musique ensemble, dans une ambiance détendue, bienveillante et curieuse, à travers des répertoires et des styles variés.",
    ],
    closing:
      "Venez avec votre instrument, votre curiosité et l’envie de jouer !",
  },
  {
    slug: "chant-interieur",
    title: "Le Chant Intérieur",
    leader: "Nick Morrison",
    schedule: "Un mercredi soir sur deux, 18 h–19 h 30",
    audience: "Tous niveaux · tous instruments et voix",
    description:
      "Un atelier de solfège sans partition pour développer l’oreille, l’audiation et la liberté musicale.",
    cardDescription:
      "Un atelier de solfège sans partition pour développer l’oreille et l’audiation : chant, mémoire mélodique, intervalles, modes, jeux d’improvisation et passage de la voix à l’instrument.",
    paragraphs: [
      "Vous aimeriez mieux jouer à l’oreille ? Improviser plus librement ? Mieux comprendre les mélodies et leur structure ?",
      "Le Chant Intérieur est un atelier de solfège sans partition, consacré à l’écoute, à l’intériorisation, au chant et, pour les instrumentistes, au passage de la voix à l’instrument — sans recours à la notation.",
      "La capacité que nous cherchons à développer peut aussi être appelée audiation : une forme d’« imagination auditive », la faculté d’entendre et d’organiser intérieurement la musique.",
      "Nous travaillons principalement par la voix, mais il n’est pas nécessaire d’être chanteur·se, ni d’être à l’aise avec sa voix, pour participer. À travers des étapes progressives, chacun pourra gagner en confiance pour reproduire des phrases musicales : d’abord en écoutant, en fredonnant avec le groupe, puis à travers des exercices collectifs et, lorsque cela devient naturel, individuels.",
      "Nous développerons peu à peu notre perception des intervalles, gammes, degrés et arpèges, toujours à partir de matière musicale concrète et en lien avec ce que nous entendons réellement.",
    ],
    topics: {
      title: "Les séances pourront également inclure",
      items: [
        "des circle songs",
        "des jeux d’improvisation",
        "des exercices de mémoire mélodique",
        "des passages de la voix à l’instrument",
        "des explorations autour des degrés, des modes et de la tonalité",
      ],
    },
    afterTopics: [
      "L’atelier est ouvert aux musicien·nes et chanteur·ses de tous niveaux souhaitant développer leur oreille, leur intuition mélodique et leur liberté musicale.",
    ],
  },
];

export function getPracticeActivity(slug: string) {
  return practiceActivities.find((activity) => activity.slug === slug);
}
