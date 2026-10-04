import { Container, Button, ImagePlaceholder } from "@/components/ui";
import { CTASection, ProcessSteps, CheckList } from "@/components/sections";
import { services, documentationService, accessService } from "@/data/services";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata(
  "Inspection du bâtiment par drone",
  "Inspection de façades, zones difficiles d’accès, photovoltaïque et après sinistre. Suivi de chantier et documentation photographique par drone.",
  "/inspection-batiment",
);
export default function Services() {
  return (
    <>
      <section className="page-hero compact">
        <Container>
          <p className="eyebrow">NOS SERVICES</p>
          <h1>
            Inspection du bâtiment <span>par drone.</span>
          </h1>
          <p className="lead">
            Chaque bâtiment et chaque mission sont différents. Chaque mission
            est étudiée selon le bâtiment, son environnement et les zones à
            observer.
          </p>
          <Button>Décrire mon besoin</Button>
        </Container>
      </section>
      <section id="toiture" className="section">
        <Container className="split roof-focus">
          <ImagePlaceholder
            label="Inspection visuelle de toiture"
            imageSrc="/images/inspection-toiture-sud.png"
          />
          <div>
            <p className="eyebrow">OBSERVER LA TOITURE</p>
            <h2>Voir ce qui est difficilement accessible.</h2>
            <p>
              La couverture et ses points singuliers peuvent être observés sans
              les confondre avec un diagnostic de leur état technique. Les
              prises de vues dépendent des parties visibles et des conditions du
              site.
            </p>
            <CheckList
              items={[
                "Couverture, tuiles et faîtage",
                "Cheminées, gouttières et zinguerie",
                "Solins et éléments difficiles d’accès",
                "Panneaux photovoltaïques présents en toiture",
              ]}
            />
            <Button href="/inspection-toiture">
              Découvrir l’inspection toiture
            </Button>
          </div>
        </Container>
      </section>
      {[services[1], accessService, ...services.slice(2)].map((s, i) => (
        <section
          id={s.id}
          className={`section editorial ${i % 2 ? "pale" : ""}`}
          key={s.id}
        >
          <Container className={`split ${i % 2 ? "reversed" : ""}`}>
            <ImagePlaceholder
              label={s.title}
              imageSrc={
                s.id === "facade"
                  ? "/images/inspection-facade-sud.png"
                  : s.id === "photovoltaique"
                    ? "/images/inspection-solaire-sud.png"
                    : undefined
              }
              variant={s.id === "photovoltaique" ? "roof" : "building"}
            />
            <div>
              <p className="eyebrow">TYPE DE MISSION / 0{i + 1}</p>
              <h2>{s.title}</h2>
              <p className="lead-small">{s.problem}</p>
              <h3>Le rôle du drone</h3>
              <p>{s.method}</p>
              <h3>Des éléments définis ensemble</h3>
              <p>{s.result}</p>
              <Button href={`/contact?prestation=${s.id}`} secondary>
                Décrire mon besoin
              </Button>
            </div>
          </Container>
        </section>
      ))}
      <section id="documentation" className="section pale">
        <Container className="split">
          <div>
            <p className="eyebrow">DOCUMENTATION PHOTOGRAPHIQUE</p>
            <h2>Des images pour préparer la suite.</h2>
            <p>{documentationService.method}</p>
          </div>
          <div>
            <p>{documentationService.result}</p>
            <p>
              Le périmètre de l’observation et la restitution sont précisés lors
              de l’étude de votre besoin.
            </p>
            <Button>Décrire mon besoin</Button>
          </div>
        </Container>
      </section>
      <ProcessSteps />
      <CTASection />
    </>
  );
}
