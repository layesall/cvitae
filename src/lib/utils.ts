import { z } from 'zod';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}




/**
 * Clés stables pour les sujets du formulaire.
 * Indépendantes de la langue — traduites côté UI via i18n.
 */
export const CONTACT_SUBJECT_KEYS = [
  "web",
  "consulting",
  "freelance",
  "other",
] as const;

export type ContactSubjectKey = (typeof CONTACT_SUBJECT_KEYS)[number];

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: ContactSubjectKey;
  message: string;
}

export interface ContactSchemaMessages {
  firstNameMin: string;
  firstNameMax: string;
  lastNameMin: string;
  lastNameMax: string;
  emailInvalid: string;
  emailMax: string;
  subjectInvalid: string;
  messageMin: string;
  messageMax: string;
  messageUnsafe: string;
}

export function buildContactFormSchema(m: ContactSchemaMessages) {
  return z.object({
    firstName: z
      .string()
      .min(2, { message: m.firstNameMin })
      .max(50, { message: m.firstNameMax })
      .trim(),
    lastName: z
      .string()
      .min(2, { message: m.lastNameMin })
      .max(50, { message: m.lastNameMax })
      .trim(),
    email: z
      .string()
      .email({ message: m.emailInvalid })
      .max(255, { message: m.emailMax })
      .toLowerCase()
      .trim(),
    subject: z.enum(CONTACT_SUBJECT_KEYS, {
      message: m.subjectInvalid,
    }),
    message: z
      .string()
      .min(10, { message: m.messageMin })
      .max(2000, { message: m.messageMax })
      .trim()
      .refine((val) => !/<script|javascript:|on\w+\s*=/i.test(val), {
        message: m.messageUnsafe,
      }),
  });
}