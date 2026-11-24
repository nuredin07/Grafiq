import { motion } from "motion/react";
import { EASE } from "../../utils/motion";

/**
 * Masked line-by-line text reveal.
 * trigger="view"  -> plays when scrolled into view
 * trigger="ready" -> plays when `ready` becomes true (used by the hero)
 */
export default function RevealLines({
  lines,
  as: Tag = "div",
  className = "",
  lastClassName = "",
  ready = true,
  trigger = "view",
  delay = 0,
  stagger = 0.09,
}) {
  const arr = Array.isArray(lines) ? lines : [lines];

  const props = (i) => ({
    initial: { y: "112%" },
    transition: { duration: 1, ease: EASE, delay: delay + i * stagger },
    ...(trigger === "view"
      ? { whileInView: { y: 0 }, viewport: { once: true, margin: "0px 0px -10% 0px" } }
      : { animate: ready ? { y: 0 } : { y: "112%" } }),
  });

  return (
    <Tag className={className}>
      {arr.map((line, i) => (
        <span key={`${i}-${line}`} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
          <motion.span
            className={`block ${i === arr.length - 1 ? lastClassName : ""}`}
            {...props(i)}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}