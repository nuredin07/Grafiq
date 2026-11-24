import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import RevealLines from "./ui/RevealLines";
import MagneticButton from "./ui/MagneticButton";
import { useLang } from "../context/LanguageContext";
import { fadeUp } from "../utils/motion";

const CHIP_POSITIONS = [
  { top: "12%", left: "8%", depth: 42 },
  { top: "30%", left: "78%", depth: -30 },
  { top: "56%", left: "0%", depth: 26 },
  { top: "76%", left: "66%", depth: -46 },
  { top: "90%", left: "26%", depth: 34 },
];

function Float({ sx, sy, depth, className = "", style, delay = 0, dur = 6, children }) {
  const x = useTransform(sx, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(sy, [-0.5, 0.5], [-depth, depth]);
  return (
    <motion.div style={{ x, y, ...style }} className={`absolute ${className}`}>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero({ ready }) {
  const { t } = useLang();
  const h = t.hero;

  const gx = useMotionValue(-600);
  const gy = useMotionValue(-600);
  const glowX = useSpring(gx, { stiffness: 70, damping: 20 });
  const glowY = useSpring(gy, { stiffness: 70, damping: 20 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });

  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    gx.set(px - 260);
    gy.set(py - 260);
    mx.set(px / r.width - 0.5);
    my.set(py / r.height - 0.5);
  };

  return (
    <section
      id="home"
      onPointerMove={onPointerMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-32"
    >
      {/* background details */}
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <motion.div
        aria-hidden="true"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, rgba(110,92,255,0.18) 0%, transparent 65%)",
        }}
        className="pointer-events-none absolute left-0 top-0 hidden h-[520px] w-[520px] md:block"
      />

      {/* visual composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-30%] top-[6%] aspect-square w-[min(110vw,780px)] opacity-40 sm:right-[-12%] sm:opacity-70 lg:right-[-4%] lg:opacity-100"
      >
        <motion.div
          className="relative h-full w-full"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          {/* soft ambient glow, echoing the logo */}
          <div
            className="absolute inset-[-8%]"
            style={{
              background:
                "radial-gradient(circle, rgba(79,91,255,0.22) 0%, rgba(188,53,251,0.08) 40%, transparent 68%)",
            }}
          />

          <Float sx={sx} sy={sy} depth={14} className="inset-0" dur={9}>
            <svg viewBox="0 0 400 400" className="spin-slow h-full w-full">
              <defs>
                <path id="grafiq-ring" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" />
              </defs>
              <text className="fill-fog font-mono" fontSize="12" letterSpacing="4">
                <textPath href="#grafiq-ring" textLength="1060" lengthAdjust="spacing">
                  GRAFIQ • DIGITAL SOLUTIONS • GRAFIQ • DIGITAL SOLUTIONS • GRAFIQ • DIGITAL SOLUTIONS •
                </textPath>
              </text>
            </svg>
          </Float>

          {/* gradient ring, like the logo */}
          <svg viewBox="0 0 400 400" className="spin-slow absolute inset-[11%] h-[78%] w-[78%]">
            <defs>
              <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2ca8fd" />
                <stop offset="0.5" stopColor="#4f5bff" />
                <stop offset="1" stopColor="#bc35fb" />
              </linearGradient>
            </defs>
            <circle
              cx="200"
              cy="200"
              r="196"
              fill="none"
              stroke="url(#hero-ring)"
              strokeWidth="2"
              style={{ filter: "drop-shadow(0 0 8px rgba(110,90,255,0.7))" }}
            />
          </svg>
          <div className="absolute inset-[30%] rounded-full border border-paper/15" />

          <Float sx={sx} sy={sy} depth={50} className="left-[26%] top-[26%] h-[34%] w-[34%]" dur={7}>
            <div className="grad-bg h-full w-full rounded-tl-full shadow-[0_0_60px_rgba(108,92,255,0.45)]" />
          </Float>
          <Float sx={sx} sy={sy} depth={-34} className="left-[52%] top-[48%] h-[26%] w-[26%]" dur={8}>
            <div className="flex h-full w-full rotate-12 items-end border border-accent/40 p-3 font-mono text-[11px] text-paper/70">
              {"<grafiq />"}
            </div>
          </Float>

          {h.chips.map((chip, i) => (
            <Float
              key={chip}
              sx={sx}
              sy={sy}
              depth={CHIP_POSITIONS[i].depth}
              style={{ top: CHIP_POSITIONS[i].top, left: CHIP_POSITIONS[i].left }}
              delay={i * 0.6}
              dur={5 + i}
            >
              <span className="block whitespace-nowrap border border-accent/30 bg-ink/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/80 backdrop-blur">
                {chip}
              </span>
            </Float>
          ))}
        </motion.div>
      </div>

      {/* content */}
      <div className="wrap relative z-10 my-auto">
        <motion.div
          className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-fog"
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
        >
          <span className="grad-bg h-px w-10" />
          {h.eyebrow}
        </motion.div>

        <RevealLines
          as="h1"
          lines={h.lines}
          trigger="ready"
          ready={ready}
          delay={0.45}
          lastClassName="grad-text w-fit"
          className="display text-[clamp(2.3rem,7.2vw,7.4rem)]"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <motion.div
            variants={fadeUp(1.1)}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            className="max-w-xl"
          >
            <p className="text-xl font-medium leading-snug sm:text-2xl">{h.sub}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-fog">{h.intro}</p>
          </motion.div>

          <motion.div
            variants={fadeUp(1.25)}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            className="flex flex-wrap gap-3 md:justify-end"
          >
            <MagneticButton href="#projects">{h.cta1}</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              {h.cta2}
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label={h.scroll}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fog xl:flex"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
      >
        {h.scroll}
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={14} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}