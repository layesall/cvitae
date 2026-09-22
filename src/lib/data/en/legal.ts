import { LegalData } from "@/types";

export const legalDataEN: LegalData = {
  title: "Legal Notice",
  backLabel: "Back",

  sections: [
    {
      id: "editeur",
      title: "Publisher",
      items: [
        { id: "editeur-nom", content: "Layesall" },
        { id: "editeur-forme", content: "Sole proprietorship" },
        { id: "editeur-bce", content: "VAT/BE number: 1037.988.189" },
        { id: "editeur-adresse", content: "Address: Rue Jacques Rayé 42, BE-1030" },
      ],
    },
    {
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
      id: "donnees-personnelles",
      title: "Personal Data – GDPR",
      items: [
        {
          id: "dp-desc",
          content:
            "This site uses <strong>Brevo</strong> to deliver messages submitted through the contact form. Brevo is a third-party service that processes the data you provide (name, email, message) solely for the purpose of enabling this exchange. This data is not stored directly on this site. For more information, please consult Brevo's privacy policy.",
        },
        {
          id: "dp-droits",
          content:
            "In accordance with the GDPR, you have the right to access, rectify, and delete your data. To exercise these rights, contact us by email at <strong>contact@layesall.com</strong>.",
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
            "This site does not use tracking cookies. Only technical cookies (necessary for proper operation) may be placed by third-party services such as GitHub Pages.",
        },
      ],
    },
    {
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