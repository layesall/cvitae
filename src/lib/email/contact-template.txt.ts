interface ContactEmailTextParams {
  firstName: string;
  lastName: string;
  email: string;
  subjectLabel: string;
  message: string;
}

/**
 * Version texte brut (fallback). Indispensable pour :
 * - les filtres anti-spam
 * - les clients mail sans HTML
 * - les lecteurs d'écran
 */
export function buildContactEmailText(params: ContactEmailTextParams): string {
  const { firstName, lastName, email, subjectLabel, message } = params;

  return `NOUVEAU MESSAGE — Layesall
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sujet   ${subjectLabel}
De      ${firstName} ${lastName}
Email   ${email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Répondre directement : ${email}
Reçu via layesall.com
`;
}