export const schoolList = [
  {
    short: "short",
    long: "Faculté des Lettres et Sciences Humaines",
  },
  {
    short: "short",
    long: "Faculté des Sciences Juridiques et Politiques    ",
  },
  {
    short: "short",
    long: "Faculté des Sciences    ",
  },

  {
    short: "short",
    long: "Faculté de Medécine et des Sciences Pharmaceutiques    ",
  },
  {
    short: "short",
    long: "Faculté des Sciences Economiques et de Gestion Appliquée",
  },
];

export function generateAcronym(phrase: string): string {
  // Liste des mots à ignorer
  const ignoreWords = [
    "des",
    "les",
    "l",
    "la",
    "de",
    "et",
    "un",
    "une",
    "au",
    "aux",
  ];

  // Séparez la phrase en mots
  const words = phrase.split(" ");

  // Obtenez la première lettre de chaque mot (sauf les mots à ignorer)
  const acronym = words
    .filter((word) => !ignoreWords.includes(word.toLowerCase()))
    .map((word) => word[0].toUpperCase())
    .join("");

  return acronym;
}
export const licence = [
  {
    value: "MAS1PHYSIO",
    label: "MASTER 1 PHYSIOLOGIE DES ORGANISMES ANIMAUX",
  },
  {
    value: "MAS1SAD",
    label: "SYSTÈMES D’AIDE À LA DÉCISION",
  },
  {
    value: "MAS1SEI",
    label: "SYSTÈMES EMBARQUÉS ET INTELLIGENTS",
  },
  {
    value: "MAS1SSR",
    label: "SÉCURITÉ DES SYSTÈMES ET RÉSEAUX",
  },
  {
    value: "MAS1MSI",
    label: "MANAGEMENT DES SYSTÈMES D’INFORMATION",
  },
  {
    value: "MAS1BIBS",
    label: "MASTER 1 BIOINFORMATIQUE ET BIOSTATISTIQUES",
  },
  {
    value: "MASELE1",
    label: "SCIENCES DE L'ELECTRONIQUE",
  },
  {
    value: "MAS1BC",
    label: "MASTER1 BIOCHIMIE",
  },
  {
    value: "MAS1CHIPHY",
    label: "MASTER 1 CHIMIE PHYSIQUE",
  },
  {
    value: "MAS1CHIBIO",
    label: "MASTER 1 CHIMIE BIOLOGIE",
  },
  {
    value: "MAS1PE",
    label: "MASTER 1 PHYSIQUE DE L'ENVIRONNEMENT",
  },
  {
    value: "MAS1SMM",
    label: "MASTER 1 SCIENCES DES MATERIAUX ET MECANIQUE",
  },
  {
    value: "MAS1SMR",
    label: "MASTER 1 SCIENCE DE LA MATIERE ET DU RAYONNEMENT",
  },
  {
    value: "MAS1PARASI",
    label: "MASTER 1 PARASITOLOGIE",
  },
  {
    value: "MAS1ZOOLOGIE",
    label: "MASTER 1 ZOOLOGIE APPROFONDIE",
  },
  {
    value: "MAS1BTE",
    label: "MASTER 1 BIOTHECHNOLOGIE VEGETALE",
  },
  {
    value: "MAS1BOE-EC",
    label: "MASTER 1 BIOLOGIE DES ORGANISMES ET DES ECOSYSTEMES ECOLOGY",
  },
  {
    value: "MAS1BMC",
    label: "MASTER 1 BIOLOGIE MOLECULAIRE ET CELLULAIRE",
  },
  {
    value: "MAS1AAG",
    label: "MASTER 1 ALGEBRE ANALYSE GEOMETRY",
  },
  {
    value: "MAS1ECOM",
    label: "MASTER 1 ECONOMIE MATHEMATIQUE",
  },
  {
    value: "MAS1MAPP",
    label: "MASTER 1 MATHEMATIQUES ET APPLICATIONS",
  },
  {
    value: "MAS1PS",
    label: "MASTER 1 PETROLOGIE ET STRUCTURALE",
  },
  {
    value: "MAS1FSS",
    label: "MASTER 1 FORMATIONS DE SURFACE ET SUBSURFACE",
  },
  {
    value: "MAS1ELE",
    label: "MASTER 1 ELECTRONIQUE ET INSTRUMENTATION",
  },
  {
    value: "MAS1BEE",
    label: "MASTER 1 BIODIVERSITE ECOLOGIE ENVIRONNEMENT",
  },
  {
    value: "MAS1CHI",
    label: "MASTER1 CHIMIE",
  },
  {
    value: "MAS1TSE",
    label: "MASTER 1 TECHNOLOGIE ET SCIENCES DE L'ENERGIE",
  },
  {
    value: "MASPARZOAP2",
    label: "MASTER 2 RECHERCHE LBPOA OPTION PARASITOLOGIE ZOOLOGIE APPROFONDIE",
  },
  {
    value: "MASPHYAN2",
    label: "MASTER 2 RECHERCHE LBPOA OPTION PHYSIOLOGIE ANIMALE",
  },
  {
    value: "MASECOBIOE2",
    label:
      "MASTER 2 RECHERCHE LBPOV OPTION ECOLOGIE BIODIVERSIT� ET ENVIRONNEMENT",
  },
  {
    value: "MASBIOINFSTAT2",
    label: "MASTER 2 RECHERCHE LBPOV OPTION BIOINFORMATIQUE ET BIOSTATISTIQUES",
  },
  {
    value: "MASBIOTECHVE2",
    label: "MASTER 2 RECHERCHE LBPOV OPTION BIOTECHNOLOGIE V�G�TALE",
  },
  {
    value: "MASBASSED2",
    label: "MASTER 2 RECHERCHE G�OSCIENCES OPTION BASSINS S�DIMENTAIRES",
  },
  {
    value: "MASPETROSTRU2",
    label: "MASTER 2 RECHERCHE G�OSCIENCES OPTION PETROLOGIE STRUCTURALE",
  },
  {
    value: "MASHYDROGEO2",
    label: "MASTER 2 RECHERCHE G�OSCIENCES OPTION HYDORLOGIE HYDROGELOGIE",
  },
  {
    value: "MASGEOECO2",
    label: "MASTER 2 RECHERCHE G�OSCIENCES OPTION GEOLOGIE ECONOMIQUE",
  },
  {
    value: "MASCHIMIBIO2",
    label: "MASTER 2 RECHERCHE CHIMIE OPTION CHIMIE BIOLOGIE",
  },
  {
    value: "MASCHIMIBPHY2",
    label: "MASTER 2 RECHERCHE CHIMIE OPTION CHIMIE PHYSIQUE",
  },
  {
    value: "MASTBIOCLI2",
    label: "MASTER 2 RECHERCHE BIOCHIMIE OPTION BIOCHIMIE CLINIQUE",
  },
  {
    value: "MASBIOMOCEL2",
    label:
      "MASTER 2 RECHERCHE BIOCHIMIE OPTION BIOLOGIE MOL�CUAIRE ER CELLULAIRE",
  },
  {
    value: "MASBIOSUBNAT2",
    label:
      "MASTER 2 RECHERCHE BIOCHIMIE OPTION BIOCHIMIE DES SUBSTANCES NATURELLES",
  },
  {
    value: "MASSCIALNU2",
    label:
      "MASTER 2 RECHERCHE BIOCHIMIE OPTION SCIENCES ALIMENTAIRES ET NUTRITION",
  },
  {
    value: "MASAAG2",
    label: "MASTER 2 RECHERCHE LMA OPTION ALG�BRE ANALYSE G�OM�TRIE",
  },
  {
    value: "MASMASS2",
    label:
      "MASTER 2 RECHERCHE LMA OPTION MATH�MATIQUES APPLIQU�ES AUX SCIENCES SOCIALES",
  },
  {
    value: "MASMASV2",
    label:
      "MASTER 2 RECHERCHE LMA OPTION MATH�MATIQUES APPLIQU�ES AUX SCIENCES DU VIVANT",
  },
  {
    value: "MASGENIELO2",
    label: "MASTER 2 RECHERCHE LIA OPTION G�NIE LOGICIEL",
  },
  {
    value: "MASSIS2",
    label: "MASTER 2 RECHERCHE LIA OPTION SIGNAL IMAGE ET SYNTH�SE",
  },
  {
    value: "MASIA2",
    label: "MASTER 2 RECHERCHE LIA OPTION INTELLIGENCE ARTIFICIELLE",
  },
  {
    value: "MASSID2",
    label: "MASTER 2 RECHERCHE LIA OPTION SYST�MES D'AIDE � LA D�CISION",
  },
  {
    value: "MASMECASYSCOM2",
    label: "MASTER 2 RECHERCHE LPF OPTION M�CANIQUE ET SYST�MES COMPLEXES",
  },
  {
    value: "MASSCIMATRAY2",
    label:
      "MASTER 2 RECHERCHE LPF OPTION SCIENCES DE LA MATI�RE ET DU RAYONNEMENT",
  },
  {
    value: "MASELECINS2",
    label: "MASTER 2 RECHERCHE LPF OPTION ELECTRONIQUE ET INSTRUMENTATION",
  },
  {
    value: "MASPHYSENV2",
    label: "MASTER 2 RECHERCHE LPF OPTION PHYSIQUE DE L'ENVIRONNEMENT",
  },
  {
    value: "MASTECHSCIE2",
    label: "MASTER 2 RECHERCHE LPF OPTION TECHNOLOGIE ET SCIENCE DE L'ENERGIE",
  },
  {
    value: "MASBIOTEC1",
    label: "MASTER 1 BIOTECHNOLOGIES VEGETALES",
  },
  {
    value: "MASMATHA1",
    label: "MASTER MATHEMATIQUES ET APPLICATIONS 1",
  },
  {
    value: "MAS1BIOCHI",
    label: "MASTER 1 BIOCHIMIE",
  },
  {
    value: "MASECOBIO1",
    label: "MASTER 1 ECOLOGIE BIODIVERSITE ENVIRONNEMENT",
  },
  {
    value: "MASFOSS1",
    label: "MASTER 1 FORMATION DE SURFACE ET DE SUBSURFACE",
  },
  {
    value: "MASMASCO1",
    label: "MASTER 1 MATHEMATIQUES ET APPLICATIONS OPTION SCIENCES SOCIALES",
  },
  {
    value: "MASPHANGE1",
    label: "MASTER 1 PHYSIOLOGIE ANIMALE GENERALE",
  },
  {
    value: "MASPHYAPP",
    label: "MASTER 1 PHYSIQUE ET APPLICATIONS",
  },
  {
    value: "MASZA1",
    label: "MASTER 1 ZOOLOGIE APPROFONDIE",
  },
  {
    value: "MASAGALB1",
    label: "ALGEBRE ANALYSE GEOMETRIE - ALGÃˆBRE (M1)",
  },
  {
    value: "MASSANPU",
    label: "METHODES EN SANTE PUBLIQUE (M1)",
  },
  {
    value: "MASBMC1",
    label: "MASTER 1 BIOLOGIE MOLECULAIRE ET CELLULAIRE",
  },
  {
    value: "MASCHIMIN1",
    label: "MASTER 1 CHIMIE INORGANIQUE",
  },
  {
    value: "MASBIBS1",
    label: "MASTER 1 BIOINFORMATIQUE ET BIOSTATISTIQUES",
  },
  {
    value: "MASCHIMOR1",
    label: "MASTER 1 CHIMIE ORGANIQUE",
  },
  {
    value: "MASTINFO1",
    label: "MASTER 1 INFORMATIQUE",
  },
  {
    value: "ELE",
    label: "SCIENCES DE L'ELECTRONIQUE",
  },
  {
    value: "MASAGANA1",
    label: "MASTER 1 ALGEBRE ANALYSE GEOMETRIE OPTION ANALYSE",
  },
  {
    value: "MASAGETO1",
    label: "MASTER 1 ALGEBRE ANALYSE GEOMETRIE OPTION GEOMETRIE ET TOPOLOGIE",
  },
  {
    value: "MASMSVIG1",
    label:
      "MASTER 1 MATHEMATIQUES ET APPLICATIONS OPTION SCIENCES DU VIVANT SCIENCES DE L INGENIEUR",
  },
  {
    value: "MASPS1",
    label: "MASTER PETROLOGIE ET STRUCTURALE 1",
  },
  {
    value: "S2M",
    label: "SCIENCES DES MATERIAUX ET MECANIQUE 1",
  },
  {
    value: "PE",
    label: "PHYSIQUE DE L'ENVIRONNEMENT 1",
  },
  {
    value: "MASFSSF1",
    label: "MASTER 1 GEOSCIENCES : FORMATION DE SURFACE ET DE SUB SURFACE (M1)",
  },
  {
    value: "SRM",
    label: "SCIENCES DE LA MATIERE ET DU RAYONNEMENT",
  },
  {
    value: "MASGEOSE",
    label: "MASTER GEOSCIENCES SOLS ET ENVIRONNEMENTS",
  },
];
export const masters = [
  {
    value: "LICBC1",
    label: "LICENCE 1 BIOCHIMIE",
  },
  {
    value: "LICBHS3",
    label: "LICENCE 3 BIOLOGIE HUMAINE ET SANTE",
  },
  {
    value: "LICBOEBI3",
    label: "LICENCE 3 BIOLOGIE DES ORGANISMES ET ECOSYSTEMES-BIOLOGIE",
  },
  {
    value: "LICBEE3",
    label: "LICENCE 3 BIODIVERSITE-ECOLOGIE-ENVIRONNEMENT",
  },
  {
    value: "LICBTE3",
    label: "LICENCE 3 BIOTECHNOLOGIE",
  },
  {
    value: "LICBIBS3",
    label: "LICENCE 3 BIOINFORMATIQUE ET BIOSTATISTIQUES",
  },
  {
    value: "LICST3",
    label: "LICENCE 3 SCIENCE DELA TERRE",
  },
  {
    value: "LICBOV1",
    label: "LICENCE 1 BIOLOGIE DES ORGANISMES VEGETAUX",
  },
  {
    value: "LICST1",
    label: "LICENCE 1 SCEINCES DE LA TERRE",
  },
  {
    value: "LICMAPP3",
    label: "LICENCE 3 MATHEMATIQUES ET APPLICATIONS",
  },
  {
    value: "LICIN3",
    label: "LICENCE 3 INFORMATIQUE",
  },
  {
    value: "LICIF3",
    label: "LICENCE 3 INFORMATIQUE FONDAMENTALE",
  },
  {
    value: "LICBC3",
    label: "LICENCE 3 BIOCHIMIE",
  },
  {
    value: "LICST2",
    label: "LICENCE 2 SCEINCES DE LA TERRE",
  },
  {
    value: "LICPHY2",
    label: "LICENCE 2 PHYSIQUE",
  },
  {
    value: "LICMATH2",
    label: "LICENCE 2 MATHEMATIQUE",
  },
  {
    value: "LICINF2",
    label: "LICENCE 2 INFORMATIQUE",
  },
  {
    value: "LICCHM2",
    label: "LICENCE 2 CHIMIE",
  },
  {
    value: "LICBOV2",
    label: "LICENCE 2 BIOLOGIE DES ORGANISMES VEGETAUX",
  },
  {
    value: "LICBOA2",
    label: "LICENCE 2 BIOLOGIE DES ORGANISMES ANIMAUX",
  },
  {
    value: "LICAAG3",
    label: "LICENCE 3 ALGEBRE ANALYSE GEOMETRY",
  },
  {
    value: "LICPE3",
    label: "LICENCE 3 PHYSIQUE DE L'ENVIRONNEMENT",
  },
  {
    value: "LICPFON3",
    label: "LICENCE 3 PHYSIQUE FONDAMENTALE",
  },
  {
    value: "LICPMEC3",
    label: "LICENCE 3 PHYSIQUE MECANIQUE",
  },
  {
    value: "LICEEA3",
    label: "LICENCE 3 ELECTRONIQUE, ELECTROTECHNIQUE ET AUTOMATISME",
  },
  {
    value: "LICCP3",
    label: "LICENCE 3 CHIMIE PHYSIQUE",
  },
  {
    value: "LICCB3",
    label: "LICENCE 3 CHIMIE BIOLOGIE",
  },
  {
    value: "LICCH3",
    label: "LICENCE 3 CHIMIE",
  },
  {
    value: "LICBC2",
    label: "LICENCE 2 BIOCHIMIE",
  },
  {
    value: "LICCHM1",
    label: "LICENCE 1 CHIMIE",
  },
  {
    value: "LICPHY1",
    label: "LICENCE 1 PHYSIQUE",
  },
  {
    value: "LICMATH1",
    label: "LICENCE 1 MATHEMATIQUE",
  },
  {
    value: "LICINF1",
    label: "LICENCE 1 INFORMATIQUE",
  },
  {
    value: "LICBOA1",
    label: "LICENCE 1 BIOLOGIE DES ORGANISMES ANIMAUX",
  },
  {
    value: "LICBHS1",
    label: "LICENCE 1 BIOLOGIE HUMAINE ET SANTE",
  },
  {
    value: "LICBOEBI1",
    label: "LICENCE 1 BIOLOGIE DES ORGANISMES ET DES ECOSYSTEMES-BIOLOGIE",
  },
  {
    value: "LICALANAG1",
    label: "LICENCE 1 ALGEBRE ANALYSE GEOMETRIE",
  },
  {
    value: "LICBIBS1",
    label: "LICENCE 1 BIOINFORMATIQUE ET BIOSTATISTIQUES",
  },
  {
    value: "LICINFORM1",
    label: "LICENCE 1 EN INFORMATIQUE",
  },
  {
    value: "LICBMC1",
    label: "LICENCE 1 BIOLOGIE MOLECULAIRE ET CELLULAIRE",
  },
  {
    value: "LICCHIBIO1",
    label: "LICENCE 1 CHIMIE BIOLOGIE",
  },
  {
    value: "LICCHIPHY1",
    label: "LICENCE 1 CHIMIE PHYSIQUE",
  },
  {
    value: "LICECOM1",
    label: "LICENCE 1 ECONOMIE MATHEMATIQUES",
  },
  {
    value: "LICGEOS1",
    label: "LICENCE 1 GEOSCIENCES",
  },
  {
    value: "LICMATHAP1",
    label: "LICENCE 1 MATHEMATIQUES ET APPLICATIONS",
  },
  {
    value: "LICMATINF1",
    label: "LICENCE 1 MATHEMATIQUES INFORMATIQUE",
  },
  {
    value: "LICPAPP1",
    label: "LICENCE 1 PHYSIQUE ET APPLICATIONS",
  },
  {
    value: "LICPHYCHI1",
    label: "LICENCE 1 PHYSIQUE CHIMIE",
  },
  {
    value: "LICPMEC1",
    label: "LICENCE 1 PHYSIQUE ET MECANIQUE",
  },
  {
    value: "PAPPMEPFO1",
    label: "PHYSIQUE ET APPLICATIONS ET MECANIQUE ET FONDAMENTALE 1",
  },
  {
    value: "LICBOEEC1",
    label: "LICENCE 1 BIOLOGIE DES ORGANISMES ET DES ECOSYSTEMES -ECOLOGIE",
  },
  {
    value: "LICPFON1",
    label: "LICENCE 1 PHYSIQUE FONDAMENTALE",
  },
];
