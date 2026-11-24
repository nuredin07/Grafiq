import { motion } from "motion/react";
import SectionLabel from "./ui/SectionLabel";
import RevealLines from "./ui/RevealLines";
import { useLang } from "../context/LanguageContext";
import { WHY_KEYS } from "../data/site";
import { fadeUp, viewOnce } from "../utils/motion";

export default function WhyUs() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section id="why" className="relative py-28 lg:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="self-start lg:sticky lg:top-32">
          <SectionLabel index="04" label={w.label} />
          <RevealLines
            as="h2"
            lines={w.title}
            className="display mt-8 text-[clamp(2.4rem,6vw,5.5rem)]"
          />
        </div>

        <ul>
          {WHY_KEYS.map((key, i) => (
            <motion.li
              key={key}
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={viewOnce}
              className="group relative grid grid-cols-[auto_1fr] gap-6 border-t border-line py-9 last:border-b"
            >
              <span
                aria-hidden="true"
                className="grad-bg absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
              />
              <span className="pt-1 font-mono text-xs text-accent">0{i + 1}</span>
              <div className="transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-2">
                <h3 className="title text-[clamp(1.4rem,2.6vw,2.2rem)]">{w.items[key].title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-fog">{w.items[key].text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}