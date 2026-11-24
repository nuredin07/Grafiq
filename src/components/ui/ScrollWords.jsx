import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../utils/gsap";

/** Words fade in progressively as the paragraph scrolls through the viewport (GSAP ScrollTrigger scrub). */
export default function ScrollWords({ text, className = "" }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const els = ref.current.querySelectorAll("[data-w]");
      gsap.fromTo(
        els,
        { opacity: 0.16 },
        {
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );
    });
    return () => mm.revert();
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={`${i}-${w}`} data-w="">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}