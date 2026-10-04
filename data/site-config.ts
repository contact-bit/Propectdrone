export const siteConfig = {
  companyName: "ProspectDrone",
  baseline: "INSPECTION DU BÂTIMENT",
  phone: "[TÉLÉPHONE À RENSEIGNER]",
  email: "[E-MAIL À RENSEIGNER]",
  serviceArea: "[ZONE D’INTERVENTION À RENSEIGNER]",
  droneModel: "[MODÈLE DU DRONE À RENSEIGNER]",
  background: "[PARCOURS DANS LE BÂTIMENT À RENSEIGNER]",
  legal:
    "[IDENTITÉ JURIDIQUE, ADRESSE, SIRET ET DIRECTEUR DE PUBLICATION À RENSEIGNER]",
  socials: [],
  logo: "/logo/prospectdrone-inspection-batiment.png",
  url: process.env.NEXT_PUBLIC_SITE_URL || null,
};
export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/inspection-toiture", label: "Inspection toiture" },
  { href: "/inspection-batiment", label: "Nos services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
