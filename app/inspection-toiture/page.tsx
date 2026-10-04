import {
  Container,
  Button,
  SectionHeading,
  ImagePlaceholder,
} from "@/components/ui";
import { CTASection, ProcessSteps, CheckList } from "@/components/sections";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata(
  "Inspection de toiture par drone",
  "Observez tuiles, ardoises, faîtage et gouttières grâce à une inspection visuelle de toiture par drone. Préparation de travaux et observation après intempéries.",
  "/inspection-toiture",
);
const faq = [
  [
    "Que peut-on observer sur une toiture ?",
    "Les éléments visibles de la couverture : tuiles, ardoises, faîtage, gouttières, zinguerie, cheminées, solins et panneaux photovoltaïques. La visibilité dépend de la configuration du bâtiment.",
  ],
  [
    "Peut-on identifier une infiltration ?",
    "Les images peuvent montrer des éléments détériorés visibles. Elles ne permettent pas de confirmer une infiltration invisible, l’étanchéité ou l’état structurel. Un professionnel compétent peut devoir intervenir.",
  ],
  [
    "L’inspection est-elle possible par tous les temps ?",
    "Non. La météo, l’environnement, les contraintes de vol et les conditions de sécurité déterminent la faisabilité. Une intervention peut être reportée.",
  ],
  [
    "Quels documents sont remis ?",
    "Le format et le périmètre sont convenus avant l’intervention : photographies, vues d’ensemble, détails et, si prévu, un dossier photographique commenté.",
  ],
  [
    "Quel est le prix d’une inspection ?",
    "Le devis dépend du bâtiment, de sa localisation, de l’accès au site et des prises de vues souhaitées. Présentez votre besoin pour obtenir une proposition adaptée.",
  ],
];
export default function Roof() {
  return (
    <>
      <section className="page-hero">
        <Container className="split">
          <div>
            <p className="eyebrow">OBSERVER LA COUVERTURE</p>
            <h1>
              Inspection de toiture <span>par drone.</span>
            </h1>
            <p className="lead">
              Une vue d’ensemble. Des détails accessibles. Des images pour
              préparer votre prochaine intervention.
            </p>
            <Button>Demander un devis</Button>
          </div>
          <ImagePlaceholder
            label="Observation des éléments de toiture"
            imageSrc="/images/inspection-toiture-sud.png"
            priority
          />
        </Container>
      </section>
      <section className="section">
        <Container className="split">
          <SectionHeading
            eyebrow="QUAND INTERVENIR ?"
            title="Mieux voir avant d’agir."
          >
            Une toiture difficile d’accès mérite un regard adapté. L’inspection
            visuelle documente son état apparent sans intervention sur la
            couverture.
          </SectionHeading>
          <CheckList
            items={[
              "Vérification visuelle de la couverture",
              "Observation d’éléments détériorés visibles",
              "Préparation d’une intervention",
              "Observation après travaux",
              "Inspection après intempéries",
            ]}
          />
        </Container>
      </section>
      <section className="section pale">
        <Container>
          <SectionHeading
            eyebrow="LES POINTS D’OBSERVATION"
            title="De la couverture aux raccords."
          />
          <div className="observation-grid">
            {[
              "Tuiles & ardoises",
              "Faîtage",
              "Gouttières",
              "Zinguerie",
              "Cheminées",
              "Solins",
              "Panneaux photovoltaïques",
              "Éléments visibles difficiles d’accès",
            ].map((t, i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
              </div>
            ))}
          </div>
          <p className="small muted">
            L’inspection porte sur les parties visibles et accessibles à
            l’imagerie. Elle ne constitue pas un diagnostic de structure ou
            d’étanchéité.
          </p>
        </Container>
      </section>
      <section className="section">
        <Container className="split">
          <div>
            <p className="eyebrow">UN OUTIL COMPLÉMENTAIRE</p>
            <h2>Pourquoi inspecter une toiture par drone ?</h2>
            <p>
              Le drone facilite l’observation des parties hautes et permet de
              situer un détail dans son environnement. Dans certaines
              situations, il peut limiter le recours à un accès physique pour
              une première observation.
            </p>
          </div>
          <div>
            <h3>Des bâtiments aux configurations variées</h3>
            <p>
              Maisons individuelles, immeubles en copropriété, bâtiments
              professionnels, locaux d’activité ou bâtiments industriels : la
              faisabilité est étudiée pour chaque site.
            </p>
            <p>
              Les images peuvent servir de support à vos échanges avec un
              couvreur ou un autre professionnel du bâtiment.
            </p>
          </div>
        </Container>
      </section>
      <ProcessSteps />
      <section className="section pale">
        <Container className="faq-container">
          <SectionHeading
            eyebrow="VOS QUESTIONS"
            title="L’inspection toiture, en pratique."
          />
          {faq.map(([q, a]) => (
            <details className="faq" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
