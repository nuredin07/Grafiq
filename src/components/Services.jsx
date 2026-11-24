import { motion } from "motion/react";
import { CreditCard, Globe, Megaphone, QrCode, Shapes } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import RevealLines from "./ui/RevealLines";
import { useLang } from "../context/LanguageContext";
import { SERVICE_KEYS } from "../data/site";
import { fadeUp, viewOnce } from "../utils/motion";

const ICONS = { website: Globe, pos: CreditCard, qr: QrCode, marketing: Megaphone, branding: Shapes };

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="wrap">
        <SectionLabel index="02" label={s.label} />
        <RevealLines
          as="h2"
          lines={s.title}
          className="display mt-8 text-[clamp(2.6rem,8vw,7.5rem)]"
        />
      </div>

      <ul className="mt-16 border-b border-line">
        {SERVICE_KEYS.map((key, i) => {
          const Icon = ICONS[key];
          const item = s.items[key];
          return (
            <motion.li
              key={key}
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={viewOnce}
              className="group relative overflow-hidden border-t border-line"
            >
              <span
                aria-hidden="true"
                className="grad-bg absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100"
              />
              <div className="wrap relative grid items-center gap-4 py-8 transition-colors duration-500 group-hover:text-white lg:grid-cols-[4rem_1.2fr_1fr_4.5rem] lg:gap-10 lg:py-12">
                <span className="font-mono text-xs text-fog transition-colors duration-500 group-hover:text-white/70">
                  0{i + 1}
                </span>
                <h3 className="display text-[clamp(1.6rem,3.4vw,3.1rem)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-3">
                  {item.title}
                </h3>
                <p className="max-w-md leading-relaxed text-fog transition-colors duration-500 group-hover:text-white/85">
                  {item.text}
                </p>
                <span className="hidden h-14 w-14 place-items-center justify-self-end border border-paper/20 transition-all duration-500 group-hover:rotate-90 group-hover:border-white lg:grid">
                  <Icon size={22} aria-hidden="true" />
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}