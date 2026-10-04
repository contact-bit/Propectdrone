import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container, Button, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/data/metadata";
import styles from "./roof.module.css";

export const metadata = pageMetadata(
  "Inspection de toiture par drone",
  "Observez les zones difficiles d’accès de votre toiture : couverture, faîtage, gouttières et panneaux solaires. Présentez votre besoin à ProspectDrone pour un devis.",
  "/inspection-toiture",
);
const contact = "/contact?prestation=toiture";
const observations = [
  ["Couverture", "Tuiles, ardoises et autres éléments de couverture visibles."],
  ["Faîtage", "Les éléments situés au sommet de la toiture et leurs raccords."],
  [
    "Zinguerie",
    "Les pièces métalliques, solins et raccords accessibles à l’observation.",
  ],
  ["Cheminée", "L’extérieur des cheminées et des autres sorties de toit."],
  [
    "Gouttières",
    "Les parties des gouttières visibles depuis les angles de prise de vue.",
  ],
  [
    "Panneaux photovoltaïques",
    "La disposition générale des panneaux et leur environnement immédiat.",
  ],
];
const situations = [
  [
    "Après des intempéries",
    "Vous souhaitez vérifier si des éléments de couverture ont été déplacés ou endommagés.",
  ],
  [
    "Avant des travaux",
    "Des images aériennes aident à mieux visualiser les zones concernées avant une intervention.",
  ],
  [
    "Une zone difficile d’accès",
    "Un versant, une cheminée ou une partie haute reste difficile à observer depuis le sol.",
  ],
  [
    "Après une intervention",
    "Vous souhaitez documenter les zones sur lesquelles des travaux ont été réalisés.",
  ],
  [
    "Pour un professionnel",
    "Des prises de vues utiles pour préparer une intervention ou garder une trace de son déroulement.",
  ],
];
const faq = [
  [
    "Pourquoi inspecter une toiture avec un drone ?",
    "Pour accéder à des points de vue difficiles à obtenir depuis le sol, observer la couverture dans son ensemble et recueillir des détails utiles à la préparation de travaux.",
  ],
  [
    "Faut-il monter sur la toiture ?",
    "Les prises de vues aériennes s’effectuent sans montée systématique sur la couverture. Les accès nécessaires à la mission sont étudiés en amont avec vous.",
  ],
  [
    "Peut-on repérer une tuile déplacée ou cassée ?",
    "Oui, une tuile déplacée ou cassée peut être observée lorsqu’elle est visible sur les images. Les angles de vue et la configuration de la couverture influencent ce qui peut être repéré.",
  ],
  [
    "Peut-on détecter une fuite avec le drone ?",
    "L’inspection peut montrer des indices ou des dégradations visibles, mais elle ne permet pas nécessairement de déterminer l’origine d’une infiltration.",
  ],
  [
    "Peut-on inspecter les panneaux photovoltaïques ?",
    "Oui, l’inspection visuelle peut porter sur l’aspect général des panneaux, leur disposition et les éléments qui les entourent. Elle ne mesure pas leur fonctionnement électrique.",
  ],
  [
    "Peut-on inspecter la toiture d’un immeuble ?",
    "Oui, la demande peut concerner une maison, un immeuble en copropriété ou un bâtiment professionnel. L’environnement et les possibilités d’accès sont étudiés pour préparer la mission.",
  ],
  [
    "Que se passe-t-il si la météo ne permet pas le vol ?",
    "L’intervention est reportée si les conditions météo ne permettent pas de réaliser les prises de vues en sécurité. Une nouvelle organisation est alors définie avec vous.",
  ],
  [
    "Combien coûte une inspection de toiture par drone ?",
    "Le coût dépend notamment du bâtiment, de la mission, de l’environnement et des prises de vues nécessaires. Décrivez votre besoin pour demander un devis adapté.",
  ],
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

export default function Roof() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className={styles.hero}>
        <Container>
          <p className="eyebrow">INSPECTION TOITURE</p>
          <h1>
            Inspection de toiture <span>par drone</span>
          </h1>
          <div className={styles.heroIntro}>
            <div>
              <p className={styles.tagline}>
                Prenez de la hauteur sur l’état de votre toiture.
              </p>
              <p className="lead">
                ProspectDrone vous permet d’observer les zones difficiles
                d’accès de votre toiture et d’obtenir des images détaillées pour
                mieux visualiser son état apparent.
              </p>
            </div>
            <div className={styles.heroActions}>
              <Button href={contact}>Demander un devis</Button>
              <a className={styles.anchor} href="#deroulement">
                Comment ça fonctionne ? <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </Container>
        <div className={styles.panorama}>
          <Image
            src="/images/toiture-aerienne-sud.png"
            alt="Vue aérienne d’une toiture en tuiles canal, avec cheminée, gouttières, panneaux solaires et drone d’inspection"
            fill
            sizes="100vw"
            preload
          />
          <div className={styles.photoCaption}>
            <span>LA TOITURE DANS SON ENSEMBLE</span>
            <span>LES DÉTAILS QUI COMPTENT</span>
          </div>
        </div>
      </section>

      <section className="section" id="points-observation">
        <Container>
          <div className={styles.sectionTop}>
            <SectionHeading
              eyebrow="LES POINTS D’OBSERVATION"
              title="Une toiture. Plusieurs points d’attention."
            />
            <p>
              De la couverture aux raccords, chaque zone a son rôle. Les prises
              de vues permettent de situer les éléments et d’en conserver une
              lecture détaillée.
            </p>
          </div>
          <figure className={styles.annotated}>
            <Image
              src="/images/toiture-aerienne-sud.png"
              alt="Repères sur la couverture, le faîtage, les raccords de cheminée, les gouttières et les panneaux photovoltaïques"
              fill
              sizes="(max-width: 760px) 100vw, 1240px"
            />
            <ol className={styles.pins}>
              {observations.map(([title], i) => (
                <li key={title} className={styles[`pin${i + 1}`]}>
                  <a href={`#element-${i + 1}`}>
                    <span>0{i + 1}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </figure>
          <div className={styles.elementList}>
            {observations.map(([title, text], i) => (
              <div id={`element-${i + 1}`} key={title}>
                <span className={styles.number}>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.why} section`}>
        <Container className={styles.editorial}>
          <div>
            <p className="eyebrow">POURQUOI INSPECTER UNE TOITURE ?</p>
            <h2>Voir ce que le sol ne permet pas toujours d’observer.</h2>
          </div>
          <div>
            <p className={styles.largeText}>
              Un doute sur une tuile, des travaux à préparer, une installation à
              observer : tout commence par une meilleure vue de la toiture.
            </p>
            <p>
              Une vérification de l’état général permet de repérer les zones qui
              méritent votre attention. Les images rapprochent les détails
              difficiles d’accès et facilitent les échanges avec le
              professionnel qui interviendra.
            </p>
            <Button href={contact} secondary>
              Décrire mon besoin
            </Button>
          </div>
        </Container>
      </section>

      <section className={`${styles.benefits} section`}>
        <Container>
          <SectionHeading
            eyebrow="L’INTÉRÊT DU DRONE"
            title="Changer d’angle pour mieux comprendre."
          />
          <p className={styles.benefitLead}>
            L’inspection par drone permet d’obtenir rapidement différents angles
            de vue d’une toiture sans nécessiter, pour cette première
            observation, une montée systématique sur la couverture.
          </p>
          <div className={styles.benefitGrid}>
            {[
              [
                "Accéder aux zones en hauteur",
                "Un point de vue sur les versants et les parties les moins accessibles.",
              ],
              [
                "Obtenir des vues d’ensemble",
                "Situer chaque élément dans la configuration du bâtiment.",
              ],
              [
                "Observer certains détails",
                "Regarder de plus près les zones identifiées lors de la préparation.",
              ],
              [
                "Documenter l’état apparent",
                "Disposer d’images pour conserver et partager une trace de la toiture.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className={styles.cases}>
          <div className={styles.caseHeading}>
            <p className="eyebrow">VOTRE TOITURE, VOTRE BESOIN</p>
            <h2>À quel moment faire appel à nous ?</h2>
            <div className={styles.detailPhoto}>
              <Image
                src="/images/inspection-toiture-sud.png"
                alt="Détail de tuiles canal, d’un faîtage et d’une gouttière"
                fill
                sizes="(max-width:760px) 100vw, 40vw"
              />
            </div>
          </div>
          <div>
            {situations.map(([title, text], i) => (
              <article className={styles.caseRow} key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.audience}>
        <Container>
          <p className="eyebrow">POUR LES PARTICULIERS ET LES PROFESSIONNELS</p>
          <ul>
            {[
              "Particuliers",
              "Couvreurs",
              "Artisans",
              "Syndics / copropriétés",
              "Gestionnaires immobiliers",
              "Entreprises du bâtiment",
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="deroulement" className="section">
        <Container>
          <SectionHeading
            eyebrow="UNE MISSION PRÉPARÉE ENSEMBLE"
            title="Une inspection en 4 étapes"
          />
          <ol className={styles.timeline}>
            {[
              [
                "Votre besoin",
                "Vous nous indiquez le bâtiment et les zones que vous souhaitez observer.",
              ],
              [
                "Préparation",
                "ProspectDrone étudie le site et prépare les conditions de la mission.",
              ],
              [
                "Inspection",
                "Les prises de vues sont réalisées sur site lorsque les conditions permettent l’intervention.",
              ],
              [
                "Restitution",
                "Les éléments convenus pour la mission vous sont transmis.",
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container>
        <aside className={styles.clarification}>
          <h2>Une inspection visuelle avant tout</h2>
          <p>
            L’inspection par drone permet d’observer et de documenter l’état
            apparent des éléments visibles. Elle ne remplace pas un diagnostic
            technique lorsqu’une analyse approfondie ou une intervention
            physique est nécessaire.
          </p>
        </aside>
      </Container>

      <section className="section">
        <Container className={styles.faqLayout}>
          <SectionHeading
            eyebrow="VOS QUESTIONS"
            title="L’inspection toiture, en pratique."
          />
          <div>
            {faq.map(([q, a], i) => (
              <details className={styles.faq} key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
                {i === 7 && (
                  <a className={styles.faqLink} href={contact}>
                    Demander un devis <ArrowUpRight size={15} />
                  </a>
                )}
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.finalCta}>
        <Container>
          <div>
            <p className="eyebrow">PARLONS DE VOTRE BÂTIMENT</p>
            <h2>Une toiture à inspecter ?</h2>
            <p>
              Décrivez-nous votre bâtiment et les zones que vous souhaitez faire
              observer.
            </p>
          </div>
          <Button href={contact}>Demander un devis</Button>
        </Container>
      </section>
    </div>
  );
}
