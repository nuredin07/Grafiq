export default function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-fog">
      <span className="text-accent">{index}</span>
      <span aria-hidden="true" className="h-px w-12 bg-line" />
      <span>{label}</span>
    </div>
  );
}