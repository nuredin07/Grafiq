import { motion } from "motion/react";
import SectionLabel from "./ui/SectionLabel";
import ScrollWords from "./ui/ScrollWords";
import RevealLines from "./ui/RevealLines";
import Parallax from "./ui/Parallax";
import { useLang } from "../context/LanguageContext";
import { FOUNDERS } from "../data/site";
import { fadeUp, viewOnce } from "../utils/motion";

const PILLARS = ["philosophy", "approach", "mission"];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="relative py-28 lg:py-44">
      <div className="wrap">
        <SectionLabel index="01" label={a.label} />

        <ScrollWords
          text={a.statement}
          className="title mt-10 max-w-6xl text-[clamp(1.7rem,4.2vw,4rem)]"
        />

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {PILLARS.map((key, i) => (
            <motion.div
              key={key}
              variants={fadeUp(i * 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewOnce}
              className="border-t border-line pt-6"
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="display mt-4 text-2xl">{a.pillars[key].title}</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-fog">{a.pillars[key].text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-28 lg:mt-40">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">{a.foundersLabel}</p>
          <RevealLines
            as="h3"
            lines={a.foundersTitle}
            className="display mt-5 text-[clamp(2rem,5vw,4.5rem)]"
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-16">
            {FOUNDERS.map((f, i) => (
              <motion.article
                key={f.id}
                variants={fadeUp(i * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={viewOnce}
                className={i === 1 ? "md:mt-24" : ""}
              >
                <Parallax className="aspect-[4/5] bg-panel" offset={28}>
                  {f.photo ? (
                    <img
                      src={f.photo}
                      alt={f.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="hatch grid h-full w-full place-items-center font-mono text-xs uppercase tracking-[0.2em] text-fog">
                      {a.photo}
                    </div>
                  )}
                </Parallax>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h4 className="display text-4xl">{f.name}</h4>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{a.role}</span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-fog">{a.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}