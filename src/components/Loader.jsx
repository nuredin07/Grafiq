import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { EASE, EASE_IN_OUT } from "../utils/motion";

export default function Loader({ onDone }) {
  const { t } = useLang();
  const [count, setCount] = useState(0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 300 : 2000;
    const start = performance.now();
    let raf;
    let timer;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timer = setTimeout(() => doneRef.current(), reduce ? 0 : 350);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  const feather = "radial-gradient(closest-side, #000 86%, transparent 100%)";

  return (
    <motion.div
      role="status"
      aria-label={t.a11y.loading}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-6 sm:p-10"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: EASE_IN_OUT } }}
    >
      <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
        <span>© {new Date().getFullYear()}</span>
        <span>{t.loader.tagline}</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <motion.img
          src="/logo.png"
          alt="Grafiq"
          draggable={false}
          className="w-[min(78vw,50vh,460px)] select-none mix-blend-screen"
          style={{ WebkitMaskImage: feather, maskImage: feather }}
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
        />
      </div>

      <div>
        <div className="mb-4 flex items-end justify-between font-mono text-xs uppercase tracking-[0.2em]">
          <span className="flex gap-2 overflow-hidden">
            {t.loader.tagline.split(" ").map((w, i) => (
              <motion.span
                key={`${i}-${w}`}
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.7 + i * 0.1 }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="tabular-nums text-accent">{String(count).padStart(3, "0")}</span>
        </div>
        <div className="h-px w-full bg-line">
          <div
            className="grad-bg h-full origin-left"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
      </div>
    </motion.div>
  );
}