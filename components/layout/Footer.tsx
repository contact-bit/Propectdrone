import Link from "next/link";
import { siteConfig, navigation } from "@/data/site-config";
import { Container } from "@/components/ui";
import { Brand } from "./Brand";
export function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div>
            <Brand />
            <p>
              Observer les bâtiments.
              <br />
              Documenter l’essentiel.
            </p>
          </div>
          <div>
            <h2>Navigation</h2>
            {navigation.map((i) => (
              <Link key={i.href} href={i.href}>
                {i.label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Nos prestations</h2>
            <Link href="/inspection-toiture">Inspection toiture</Link>
            <Link href="/inspection-batiment#facade">Inspection façade</Link>
            <Link href="/inspection-batiment#photovoltaique">
              Inspection photovoltaïque
            </Link>
            <Link href="/inspection-batiment#chantier">Suivi de chantier</Link>
          </div>
          <div>
            <h2>Échangeons</h2>
            <p className="placeholder-text">{siteConfig.phone}</p>
            <p className="placeholder-text">{siteConfig.email}</p>
            <p className="placeholder-text">{siteConfig.serviceArea}</p>
          </div>
        </div>
        <div className="legal">
          <details>
            <summary>Mentions légales</summary>
            <p>{siteConfig.legal}</p>
            <p>
              Hébergeur : [À RENSEIGNER SELON LE DÉPLOIEMENT]. Informations à
              compléter avant publication.
            </p>
          </details>
          <details>
            <summary>Politique de confidentialité</summary>
            <p>
              Ce formulaire de démonstration ne transmet ni ne conserve vos
              données. Aucun outil de mesure d’audience n’est intégré. Avant
              activation de l’envoi : renseigner le responsable du traitement,
              la finalité, la base légale, les destinataires, la durée de
              conservation et le contact pour exercer vos droits.
            </p>
          </details>
          <span>© {new Date().getFullYear()} ProspectDrone</span>
        </div>
      </Container>
    </footer>
  );
}
