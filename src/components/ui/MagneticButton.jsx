import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const VARIANTS = {
  solid: {
    base: "grad-bg text-white hover:text-ink",
    fill: "bg-paper",
  },
  ghost: {
    base: "border border-paper/30 text-paper hover:border-transparent",
    fill: "grad-bg",
  },
};

export default function MagneticButton({
  as = "a",
  variant = "solid",
  strength = 0.28,
  arrow = true,
  children,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = as === "button" ? motion.button : motion.a;
  const v = VARIANTS[variant];

  return (
    <Comp
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`group relative inline-flex items-center overflow-hidden px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-500 disabled:opacity-60 ${v.base} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100 ${v.fill}`}
      />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {arrow && (
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-1"
          />
        )}
      </span>
    </Comp>
  );
}