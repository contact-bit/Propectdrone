import {
  Container,
  Button,
  ImagePlaceholder,
  SectionHeading,
} from "@/components/ui";
import { CTASection, CheckList } from "@/components/sections";
import { siteConfig } from "@/data/site-config";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata(
  "À propos de ProspectDrone",
  "Découvrez l’approche de ProspectDrone : inspection visuelle, images utiles au bâtiment, préparation des interventions et attention aux conditions de sécurité.",
  "/a-propos",
);
export default function About() {
  return (
    <>
      <section className="page-hero">
        <Container className="split">
          <div>
            <p className="eyebrow">À PROPOS DE PROSPECTDRONE</p>
            <h1>
              Le bâtiment au cœur.
              <br />
              <span>Le drone comme outil.</span>
            </h1>
            <p className="lead">
              Notre approche : observer les zones difficiles d’accès et fournir
              des images utiles aux personnes qui entretiennent, réparent et
              font évoluer les bâtiments.
            </p>
            <Button>Décrire mon besoin</Button>
          </div>
          <ImagePlaceholder
            variant="building"
            label="Le bâtiment, notre point de départ"
            priority
          />
        </Container>
      </section>
      <section className="section">
        <Container className="split">
          <SectionHeading
            eyebrow="NOTRE APPROCHE"
            title="Des images avec un objectif précis."
          >
            ProspectDrone se consacre à l’inspection visuelle de bâtiments par
            drone. Le besoin du bâtiment guide les prises de vues : une
            couverture à observer, une façade à documenter ou un chantier à
            suivre.
          </SectionHeading>
          <div>
            <h3>Comprendre votre contexte bâtiment</h3>
            <p>
              Le premier échange permet d’identifier les zones à observer et
              l’usage attendu des images. Les informations sur le parcours et la
              connaissance du secteur seront précisées ici.
            </p>
            <p className="data-placeholder">{siteConfig.background}</p>
            <h3>Un point de vue complémentaire</h3>
            <p>
              Les images aident à préparer les échanges et les interventions.
              Les conclusions techniques et les décisions de travaux relèvent
              des professionnels compétents.
            </p>
          </div>
        </Container>
      </section>
      <section className="section pale">
        <Container className="split">
          <div>
            <p className="eyebrow">MÉTHODE & SÉCURITÉ</p>
            <h2>
              Préparer avant
              <br />
              de prendre de la hauteur.
            </h2>
          </div>
          <CheckList
            items={[
              "Définir les zones à observer et les livrables",
              "Étudier l’environnement, les accès et la présence de tiers",
              "Vérifier les conditions météo et la faisabilité du vol",
              "Prendre en compte la réglementation applicable et les autorisations nécessaires",
              "Adapter ou reporter l’intervention si les conditions ne le permettent pas",
            ]}
          />
        </Container>
      </section>
      <section className="section">
        <Container className="split">
          <SectionHeading
            eyebrow="LE MATÉRIEL"
            title="Un équipement adapté au besoin."
          >
            Le matériel utilisé et les possibilités de prise de vues seront
            précisés avant l’intervention. Cette première offre porte sur
            l’imagerie visuelle.
          </SectionHeading>
          <div className="equipment">
            <h3>Drone utilisé</h3>
            <p className="data-placeholder">{siteConfig.droneModel}</p>
            <p className="small muted">
              Les informations relatives à l’opérateur, aux qualifications et
              aux assurances restent à compléter avec les justificatifs
              correspondants.
            </p>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
