import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap } from "../utils/gsap";
import SectionLabel from "./ui/SectionLabel";
import ProjectVisual from "./ProjectVisual";
import { useLang } from "../context/LanguageContext";
import { projects } from "../data/projects";

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop: pinned horizontal scroll with clip-path reveals.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current;
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + dist(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + dist(),
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray("[data-reveal]", sectionRef.current).forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              containerAnimation: tween,
              start: "left 92%",
              end: "left 55%",
              scrub: true,
            },
          }
        );
      });
    });

    // Tablet / mobile: normal vertical flow with a reveal on enter.
    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-reveal]", sectionRef.current).forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="hs-section">
      <div ref={trackRef} className="hs-track">
        <div className="hs-intro">
          <SectionLabel index="03" label={p.label} />
          <h2 className="display mt-8 text-[clamp(2.2rem,4.4vw,4.2rem)]">{p.title}</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-fog">{p.intro}</p>
          <p className="mt-10 hidden items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent lg:flex">
            {p.hint}
            <ArrowDown size={14} aria-hidden="true" className="-rotate-90" />
          </p>
        </div>

        {projects.map((project, i) => {
          const desc = (p.items[project.id]?.description || p.defaultDescription).replace(
            "{name}",
            project.name
          );
          return (
            <article key={project.id} className="hs-panel">
              <div className="hs-panel-inner group">
                <div data-reveal="" className="hs-visual">
                  <ProjectVisual project={project} index={i} />
                </div>

                <div>
                  <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-fog">
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="h-px w-8 bg-line" />
                    <span>{p.types[project.type]}</span>
                  </div>

                  <h3 className="display mt-5 text-[clamp(2rem,3.6vw,3.6rem)]">{project.name}</h3>
                  <p className="mt-5 max-w-md leading-relaxed text-fog">{desc}</p>

                  <div className="mt-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                      {p.servicesLabel}
                    </p>
                    {project.services.length ? (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.services.map((key) => (
                          <li
                            key={key}
                            className="border border-paper/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
                          >
                            {t.services.items[key].title}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-paper/60">{p.servicesEmpty}</p>
                    )}
                  </div>

                  <div className="mt-8">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold uppercase tracking-[0.08em] text-accent"
                      >
                        {p.visit}
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1"
                        />
                      </a>
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-fog">{p.soon}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hs-bar" aria-hidden="true">
        <div ref={barRef} />
      </div>
    </section>
  );
}