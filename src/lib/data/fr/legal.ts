import { LegalData } from "@/types";

export const legalDataFR: LegalData = {
  title: "Mentions légales",
  backLabel: "Retour",

  sections: [
    {
      id: "editeur",
      title: "Éditeur",
      items: [
        { id: "editeur-nom", content: "Layesall" },
        { id: "editeur-forme", content: "Entreprise individuelle" },
        { id: "editeur-bce", content: "N° BCE : 1037.988.189" },
        { id: "editeur-adresse", content: "Adresse : Rue Jacques Rayé 42, BE-1030" },
      ],
    },
    {
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
      id: "donnees-personnelles",
      title: "Données personnelles – RGPD",
      items: [
        {
          id: "dp-desc",
          content:
            "Ce site utilise <strong>Brevo</strong> pour l'acheminement des messages envoyés via le formulaire de contact. Brevo est un service tiers qui traite les données que vous renseignez (nom, email, message) dans le seul but de permettre cet échange. Ces données ne sont pas stockées directement sur ce site. Pour en savoir plus, consultez la politique de confidentialité de Brevo.",
        },
        {
          id: "dp-droits",
          content:
            "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous par email à <strong>contact@layesall.com</strong>.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      items: [
        {
          id: "cookies-desc",
          content:
            "Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques (nécessaires au bon fonctionnement) peuvent être déposés par le biais de services tiers comme GitHub Pages.",
        },
      ],
    },
    {
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