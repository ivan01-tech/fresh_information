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
