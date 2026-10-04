import { Phone, Mail, MapPin, ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site-config";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata(
  "Contact et demande de devis",
  "Présentez votre besoin d’inspection visuelle de toiture ou de bâtiment par drone. Préparez votre demande de devis ProspectDrone.",
  "/contact",
);
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ prestation?: string }>;
}) {
  const params = await searchParams;
  return (
    <section className="section contact-page">
      <Container>
        <p className="eyebrow">CONTACT & DEMANDE DE DEVIS</p>
        <h1>
          Parlons de <span>votre bâtiment.</span>
        </h1>
        <p className="lead">
          Une toiture à observer, un chantier à suivre ?<br />
          Décrivez-nous votre bâtiment et les zones que vous souhaitez faire
          observer.
        </p>
        <div className="contact-layout">
          <ContactForm initialService={params.prestation} />
          <aside className="contact-aside">
            <ArrowDownRight size={38} />
            <h2>
              Tout commence
              <br />
              par un échange.
            </h2>
            <p>
              La localisation, le type de bâtiment et les zones à observer nous
              aident à comprendre votre projet.
            </p>
            {[
              [Phone, "Téléphone", siteConfig.phone],
              [Mail, "E-mail", siteConfig.email],
              [MapPin, "Zone d’intervention", siteConfig.serviceArea],
            ].map(([Icon, label, value]) => {
              const I = Icon as typeof Phone;
              return (
                <div className="contact-detail" key={String(label)}>
                  <I size={20} />
                  <div>
                    <h3>{String(label)}</h3>
                    <p className="placeholder-text">{String(value)}</p>
                  </div>
                </div>
              );
            })}
            <p className="small">
              Les coordonnées et la zone d’intervention seront renseignées
              prochainement.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
