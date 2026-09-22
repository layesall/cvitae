import { NextResponse } from "next/server";
import { buildContactFormSchema } from "@/lib/utils";
import type { ContactSchemaMessages } from "@/lib/utils";
import { buildContactEmailHtml } from "@/lib/email/contact-template";
import { buildContactEmailText } from "@/lib/email/contact-template.txt";

const SERVER_SCHEMA_MESSAGES: Record<"fr" | "en", ContactSchemaMessages> = {
  fr: {
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
  },
  en: {
    firstNameMin: "First name must be at least 2 characters.",
    firstNameMax: "First name cannot exceed 50 characters.",
    lastNameMin: "Last name must be at least 2 characters.",
    lastNameMax: "Last name cannot exceed 50 characters.",
    emailInvalid: "Invalid email address.",
    emailMax: "Email cannot exceed 255 characters.",
    subjectInvalid: "Please select a valid subject.",
    messageMin: "Message must be at least 10 characters.",
    messageMax: "Message cannot exceed 2000 characters.",
    messageUnsafe: "Message contains unauthorized characters.",
  },
};

const SUBJECT_LABELS: Record<string, Record<"fr" | "en", string>> = {
  web:        { fr: "Projet Web",             en: "Web project" },
  consulting: { fr: "Conseil & Expertise IT", en: "IT Consulting" },
  freelance:  { fr: "Freelance / Mission",    en: "Freelance / Mission" },
  other:      { fr: "Autre demande",          en: "Other request" },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const locale: "fr" | "en" = body.locale === "en" ? "en" : "fr";

    const serverSchema = buildContactFormSchema(SERVER_SCHEMA_MESSAGES[locale]);
    const result = serverSchema.safeParse({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      subject: body.subject,
      message: body.message,
    });

    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = result.data;
    const subjectLabel = SUBJECT_LABELS[subject]?.[locale] ?? subject;

    const htmlContent = buildContactEmailHtml({
      firstName,
      lastName,
      email,
      subjectLabel,
      message,
    });

    const textContent = buildContactEmailText({
      firstName,
      lastName,
      email,
      subjectLabel,
      message,
    });

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
        htmlContent,
        textContent,
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