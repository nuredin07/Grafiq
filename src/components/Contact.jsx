import { useState } from "react";
import { motion } from "motion/react";
import SectionLabel from "./ui/SectionLabel";
import RevealLines from "./ui/RevealLines";
import MagneticButton from "./ui/MagneticButton";
import { useLang } from "../context/LanguageContext";
import { CONTACT, SERVICE_KEYS, SOCIALS } from "../data/site";
import { submitForm } from "../utils/submitForm";
import { fadeUp, viewOnce } from "../utils/motion";

const EMPTY = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  company_website: "", // honeypot: real visitors never fill this
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputCls =
  "mt-2 w-full border-0 border-b bg-transparent py-3 text-lg text-paper outline-none transition-colors placeholder:text-fog/50 focus:border-accent";

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#ff7a6b]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = "required";
    if (!values.email.trim()) er.email = "required";
    else if (!EMAIL_RE.test(values.email.trim())) er.email = "email";
    if (!values.message.trim()) er.message = "required";
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    if (values.company_website) {
      setStatus("success"); // silently drop bots
      return;
    }
    setStatus("sending");
    const res = await submitForm(values);
    if (res.ok) {
      setStatus("success");
      setValues(EMPTY);
    } else {
      setStatus(res.reason === "not-configured" ? "notConfigured" : "error");
    }
  };

  const err = (name) => (errors[name] ? c.errors[errors[name]] : undefined);
  const props = (name) => ({
    id: `field-${name}`,
    name,
    value: values[name],
    onChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `field-${name}-error` : undefined,
    className: `${inputCls} ${errors[name] ? "border-[#ff7a6b]" : "border-line"}`,
  });

  const phoneHref = "tel:" + CONTACT.phone.replace(/[^\d+]/g, "");

  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <SectionLabel index="05" label={c.label} />
          <RevealLines
            as="h2"
            lines={c.lines}
            lastClassName="text-accent"
            className="display mt-8 text-[clamp(2.2rem,5.6vw,5.6rem)]"
          />
          <p className="mt-8 max-w-md leading-relaxed text-fog">{c.text}</p>

          <div className="mt-14 space-y-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{c.details}</p>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">{c.emailLabel}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="title mt-1 inline-block text-xl transition-colors hover:text-accent sm:text-2xl"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">{c.phoneLabel}</p>
              <a
                href={phoneHref}
                className="title mt-1 inline-block text-xl transition-colors hover:text-accent sm:text-2xl"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">{c.followLabel}</p>
              <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      {...(s.url !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.form
          noValidate
          onSubmit={onSubmit}
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewOnce}
          className="space-y-8 self-start"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <Field id="field-name" label={`${c.fields.name} *`} error={err("name")}>
              <input type="text" autoComplete="name" {...props("name")} />
            </Field>
            <Field id="field-business" label={c.fields.business}>
              <input type="text" autoComplete="organization" {...props("business")} />
            </Field>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <Field id="field-email" label={`${c.fields.email} *`} error={err("email")}>
              <input type="email" autoComplete="email" {...props("email")} />
            </Field>
            <Field id="field-phone" label={c.fields.phone}>
              <input type="tel" autoComplete="tel" {...props("phone")} />
            </Field>
          </div>

          <Field id="field-service" label={c.fields.service}>
            <select {...props("service")}>
              <option value="" className="bg-ink">
                {c.fields.servicePlaceholder}
              </option>
              {SERVICE_KEYS.map((key) => (
                <option key={key} value={key} className="bg-ink">
                  {t.services.items[key].title}
                </option>
              ))}
              <option value="other" className="bg-ink">
                {c.fields.other}
              </option>
            </select>
          </Field>

          <Field id="field-message" label={`${c.fields.message} *`} error={err("message")}>
            <textarea rows={4} {...props("message")} />
          </Field>

          {/* honeypot */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={values.company_website}
                onChange={onChange}
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <MagneticButton as="button" type="submit" disabled={status === "sending"}>
              {status === "sending" ? c.sending : c.submit}
            </MagneticButton>
            <p role="status" aria-live="polite" className="max-w-sm text-sm leading-relaxed text-fog">
              {status !== "idle" && status !== "sending" ? c.status[status] : ""}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}