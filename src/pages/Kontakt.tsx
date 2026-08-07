import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FieldShell, SelectField, TextField, TextareaField } from "@/components/ui/FormField";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { budgetRanges, contactSchema, projectTypes, type ContactFormValues } from "@/lib/validation";

export function Kontakt() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { privacy: false },
  });

  async function onSubmit() {
    setStatus("loading");
    try {
      // Kein Backend angebunden — simuliert den Sendevorgang für diese Demo.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <title>{`Kontakt — ${site.name}`}</title>
      <meta name="description" content="Projekt anfragen bei Wurzelwerk — kurz beschreiben, worum es geht." />

      <section className="bg-canvas-dark pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Eyebrow>Kontakt</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold leading-[1.05] text-text-ondark max-w-2xl">
            Erzähl kurz, was du vorhast.
          </h1>
          <p className="mt-6 text-lg text-text-ondark-soft max-w-xl leading-relaxed">
            Je mehr Kontext du gibst, desto besser können wir einschätzen, was für dein Projekt sinnvoll
            ist. Eine Anfrage ist noch kein verbindliches Angebot.
          </p>
        </Container>
      </section>

      <section className="bg-surface-light py-20 md:py-28">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-onlight">Direkter Kontakt</h2>
            <ul className="mt-6 space-y-4 text-text-onlight">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent-deep transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent-deep transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="text-text-onlight-soft">{site.region}</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-text-onlight mt-14 mb-6">Häufige Fragen</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-medium text-text-onlight">{item.question}</h3>
                  <p className="mt-1.5 text-sm text-text-onlight-soft leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FieldShell label="Vorname" htmlFor="firstName" error={errors.firstName?.message}>
                <TextField id="firstName" autoComplete="given-name" error={errors.firstName?.message} {...register("firstName")} />
              </FieldShell>
              <FieldShell label="Nachname" htmlFor="lastName" error={errors.lastName?.message}>
                <TextField id="lastName" autoComplete="family-name" error={errors.lastName?.message} {...register("lastName")} />
              </FieldShell>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FieldShell label="E-Mail" htmlFor="email" error={errors.email?.message}>
                <TextField id="email" type="email" autoComplete="email" error={errors.email?.message} {...register("email")} />
              </FieldShell>
              <FieldShell label="Telefon" htmlFor="phone" optional error={errors.phone?.message}>
                <TextField id="phone" type="tel" autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
              </FieldShell>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FieldShell label="Projektart" htmlFor="projectType" error={errors.projectType?.message}>
                <SelectField id="projectType" defaultValue="" error={errors.projectType?.message} {...register("projectType")}>
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </SelectField>
              </FieldShell>
              <FieldShell label="Budgetrahmen" htmlFor="budget" optional>
                <SelectField id="budget" defaultValue="" {...register("budget")}>
                  <option value="">Bitte wählen</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </SelectField>
              </FieldShell>
            </div>

            <FieldShell label="Nachricht" htmlFor="message" error={errors.message?.message}>
              <TextareaField
                id="message"
                error={errors.message?.message}
                placeholder="Grundstück, Größe, Wunschtermin, was dir wichtig ist …"
                {...register("message")}
              />
            </FieldShell>

            <div>
              <label htmlFor="privacy" className="flex items-start gap-3 text-sm text-text-onlight-soft">
                <input id="privacy" type="checkbox" className="mt-1 h-4 w-4 accent-accent" {...register("privacy")} />
                <span>
                  Ich habe die Hinweise zum Umgang mit meinen Daten zur Kenntnis genommen.
                  [Datenschutzhinweis vor Livegang prüfen und verlinken.]
                </span>
              </label>
              {errors.privacy && (
                <p role="alert" className="mt-1.5 text-sm text-form-error">
                  {errors.privacy.message}
                </p>
              )}
            </div>

            <p className="text-xs text-text-onlight-soft">
              Bitte übermittle über dieses Formular keine vertraulichen oder sensiblen personenbezogenen
              Daten.
            </p>

            <Button as="button" type="submit" variant="primary-on-light" disabled={status === "loading"}>
              {status === "loading" ? "Wird gesendet …" : "Anfrage senden"}
            </Button>

            <div aria-live="polite" className="min-h-6">
              {status === "success" && (
                <p className="text-form-success text-sm">
                  Danke, deine Anfrage ist angekommen. Wir melden uns bei dir.
                </p>
              )}
              {status === "error" && (
                <p className="text-form-error text-sm">
                  Da ist etwas schiefgelaufen. Bitte versuche es erneut oder schreib uns direkt eine
                  E-Mail.
                </p>
              )}
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
