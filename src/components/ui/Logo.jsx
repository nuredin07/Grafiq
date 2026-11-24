export default function Logo({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight ${className}`}
    >
      <span aria-hidden="true" className="logo-mark inline-block h-9 w-9 shrink-0" />
      <span>Grafiq</span>
    </span>
  );
}