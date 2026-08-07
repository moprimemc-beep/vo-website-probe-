export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Jonas Herrmann",
    role: "Gründer & Landschaftsgärtnermeister",
    bio: "Jonas hat Wurzelwerk 2016 gegründet, nach Ausbildung und Meisterprüfung im Garten- und Landschaftsbau. Er verantwortet Entwurf und Bauleitung der größeren Projekte.",
  },
  {
    name: "Marlene Vogt",
    role: "Garten- und Freiraumplanerin",
    bio: "Marlene bringt Standortanalyse, Pflanzplanung und Entwurf zusammen. Sie sorgt dafür, dass ein Garten nicht nur im ersten Sommer, sondern auch in fünf Jahren noch stimmt.",
  },
  {
    name: "Timo Brandner",
    role: "Bauleiter Außenanlagen",
    bio: "Timo koordiniert die Ausführung vor Ort — von der ersten Erdbewegung bis zur letzten Fuge im Pflaster.",
  },
];

export const studioIntro = {
  headline: "Gute Gartenarbeit beginnt mit genauem Hinsehen.",
  text: [
    "Wurzelwerk ist ein kleines Team aus dem Fünfseenland südwestlich von München. Wir planen und bauen Gärten, die zum Grundstück, zum Licht und zu den Menschen passen, die darin leben.",
    "Statt Katalogware setzen wir auf Entwürfe, die vor Ort entstehen — mit Blick für Boden, Bestand und das, was ein Garten über Jahre hinweg leisten muss.",
  ],
};
