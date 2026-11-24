// Generated geometric visual used until a project has an `image` in src/data/projects.js.

const FILL = "url(#grafiq-grad)";

function Defs() {
  return (
    <defs>
      <linearGradient id="grafiq-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2ca8fd" />
        <stop offset="0.5" stopColor="#4f5bff" />
        <stop offset="1" stopColor="#bc35fb" />
      </linearGradient>
    </defs>
  );
}

function Concentric() {
  return (
    <g fill="none" className="stroke-paper/25">
      {[40, 80, 120, 160, 200].map((r) => (
        <circle key={r} cx="200" cy="230" r={r} />
      ))}
      <path d="M200 30A200 200 0 0 1 400 230H200z" fill={FILL} className="stroke-none" />
    </g>
  );
}

function Stripes() {
  return (
    <g>
      {Array.from({ length: 16 }, (_, i) => (
        <line key={i} x1={i * 34 - 140} y1="500" x2={i * 34 + 160} y2="0" className="stroke-paper/20" />
      ))}
      <rect x="230" y="60" width="110" height="110" fill={FILL} />
    </g>
  );
}

function Dots() {
  return (
    <g>
      {Array.from({ length: 80 }, (_, n) => {
        const c = n % 8;
        const r = Math.floor(n / 8);
        const hot = (c + r) % 5 === 0;
        return (
          <circle
            key={n}
            cx={36 + c * 47}
            cy={40 + r * 47}
            r={hot ? 9 : 3}
            fill={hot ? FILL : undefined}
            className={hot ? undefined : "fill-paper/30"}
          />
        );
      })}
    </g>
  );
}

function HalfCircles() {
  return (
    <g>
      <path d="M0 500A200 200 0 0 1 400 500z" fill={FILL} />
      {[1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${i * 40} 500A${200 - i * 40} ${200 - i * 40} 0 0 1 ${400 - i * 40} 500z`}
          fill="none"
          className="stroke-ink/60"
        />
      ))}
      <rect x="40" y="60" width="150" height="150" fill="none" className="stroke-paper/30" />
    </g>
  );
}

function Squares() {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={70 + i * 22}
          y={130 + i * 22}
          width={260 - i * 44}
          height={260 - i * 44}
          transform={`rotate(${i * 9} 200 260)`}
          fill="none"
          className="stroke-paper/30"
        />
      ))}
      <rect x="180" y="240" width="40" height="40" fill={FILL} />
    </g>
  );
}

const SHAPES = [Concentric, Stripes, Dots, HalfCircles, Squares];

export default function ProjectVisual({ project, index }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
      />
    );
  }

  const Shape = SHAPES[index % SHAPES.length];
  return (
    <>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-2 group-hover:scale-110"
      >
        <Defs />
        <Shape />
      </svg>
      <span
        aria-hidden="true"
        className="display outline-text absolute bottom-5 left-5 right-5 text-[clamp(1.6rem,3.2vw,2.8rem)] leading-[0.95]"
      >
        {project.name}
      </span>
    </>
  );
}