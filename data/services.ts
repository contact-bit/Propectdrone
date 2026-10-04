import {
  House,
  Building2,
  CloudLightning,
  PanelsTopLeft,
  HardHat,
  ScanLine,
  Images,
} from "lucide-react";
export const services = [
  {
    id: "toiture",
    title: "Inspection toiture",
    icon: House,
    description:
      "Un regard détaillé sur votre couverture et ses points singuliers.",
    problem:
      "Une toiture difficile d’accès, des éléments abîmés visibles ou des travaux à préparer.",
    method:
      "Des vues d’ensemble et de détail de la couverture, des gouttières et des raccords accessibles à l’observation.",
    result:
      "Des photographies pour situer les éléments observés et échanger avec votre couvreur.",
    href: "/inspection-toiture",
  },
  {
    id: "facade",
    title: "Inspection de façades",
    icon: Building2,
    description:
      "Observer les façades, du pied du bâtiment aux parties hautes.",
    problem:
      "Les parties hautes d’une façade sont difficiles à observer depuis le sol.",
    method:
      "Des vues de l’état apparent des revêtements, fissures visibles, joints, bardages et éléments situés en hauteur peuvent être recueillies.",
    result:
      "Une documentation visuelle des zones convenues pour préparer une intervention.",
    href: "/inspection-batiment#facade",
  },
  {
    id: "sinistre",
    title: "Inspection après sinistre",
    icon: CloudLightning,
    description: "Documenter les dommages visibles après un événement.",
    problem:
      "Après des intempéries, certaines zones du bâtiment restent difficiles à observer.",
    method:
      "Après de fortes intempéries, des images peuvent documenter des éléments déplacés et des dégâts apparents, selon l’état du site et les conditions de sécurité.",
    result:
      "Les images convenues des zones observées, sans évaluation de la cause ni du coût des dommages. Cette observation ne remplace pas les conclusions d’un professionnel compétent.",
    href: "/inspection-batiment#sinistre",
  },
  {
    id: "photovoltaique",
    title: "Inspection photovoltaïque",
    icon: PanelsTopLeft,
    description: "Documenter l’état apparent de vos installations solaires.",
    problem:
      "Les panneaux en toiture sont peu accessibles pour une observation rapprochée.",
    method:
      "L’observation porte sur la disposition générale, l’état visuel apparent des panneaux, les éléments visibles et l’environnement immédiat de l’installation.",
    result:
      "Des vues de l’état apparent de l’installation, selon les zones convenues. Elles ne permettent pas de conclure au fonctionnement ou au rendement des panneaux.",
    href: "/inspection-batiment#photovoltaique",
  },
  {
    id: "chantier",
    title: "Suivi de chantier",
    icon: HardHat,
    description: "Garder une trace visuelle des étapes de vos travaux.",
    problem:
      "Vous souhaitez conserver une vue d’ensemble de l’avancement d’un chantier.",
    method:
      "Des vues générales peuvent documenter l’évolution visible du chantier avant, pendant ou après une intervention, aux étapes définies ensemble.",
    result:
      "Une série d’images pour documenter l’évolution des travaux et faciliter les échanges.",
    href: "/inspection-batiment#chantier",
  },
  {
    id: "technique",
    title: "Prises de vues techniques",
    icon: ScanLine,
    description: "Des images utiles, cadrées selon votre besoin.",
    problem:
      "Une intervention nécessite des vues précises d’un ouvrage ou d’une zone particulière.",
    method:
      "Les prises de vues sont préparées à partir de vos objectifs et des possibilités d’accès.",
    result:
      "Les images convenues pour documenter une situation, montrer une zone à un professionnel, préparer une intervention ou conserver une trace de son état apparent.",
    href: "/inspection-batiment#technique",
  },
];
export const documentationService = {
  id: "documentation",
  title: "Documentation photographique",
  icon: Images,
  description: "Organiser les observations pour mieux les partager.",
  problem:
    "Des images dispersées rendent le suivi d’un bâtiment moins lisible.",
  method:
    "Les photographies retenues sont organisées par zone ou par étape, selon le besoin.",
  result:
    "Les éléments convenus pour la mission, dans un format défini ensemble, sans diagnostic réglementé.",
  href: "/contact",
};

export const accessService = {
  id: "acces",
  title: "Zones difficiles d’accès",
  icon: ScanLine,
  description: "Voir les parties hautes et les zones en retrait du bâtiment.",
  problem:
    "Certaines zones restent peu visibles depuis le sol ou les accès habituels.",
  method:
    "Des angles de vue adaptés facilitent leur observation, dans les limites des accès possibles et des conditions de vol.",
  result:
    "Les vues convenues pour situer les éléments visibles et préparer les prochaines actions.",
  href: "/inspection-batiment#acces",
};
