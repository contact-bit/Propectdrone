# ProspectDrone

Base de site vitrine en français : Next.js App Router, TypeScript, Tailwind CSS, Lucide React. Node.js 20.9 minimum.

## Démarrer

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Vérifier

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Personnaliser

- `data/site-config.ts` : coordonnées, zone d’intervention, matériel, parcours, informations légales et logo.
- `data/services.ts` : prestations et textes réutilisés.
- `public/logo/` : déposer le logo, puis renseigner `siteConfig.logo` avec `/logo/nom-du-fichier.png`.
- `public/images/` : illustrations SVG explicitement provisoires. Remplacer dans `ImagePlaceholder` par les photographies finales et adapter les textes alternatifs/légendes. `next/image` est déjà utilisé.
- `app/globals.css` : palette, mise en page responsive et composants visuels. Tailwind est disponible pour les utilitaires.
- `.env.local` : renseigner `NEXT_PUBLIC_SITE_URL` avec l’URL publique absolue pour les URL canoniques et OpenGraph. Aucun domaine fictif n’est généré.

## Contact et confidentialité

Le formulaire valide les champs dans le navigateur, mais ne transmet et ne sauvegarde aucune donnée. Il n’annonce jamais un envoi réussi. Les choix de prestation depuis les pages de services sont préremplis.

Pour connecter l’envoi : ajouter une Server Action ou une route serveur, valider à nouveau les champs côté serveur, configurer un fournisseur d’e-mail via des variables secrètes côté serveur, puis gérer les états d’envoi, d’erreur et de confirmation. Prévoir une protection anti-abus et compléter les mentions de confidentialité avant activation. Les photos restent un emplacement informatif, sans upload.

Les mentions légales et la confidentialité sont des sections dépliables du footer, afin de conserver exactement cinq pages principales. Les informations provisoires doivent être complétées avant publication.

## Déploiement Vercel

Importer ce dépôt comme projet Next.js. Commande de build : `npm run build`. Renseigner l’URL publique dans les variables d’environnement, puis redéployer. Aucun backend ou service externe de contact n’est requis pour cette première version.

La police Manrope est téléchargée par `next/font` à la compilation, puis servie localement. Le premier build demande donc un accès à Google Fonts.

## Direction artistique : ciel et bâtiment

Le logo officiel est utilisé sans retouche dans l’en-tête, le pied de page et l’icône du site. La palette est centralisée dans les variables CSS. Le hero pleine largeur et les sections toiture utilisent `public/images/inspection-scene.png`, une scène illustrative provisoire créée avec l’outil ImageGen intégré. Elle ne représente pas une intervention réelle de ProspectDrone et porte une mention visible. Remplacer cette image par une photographie autorisée à la livraison définitive.

Brief de génération : photographie architecturale réaliste, ciel clair avec espace pour le texte à gauche, toiture du sud de la France en tuiles canal au premier plan et petit drone en inspection à droite ; aucun texte, logo ou interface ajouté à l’image.

### Illustrations supplémentaires

Trois images générées par IA, inspirées de la silhouette d’un DJI Mini 5 Pro : `inspection-toiture.png`, `inspection-facade.png` et `inspection-solaire.png` dans `public/images/`. Il ne s’agit ni de photographies de réalisations, ni d’une confirmation du matériel possédé. Le rendu du drone est illustratif, sans garantie de reproduction exacte du modèle. Génération avec l’outil ImageGen intégré ; prompts complets conservés dans `data/image-prompts.json`.

Les variantes finales portent le suffixe `-sud.png` : tuiles canal en terre cuite, enduits clairs et contexte résidentiel méditerranéen. Les versions précédentes sont conservées et ne sont plus utilisées dans ces emplacements.
