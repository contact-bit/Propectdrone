import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ScanLine,
  MapPin,
  Images,
  Construction,
} from "lucide-react";
import { Container, Button, SectionHeading } from "@/components/ui";
import { CTASection, ProcessSteps, CheckList } from "@/components/sections";
import { services, accessService } from "@/data/services";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata(
  "Inspection du bâtiment par drone",
  "ProspectDrone réalise des inspections visuelles de toitures, façades et zones difficiles d’accès par drone, pour particuliers et professionnels.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="inspection-hero">
        <div className="hero-scene">
          <Image
            src="/images/inspection-scene-sud.png"
            alt="Un drone observe une toiture en tuiles canal sous un ciel clair."
            fill
            sizes="100vw"
            preload
          />
          <div className="inspection-mark" aria-hidden="true">
            <span />
            <i />
          </div>
        </div>
        <Container className="scene-content">
          <p className="eyebrow">
            <span className="status-dot" /> LE BÂTIMENT, VU AUTREMENT
          </p>
          <h1>
            L’inspection du bâtiment
            <br />
            <span>prend de la hauteur.</span>
          </h1>
          <p className="lead">
            ProspectDrone vous accompagne dans l’inspection visuelle de vos
            toitures, façades et zones difficiles d’accès grâce à l’imagerie par
            drone.
          </p>
          <div className="actions">
            <Button>Demander un devis</Button>
            <Button href="/inspection-batiment" secondary>
              Découvrir nos services
            </Button>
          </div>
          <p className="hero-note">PARTICULIERS & PROFESSIONNELS DU BÂTIMENT</p>
        </Container>
        <Container className="scene-caption">
          <a href="#services" className="discover">
            <ArrowDown size={16} /> EXPLORER NOS PRESTATIONS
          </a>
        </Container>
      </section>
      <div className="benefit-strip">
        <Container>
          <span>
            <MapPin />
            Zones difficiles d’accès
          </span>
          <span>
            <ScanLine />
            Observation visuelle détaillée
          </span>
          <span>
            <Images />
            Documentation photographique
          </span>
        </Container>
      </div>
      <section id="services" className="section">
        <Container>
          <div className="section-top">
            <SectionHeading
              eyebrow="LES TYPES DE MISSIONS"
              title="Inspecter. Observer. Documenter."
            >
              ProspectDrone permet d’observer et de documenter des parties d’un
              bâtiment difficiles à visualiser depuis le sol.
            </SectionHeading>
            <span className="section-index">01 / SERVICES</span>
          </div>
          <div className="services-editorial">
            <Link href={services[0].href} className="featured-service">
              <Image
                src="/images/inspection-scene-sud.png"
                alt="Toiture en tuiles canal"
                fill
                sizes="(max-width: 760px) 100vw, 45vw"
              />
              <div>
                <p className="eyebrow">FOCUS TOITURE</p>
                <h3>{services[0].title}</h3>
                <p>{services[0].description}</p>
                <span className="text-link">
                  Découvrir l’inspection toiture ↗
                </span>
              </div>
            </Link>
            <div className="service-rows">
              {[...services.slice(1), accessService].map((service, i) => (
                <Link
                  href={service.href}
                  key={service.id}
                  className="service-row"
                >
                  <span className="row-number">0{i + 2}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="split roof-focus">
          <figure className="roof-photograph">
            <Image
              src="/images/inspection-toiture-sud.png"
              alt="Détails d’une toiture : couverture en tuiles canal, faîtage et cheminée"
              fill
              sizes="(max-width: 760px) 100vw, 55vw"
            />
            <span className="roof-label label-ridge">Faîtage</span>
            <span className="roof-label label-cover">Couverture</span>
            <span className="roof-label label-gutter">
              Gouttières & zinguerie
            </span>
          </figure>
          <div>
            <p className="eyebrow">FOCUS TOITURE</p>
            <h2>
              Votre toiture,
              <br />
              sous un nouvel angle.
            </h2>
            <p>
              Avant des travaux, après des intempéries ou pour documenter l’état
              apparent de votre couverture : des vues d’ensemble et de détail
              pour mieux préparer la suite.
            </p>
            <CheckList
              items={[
                "Tuiles canal, couverture et faîtage",
                "Gouttières, zinguerie et solins",
                "Cheminées et panneaux photovoltaïques",
              ]}
            />
            <Button href="/inspection-toiture">
              Découvrir l’inspection toiture
            </Button>
          </div>
        </Container>
      </section>
      <section className="section pale approach-section">
        <Container className="split">
          <div>
            <p className="eyebrow">POURQUOI LE DRONE ?</p>
            <h2>Voir ce qui est difficilement accessible.</h2>
            <p className="lead">
              Un point de vue complémentaire pour observer ce qui est difficile
              à voir depuis le sol.
            </p>
          </div>
          <div>
            <dl className="benefit-editorial">
              {[
                [
                  "Accès visuel",
                  "Observer certaines zones difficiles à voir depuis le sol.",
                ],
                [
                  "Prise de hauteur",
                  "Comprendre le bâtiment dans son ensemble.",
                ],
                [
                  "Détail",
                  "Documenter certaines zones par des prises de vues rapprochées.",
                ],
                [
                  "Documentation",
                  "Conserver et partager une trace visuelle de l’inspection.",
                ],
                [
                  "Préparation",
                  "Aider un professionnel à préparer son intervention.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
            <p className="small muted">
              Selon le site, la météo et les conditions de vol. Le drone ne
              remplace pas systématiquement les moyens d’accès ni les
              interventions humaines.
            </p>
          </div>
        </Container>
      </section>
      <section className="section pale">
        <Container>
          <SectionHeading
            eyebrow="DANS QUELLES SITUATIONS ?"
            title="Un point de vue utile, au bon moment."
          />
          <div className="mission-contexts">
            {[
              [
                "Préparer des travaux",
                "Situer une zone et partager les vues utiles avec un artisan avant son intervention.",
              ],
              [
                "Après des intempéries",
                "Documenter des éléments déplacés ou des dégâts apparents, si les conditions le permettent.",
              ],
              [
                "Suivre une intervention",
                "Conserver une trace de l’évolution visible d’un chantier ou de l’état apparent après travaux.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <Button>Décrire mon besoin</Button>
        </Container>
      </section>
      <ProcessSteps />
      <section className="audience pale">
        <Container>
          <Construction size={30} />
          <p className="eyebrow">À VOS CÔTÉS</p>
          <h2>
            Un même besoin de clarté.
            <br />
            Des métiers différents.
          </h2>
          <div className="audience-list">
            {[
              "Particuliers",
              "Artisans du bâtiment",
              "Couvreurs",
              "Entreprises du BTP",
              "Syndics & copropriétés",
              "Gestionnaires immobiliers",
              "Professionnels du photovoltaïque",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
