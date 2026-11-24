import { motion } from "motion/react";
import { useLang } from "../../context/LanguageContext";

export default function LangSwitch({ id = "lang-pill" }) {
  const { lang, setLang, languages, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className="flex items-center gap-1 font-mono text-xs"
    >
      {languages.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className="relative px-2.5 py-1.5"
          >
            {active && (
              <motion.span
                layoutId={id}
                className="grad-bg absolute inset-0"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span
              className={`relative transition-colors ${
                active ? "text-white" : "text-fog hover:text-paper"
              }`}
            >
              {l.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}