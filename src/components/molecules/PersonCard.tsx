import { GlassCard } from "@/components/atoms/GlassCard";
import { SriBadge } from "@/components/atoms/SriBadge";
import type { Person } from "@/lib/dummy-data/people";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  const initial = person.name.charAt(0);

  return (
    <GlassCard className="flex w-56 shrink-0 flex-col gap-4 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line-2 bg-abyss-2 text-lg font-semibold text-cyan">
          {initial}
        </div>
        <div>
          <p className="font-medium text-foreground">{person.name}</p>
          <p className="text-xs text-faint">{person.soulCode}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <SriBadge label="仕事" value={person.sri.work} />
        <SriBadge label="恋愛" value={person.sri.love} />
      </div>
    </GlassCard>
  );
}
