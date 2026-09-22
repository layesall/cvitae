"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  buildContactFormSchema,
  CONTACT_SUBJECT_KEYS,
  type ContactFormData,
  type ContactSubjectKey,
} from "@/lib/utils";
import { useHomeData } from "@/hooks/useLocaleData";
import { useI18n } from "@/context/I18nContext";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ContactForm() {
  const { locale } = useI18n();
  const { contactForm } = useHomeData();
  const {
    labels,
    placeholders,
    subjects,
    button,
    feedback,
    schemaMessages,
  } = contactForm;

  // Schema reconstruit seulement si les messages changent (changement de langue)
  const schema = useMemo(
    () => buildContactFormSchema(schemaMessages),
    [schemaMessages]
  );

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: CONTACT_SUBJECT_KEYS[0],
    message: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});

  const flattenErrors = (
    fieldErrors: Record<string, string[] | undefined>
  ): FieldErrors => {
    const out: FieldErrors = {};
    for (const key in fieldErrors) {
      const messages = fieldErrors[key];
      if (messages && messages.length > 0) {
        out[key as keyof ContactFormData] = messages[0];
      }
    }
    return out;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(flattenErrors(result.error.flatten().fieldErrors));
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          locale,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: CONTACT_SUBJECT_KEYS[0],
          message: "",
        });
      } else {
        setStatus("error");
        const data = await res.json();
        if (data.errors) {
          setErrors(flattenErrors(data.errors));
        }
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

      {/* Prénom / Nom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="t-mono-sm text-text-dim uppercase tracking-wider">
            {labels.firstName}
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder={placeholders.firstName}
            className={`w-full px-4 py-3 rounded-lg bg-bg-card border ${
              errors.firstName ? "border-red-500" : "border-border"
            } focus:border-accent focus:outline-none transition-colors t-body`}
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">{errors.firstName}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="t-mono-sm text-text-dim uppercase tracking-wider">
            {labels.lastName}
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder={placeholders.lastName}
            className={`w-full px-4 py-3 rounded-lg bg-bg-card border ${
              errors.lastName ? "border-red-500" : "border-border"
            } focus:border-accent focus:outline-none transition-colors t-body`}
          />
          {errors.lastName && (
            <span className="text-red-500 text-xs">{errors.lastName}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="t-mono-sm text-text-dim uppercase tracking-wider">
          {labels.email}
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder={placeholders.email}
          className={`w-full px-4 py-3 rounded-lg bg-bg-card border ${
            errors.email ? "border-red-500" : "border-border"
          } focus:border-accent focus:outline-none transition-colors t-body`}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email}</span>
        )}
      </div>

      {/* Sujet */}
      <div className="flex flex-col gap-1.5">
        <label className="t-mono-sm text-text-dim uppercase tracking-wider">
          {labels.subject}
        </label>
        <select
          value={formData.subject}
          onChange={(e) =>
            handleChange("subject", e.target.value as ContactSubjectKey)
          }
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border focus:border-accent focus:outline-none transition-colors t-body appearance-none"
        >
          {CONTACT_SUBJECT_KEYS.map((key) => (
            <option key={key} value={key}>
              {subjects[key]}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="text-red-500 text-xs">{errors.subject}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="t-mono-sm text-text-dim uppercase tracking-wider">
          {labels.message}
        </label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder={placeholders.message}
          className={`w-full px-4 py-3 rounded-lg bg-bg-card border ${
            errors.message ? "border-red-500" : "border-border"
          } focus:border-accent focus:outline-none transition-colors t-body resize-none`}
        />
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message}</span>
        )}
      </div>

      {/* Bouton */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ y: -1 }}
        className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
          status === "loading"
            ? "bg-bg-elevated text-text-dim cursor-wait"
            : "bg-accent text-bg hover:shadow-[0_15px_40px_-12px_rgba(240,235,224,0.4)]"
        }`}
      >
        {status === "loading" ? (
          <>
            {button.loading} <Loader2 className="w-4 h-4 animate-spin" />
          </>
        ) : (
          <>
            {button.idle} <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>

      {/* Feedback */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-green-400 text-sm t-mono-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            {feedback.success}
          </motion.div>
        )}

        {status === "error" && Object.keys(errors).length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-red-400 text-sm t-mono-sm"
          >
            <AlertCircle className="w-4 h-4" />
            {feedback.error}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}