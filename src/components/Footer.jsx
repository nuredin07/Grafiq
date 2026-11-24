import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import Logo from "./ui/Logo";
import { useLang } from "../context/LanguageContext";
import { CONTACT, NAV_LINKS, SERVICE_KEYS, SOCIALS } from "../data/site";
import { EASE } from "../utils/motion";

const LETTERS = "GRAFIQ".split("");

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const marquee = SERVICE_KEYS.map((k) => t.services.items[k].title);

  return (
    <footer className="relative overflow-hidden border-t border-line pt-20">
      {/* soft glow behind the big type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(79,91,255,0.20) 0%, rgba(188,53,251,0.07) 45%, transparent 70%)",
        }}
      />

      {/* marquee strip */}
      <div aria-hidden="true" className="relative mb-20 overflow-hidden border-y border-line py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-fog">
          {[0, 1].map((n) => (
            <div key={n} className="flex gap-10">
              {marquee.map((m) => (
                <span key={`${n}-${m}`} className="flex items-center gap-10">
                  {m}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap relative grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">{f.description}</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-6 inline-block font-mono text-xs text-paper transition-colors hover:text-accent"
          >
            {CONTACT.email}
          </a>
        </div>

        <nav aria-label={f.navTitle}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{f.navTitle}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.key}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{f.servicesTitle}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICE_KEYS.map((k) => (
              <li key={k}>
                <a href="#services" className="transition-colors hover:text-accent">
                  {t.services.items[k].title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{f.socialTitle}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  {...(s.url !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="transition-colors hover:text-accent"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* large animated type */}
      <h2 className="sr-only">GRAFIQ</h2>
      <div
        aria-hidden="true"
        className="display relative mt-20 select-none overflow-hidden whitespace-nowrap px-2 pt-6 text-center text-[clamp(3.5rem,21vw,22rem)] leading-[0.82]"
      >
        {LETTERS.map((l, i) => (
          <motion.span
            key={i}
            className="inline-block cursor-default"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: EASE, delay: i * 0.06 }}
            whileHover={{ y: "-4%", color: "#8b9bff" }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="wrap relative flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-xs text-fog">
        <p>
          © {new Date().getFullYear()} GRAFIQ. {f.rights}
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 font-mono uppercase tracking-[0.18em] transition-colors hover:text-accent"
        >
          {f.top}
          <ArrowUp
            size={14}
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  );
}