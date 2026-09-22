interface ContactEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  subjectLabel: string;
  message: string;
}

/**
 * Template HTML pour l'email reçu via le formulaire de contact.
 * Email-safe : testé Gmail, Outlook, Apple Mail, ProtonMail.
 * Compatible dark/light mode via prefers-color-scheme.
 */
export function buildContactEmailHtml(params: ContactEmailParams): string {
  const { firstName, lastName, email, subjectLabel, message } = params;

  const fullName = `${firstName} ${lastName}`;
  const safeMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  const timestamp = new Date().toLocaleString("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Nouveau message — ${fullName}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <!-- Preheader (texte prévisualisé dans la boîte de réception, invisible dans le mail) -->
  <div style="display:none;font-size:1px;color:#f4f4f5;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${subjectLabel} · ${firstName} ${lastName} · ${email}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- ═══════ Container principal ═══════ -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.04);">

          <!-- ─── Header ─── -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid #e4e4e7;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:18px;font-weight:700;color:#0a0a0b;letter-spacing:-0.02em;vertical-align:middle;">
                    Layesall<span style="color:#a1a1aa;">.</span>
                  </td>
                  <td align="right" style="font-size:10px;font-weight:600;color:#71717a;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;letter-spacing:0.12em;text-transform:uppercase;vertical-align:middle;">
                    ✦ Nouveau message
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ─── Chip sujet ─── -->
          <tr>
            <td style="padding:32px 40px 0;">
              <span style="display:inline-block;padding:6px 14px;background-color:#f4f4f5;border:1px solid #e4e4e7;border-radius:999px;font-size:11px;font-weight:600;color:#18181b;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;letter-spacing:0.08em;text-transform:uppercase;">
                ${subjectLabel}
              </span>
            </td>
          </tr>

          <!-- ─── Nom ─── -->
          <tr>
            <td style="padding:20px 40px 0;">
              <h1 style="margin:0;font-size:28px;line-height:1.2;color:#0a0a0b;font-weight:700;letter-spacing:-0.025em;">
                ${fullName}
              </h1>
            </td>
          </tr>

          <!-- ─── Email ─── -->
          <tr>
            <td style="padding:8px 40px 0;">
              <a href="mailto:${email}" style="color:#52525b;font-size:14px;text-decoration:none;border-bottom:1px solid #d4d4d8;padding-bottom:2px;">
                ${email}
              </a>
            </td>
          </tr>

          <!-- ─── Message ─── -->
          <tr>
            <td style="padding:32px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-left:3px solid #0a0a0b;background-color:#fafafa;border-radius:0 8px 8px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#3f3f46;">
                      ${safeMessage}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ─── CTA Répondre ─── -->
          <tr>
            <td style="padding:36px 40px 40px;">
              <a href="mailto:${email}?subject=Re%3A%20${encodeURIComponent(subjectLabel)}" style="display:inline-block;padding:14px 28px;background-color:#0a0a0b;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:999px;letter-spacing:-0.01em;">
                Répondre à ${firstName} &nbsp;→
              </a>
            </td>
          </tr>

          <!-- ─── Footer ─── -->
          <tr>
            <td style="padding:20px 40px;background-color:#fafafa;border-top:1px solid #e4e4e7;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:11px;color:#a1a1aa;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;letter-spacing:0.04em;">
                    Reçu le ${timestamp}
                  </td>
                  <td align="right" style="font-size:11px;color:#a1a1aa;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;letter-spacing:0.04em;">
                    via <span style="color:#52525b;">layesall.com</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- ═══════ /Container ═══════ -->

      </td>
    </tr>
  </table>

</body>
</html>`;
}