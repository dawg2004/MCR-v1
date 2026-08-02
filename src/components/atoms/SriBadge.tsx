interface SriBadgeProps {
  label: string;
  value: number;
}

function tierColor(value: number): string {
  if (value >= 95) return "text-gold border-gold/50";
  if (value >= 90) return "text-purple border-purple/50";
  if (value >= 80) return "text-primary border-primary/50";
  return "text-mute border-line-2";
}

export function SriBadge({ label, value }: SriBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${tierColor(
        value,
      )}`}
    >
      <span className="text-faint">{label}</span>
      <span className="font-semibold">{value}</span>
    </span>
  );
}
