import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Subtle vertical parallax for whatever is placed inside (image or placeholder). */
export default function Parallax({ children, offset = 36, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale: 1.18 }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}