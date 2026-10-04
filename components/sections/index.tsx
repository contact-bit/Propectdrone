import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button, Container, SectionHeading } from "@/components/ui";
import { services } from "@/data/services";
export function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;
  return (
    <Link href={service.href} className="service-card">
      <Icon size={29} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ArrowUpRight className="service-arrow" size={20} />
    </Link>
  );
}
export function CTASection() {
  return (
    <section className="cta-section">
      <Container className="cta-inner">
        <div>
          <p className="eyebrow">PARLONS DE VOTRE PROJET</p>
          <h2>Un bâtiment à inspecter ?</h2>
          <p>
            Décrivez votre besoin. Définissons ensemble les images utiles à
            votre projet.
          </p>
        </div>
        <Button>Demander un devis</Button>
      </Container>
    </section>
  );
}
export function ProcessSteps() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="UNE MÉTHODE CLAIRE"
          title="De votre besoin aux images utiles."
        />
        <ol className="process">
          {[
            [
              "Votre besoin",
              "Vous décrivez le bâtiment et les zones que vous souhaitez observer.",
            ],
            [
              "Étude de la mission",
              "Nous étudions votre demande, le site et les conditions nécessaires à l’intervention.",
            ],
            [
              "Intervention",
              "Les prises de vues nécessaires sont réalisées sur site lorsque les conditions permettent le vol.",
            ],
            [
              "Restitution",
              "Les éléments convenus pour la mission vous sont transmis.",
            ],
          ].map(([t, d], i) => (
            <li key={t}>
              <span className="step-number">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((i) => (
        <li key={i}>
          <Check size={17} />
          {i}
        </li>
      ))}
    </ul>
  );
}
