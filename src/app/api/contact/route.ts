import { NextResponse } from "next/server";
import { buildContactFormSchema } from "@/lib/utils";

// Messages FR par défaut côté serveur (fallback si erreur)
const serverSchemaMessages = {
  firstNameMin: "Le prénom doit contenir au moins 2 caractères.",
  firstNameMax: "Le prénom ne peut pas dépasser 50 caractères.",
  lastNameMin: "Le nom doit contenir au moins 2 caractères.",
  lastNameMax: "Le nom ne peut pas dépasser 50 caractères.",
  emailInvalid: "Adresse email invalide.",
  emailMax: "L'email ne peut pas dépasser 255 caractères.",
  subjectInvalid: "Veuillez sélectionner un sujet valide.",
  messageMin: "Le message doit contenir au moins 10 caractères.",
  messageMax: "Le message ne peut pas dépasser 2000 caractères.",
  messageUnsafe: "Le message contient des caractères non autorisés.",
};

const serverSchema = buildContactFormSchema(serverSchemaMessages);

// Mapping key → label pour l'email (FR, car c'est toi qui lis)
const SUBJECT_LABELS: Record<string, string> = {
  web: "Projet Web",
  consulting: "Conseil & Expertise IT",
  freelance: "Freelance / Mission",
  other: "Autre demande",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = serverSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = result.data;
    const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME!,
          email: process.env.BREVO_SENDER_EMAIL!,
        },
        to: [{ email: process.env.CONTACT_RECEIVER_EMAIL! }],
        replyTo: { email, name: `${firstName} ${lastName}` },
        subject: `[Contact] ${subjectLabel} — ${firstName} ${lastName}`,
        htmlContent: `
          <h2>Nouveau message depuis layesall.dev</h2>
          <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subjectLabel}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur API Brevo:", errorData);
      throw new Error("Erreur lors de l'envoi.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur route contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}