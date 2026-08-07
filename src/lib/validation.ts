import { z } from "zod";

export const projectTypes = [
  "Gartengestaltung",
  "Terrassen- & Wegebau",
  "Bepflanzung",
  "Wasser & Bewässerung",
  "Sichtschutz & Einfriedung",
  "Pflege-Abo",
  "Sonstiges",
] as const;

export const budgetRanges = [
  "Bis 5.000 €",
  "5.000 € – 10.000 €",
  "10.000 € – 18.000 €",
  "Noch offen",
] as const;

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Bitte Vorname angeben."),
  lastName: z.string().trim().min(1, "Bitte Nachname angeben."),
  email: z
    .string()
    .trim()
    .min(1, "Bitte E-Mail-Adresse angeben.")
    .email("Bitte eine gültige E-Mail-Adresse angeben."),
  phone: z.string().trim().optional(),
  projectType: z
    .string()
    .trim()
    .refine((val) => (projectTypes as readonly string[]).includes(val), {
      message: "Bitte eine Projektart auswählen.",
    }),
  budget: z.string().trim().optional(),
  message: z.string().trim().min(10, "Bitte kurz beschreiben, worum es geht (mind. 10 Zeichen)."),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Bitte dem Datenschutzhinweis zustimmen.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
