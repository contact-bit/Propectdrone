"use client";
import { useState } from "react";
import { ArrowUpRight, ImagePlus } from "lucide-react";
const options = [
  ["toiture", "Inspection toiture"],
  ["facade", "Inspection façade"],
  ["sinistre", "Inspection après sinistre"],
  ["photovoltaique", "Inspection photovoltaïque"],
  ["chantier", "Suivi de chantier"],
  ["technique", "Prises de vues techniques"],
  ["autre", "Autre"],
];
export function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [ready, setReady] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setReady(true);
      }}
      onChange={() => setReady(false)}
    >
      <p className="form-note">Les champs marqués d’un * sont obligatoires.</p>
      <div className="form-grid">
        <label>
          Nom / prénom *
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Entreprise <span>(optionnel)</span>
          <input name="company" autoComplete="organization" maxLength={160} />
        </label>
        <label>
          Téléphone *
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            maxLength={30}
          />
        </label>
        <label>
          E-mail *
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
        <label className="full">
          Adresse ou commune du bâtiment *
          <input
            name="location"
            autoComplete="street-address"
            required
            maxLength={250}
          />
        </label>
        <label>
          Type de mission *
          <select
            name="service"
            required
            defaultValue={
              options.some((o) => o[0] === initialService)
                ? initialService
                : initialService
                  ? "autre"
                  : ""
            }
          >
            <option value="" disabled>
              Sélectionner une mission
            </option>
            {options.map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </label>
        <label>
          Type de bâtiment *
          <select name="building" required defaultValue="">
            <option value="" disabled>
              Sélectionner un bâtiment
            </option>
            {[
              "Maison individuelle",
              "Immeuble / copropriété",
              "Bâtiment professionnel",
              "Bâtiment industriel",
              "Autre",
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label className="full">
          Description du besoin *
          <textarea
            name="message"
            rows={5}
            required
            maxLength={5000}
            placeholder="Les zones à observer, le contexte, vos attentes…"
          />
        </label>
      </div>
      <div className="upload-placeholder">
        <ImagePlus size={22} />
        <div>
          <strong>Ajouter des photos</strong>
          <p>Cette possibilité sera disponible ultérieurement.</p>
        </div>
      </div>
      <p className="small muted">
        Version de préparation : aucune donnée n’est envoyée ou enregistrée. Le
        service d’envoi sera connecté prochainement.
      </p>
      <button className="button" type="submit">
        Vérifier ma demande
        <ArrowUpRight size={18} />
      </button>
      <div role="status" aria-live="polite">
        {ready && (
          <p className="form-status">
            Les champs obligatoires sont renseignés. Votre demande n’a pas été
            envoyée : le service de contact n’est pas encore activé. Vos
            informations restent uniquement dans ce formulaire.
          </p>
        )}
      </div>
    </form>
  );
}
