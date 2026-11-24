import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { ScrollTrigger } from "./utils/gsap";
import { useLang } from "./context/LanguageContext";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { lang, t } = useLang();
  const [loaded, setLoaded] = useState(false);

  // Lock scroll while the loader is visible, then recalculate scroll triggers.
  useEffect(() => {
    document.body.style.overflow = loaded ? "" : "hidden";
    if (loaded) {
      window.scrollTo(0, 0);
      const id = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => cancelAnimationFrame(id);
    }
  }, [loaded]);

  // Text length changes between languages, so refresh trigger positions.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 1200);
    return () => clearTimeout(id);
  }, [lang]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <a
        href="#main"
        className="fixed left-4 top-4 z-[200] -translate-y-24 bg-accent px-4 py-2 font-mono text-xs uppercase text-ink focus:translate-y-0"
      >
        {t.a11y.skip}
      </a>

      <Navbar ready={loaded} />
      <main id="main">
        <Hero ready={loaded} />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}