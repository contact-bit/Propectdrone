import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
export const metadata: Metadata = {
  title: {
    default: "ProspectDrone | Inspection du bâtiment par drone",
    template: "%s | ProspectDrone",
  },
  description:
    "Inspection visuelle de bâtiments par drone : toitures, façades et zones difficiles d’accès. Des images utiles pour préparer et suivre vos interventions.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={manrope.variable}>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
