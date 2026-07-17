/**
 * Données des mentions légales - Version Française
 * 
 * Structure des mentions légales obligatoires avec :
 * - Éditeur (identité, BCE, adresse)
 * - Hébergement (GitHub Pages)
 * - Propriété intellectuelle
 * - Données personnelles / RGPD
 * - Cookies
 * - Droit applicable (Belgique)
 * 
 * ⚠️ Les champs sont conformes à la législation belge
 */

import { LegalData } from "@/types";

export const legalDataFR: LegalData = {
  // Titre de la page
  title: "Mentions légales",
  
  // Label du bouton retour
  backLabel: "Retour",

  // Sections juridiques
  sections: [
    {
      // Section Éditeur - informations d'identité
      id: "editeur",
      title: "Éditeur",
      items: [
        { id: "editeur-nom", content: "Layesall" },
        { id: "editeur-forme", content: "Entreprise individuelle" },
        { id: "editeur-bce", content: "N° BCE : 1037.988.189" },
        // { id: "editeur-email", content: "Email : <strong>// TODO</strong> — à compléter" }, // À décommenter si besoin
        { id: "editeur-adresse", content: "Adresse : Rue Jacques Rayé 42, BE-1030" },
      ],
    },
    {
      // Section Hébergement - obligatoire pour tout site
      id: "hebergement",
      title: "Hébergement",
      items: [
        {
          id: "hebergement-desc",
          content:
            "Ce site est hébergé par <strong>GitHub Pages</strong>, un service fourni par GitHub Inc., dont le siège social est situé au 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.",
        },
      ],
    },
    {
      // Section Propriété intellectuelle
      id: "propriete-intellectuelle",
      title: "Propriété intellectuelle",
      items: [
        {
          id: "pi-desc",
          content:
            "L'ensemble des éléments composant ce site (textes, images, logos, code source, etc.) sont la propriété exclusive de Layesall, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation est interdite.",
        },
      ],
    },
    {
      // Section RGPD - Protection des données personnelles
      id: "donnees-personnelles",
      title: "Données personnelles – RGPD",
      items: [
        {
          id: "dp-desc",
          content:
            "Ce site utilise <strong>Cal.eu</strong> pour la prise de rendez-vous. Cal.eu est un service tiers qui collecte les données que vous renseignez (nom, email, etc.) dans le but de planifier un appel. Ces données ne sont pas stockées directement sur ce site. Pour en savoir plus, consultez la politique de confidentialité de Cal.eu.",
        },
        {
          id: "dp-droits",
          content:
            "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous via le formulaire de contact (lien à ajouter) ou par email à l'adresse indiquée ci-dessus.",
        },
      ],
    },
    {
      // Section Cookies
      id: "cookies",
      title: "Cookies",
      items: [
        {
          id: "cookies-desc",
          content:
            "Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques (nécessaires au bon fonctionnement) peuvent être déposés par le biais de services tiers comme Cal.eu ou GitHub Pages.",
        },
      ],
    },
    {
      // Section Droit applicable - Belgique
      id: "droit-applicable",
      title: "Droit applicable",
      items: [
        {
          id: "da-desc",
          content:
            "Les présentes mentions légales sont régies par le droit belge. Tout litige relèvera de la compétence exclusive des tribunaux de Bruxelles.",
        },
      ],
    },
  ],
};

/**
 * Legal notices data - English version
 * 
 * Structure for mandatory legal notices with:
 * - Publisher (identity, VAT, address)
 * - Hosting (GitHub Pages)
 * - Intellectual property
 * - Personal data / GDPR
 * - Cookies
 * - Applicable law (Belgium)
 * 
 * ⚠️ Fields comply with Belgian legislation
 */

export const legalDataEN: LegalData = {
  // Page title
  title: "Legal Notice",
  
  // Back button label
  backLabel: "Back",

  // Legal sections
  sections: [
    {
      // Publisher section - identity information
      id: "editeur",
      title: "Publisher",
      items: [
        { id: "editeur-nom", content: "Layesall" },
        { id: "editeur-forme", content: "Sole proprietorship" },
        { id: "editeur-bce", content: "VAT/BE number : 1037.988.189" },
        // { id: "editeur-email", content: "Email : <strong>// TODO</strong> — to be completed" }, // Uncomment if needed
        { id: "editeur-adresse", content: "Address : Jacques Rayéstreet 42, BE-1030" },
      ],
    },
    {
      // Hosting section - mandatory for all websites
      id: "hebergement",
      title: "Hosting",
      items: [
        {
          id: "hebergement-desc",
          content:
            "This site is hosted by <strong>GitHub Pages</strong>, a service provided by GitHub Inc., headquartered at 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.",
        },
      ],
    },
    {
      // Intellectual property section
      id: "propriete-intellectuelle",
      title: "Intellectual Property",
      items: [
        {
          id: "pi-desc",
          content:
            "All content on this site (texts, images, logos, source code, etc.) is the exclusive property of Layesall, unless otherwise stated. Any reproduction, distribution, or use without permission is prohibited.",
        },
      ],
    },
    {
      // GDPR section - Personal data protection
      id: "donnees-personnelles",
      title: "Personal Data – GDPR",
      items: [
        {
          id: "dp-desc",
          content:
            "This site uses <strong>Cal.eu</strong> for appointment scheduling. Cal.eu is a third-party service that collects the data you provide (name, email, etc.) for the purpose of scheduling a call. This data is not stored directly on this site. For more information, please consult Cal.eu's privacy policy.",
        },
        {
          id: "dp-droits",
          content:
            "In accordance with the GDPR, you have the right to access, rectify, and delete your data. To exercise these rights, please contact us via the contact form (link to be added) or by email at the address above.",
        },
      ],
    },
    {
      // Cookies section
      id: "cookies",
      title: "Cookies",
      items: [
        {
          id: "cookies-desc",
          content:
            "This site does not use tracking cookies. Only technical cookies (necessary for proper operation) may be placed by third-party services such as Cal.eu or GitHub Pages.",
        },
      ],
    },
    {
      // Applicable law section - Belgium
      id: "droit-applicable",
      title: "Applicable Law",
      items: [
        {
          id: "da-desc",
          content:
            "These legal notices are governed by Belgian law. Any dispute will fall under the exclusive jurisdiction of the courts of Brussels.",
        },
      ],
    },
  ],
};