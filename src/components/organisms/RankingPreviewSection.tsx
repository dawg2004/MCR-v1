import Link from "next/link";
import { GlassCard } from "@/components/atoms/GlassCard";
import { SriBadge } from "@/components/atoms/SriBadge";
import { people } from "@/lib/dummy-data/people";

export function RankingPreviewSection() {
  const top3 = [...people].sort((a, b) => b.sri.soul - a.sri.soul).slice(0, 3);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-medium text-foreground">ランキング</h2>
        <Link href="/ranking" className="text-sm text-mute hover:text-cyan">
          ランキングをすべて見る →
        </Link>
      </div>
      <GlassCard className="flex flex-col divide-y divide-line p-2">
        {top3.map((person, index) => (
          <div
            key={person.id}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <div className="flex items-center gap-4">
              <span className="w-5 text-sm text-faint">{index + 1}</span>
              <span className="font-medium text-foreground">{person.name}</span>
            </div>
            <SriBadge label="魂" value={person.sri.soul} />
          </div>
        ))}
      </GlassCard>
    </section>
  );
}
