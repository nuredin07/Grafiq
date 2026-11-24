import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./ui/Logo";
import LangSwitch from "./ui/LangSwitch";
import { useLang } from "../context/LanguageContext";
import { CONTACT, NAV_LINKS } from "../data/site";
import { EASE, EASE_IN_OUT } from "../utils/motion";

function RollLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-block h-[1.4em] overflow-hidden text-sm leading-[1.4em] tracking-wide"
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-full block text-accent transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full"
      >
        {children}
      </span>
    </a>
  );
}

export default function Navbar({ ready }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const closedClip = "circle(0% at 90% 3rem)";
  const openClip = "circle(150% at 90% 3rem)";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[padding,background-color,border-color] duration-500 ${
          open
            ? "border-transparent py-5"
            : scrolled
            ? "border-line bg-ink/70 py-3 backdrop-blur-xl"
            : "border-transparent py-6"
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <a href="#home" aria-label="GRAFIQ" onClick={close}>
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <RollLink key={l.key} href={l.href}>
                {t.nav[l.key]}
              </RollLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LangSwitch id="lang-pill-desktop" />
            </div>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-6">
                <motion.span
                  className="absolute left-0 top-0 block h-px w-full bg-paper"
                  animate={open ? { y: 5.5, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 block h-px w-full bg-paper"
                  animate={open ? { y: -5.5, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-8 pt-28 lg:hidden"
            initial={{ clipPath: closedClip }}
            animate={{ clipPath: openClip, transition: { duration: 0.9, ease: EASE_IN_OUT } }}
            exit={{ clipPath: closedClip, transition: { duration: 0.6, ease: EASE_IN_OUT } }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <li key={l.key} className="overflow-hidden">
                    <motion.a
                      href={l.href}
                      onClick={close}
                      className="display flex items-baseline gap-4 py-1 text-[clamp(2.2rem,11vw,3.5rem)]"
                      initial={{ y: "110%" }}
                      animate={{ y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.3 + i * 0.07 } }}
                      exit={{ y: "110%", transition: { duration: 0.3 } }}
                    >
                      <span className="font-mono text-xs tracking-normal text-accent">0{i + 1}</span>
                      {t.nav[l.key]}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="flex items-end justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              exit={{ opacity: 0 }}
            >
              <LangSwitch id="lang-pill-mobile" />
              <a href={`mailto:${CONTACT.email}`} className="font-mono text-xs text-fog">
                {CONTACT.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}