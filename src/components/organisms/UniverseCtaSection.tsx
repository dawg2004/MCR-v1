import Link from "next/link";
import { GlassCard } from "@/components/atoms/GlassCard";

export function UniverseCtaSection() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-lg font-medium text-foreground">Universeへ</h2>
      <GlassCard className="flex flex-col items-start gap-4 p-8">
        <p className="max-w-md text-mute">
          人と人との関係、ネットワーク、共鳴を宇宙のように可視化する。Soul
          Atlasの全体像をここから見渡す。
        </p>
        <Link
          href="/universe"
          className="rounded-full bg-purple px-6 py-2.5 text-sm font-medium text-foreground transition hover:opacity-90"
        >
          宇宙を見る
        </Link>
      </GlassCard>
    </section>
  );
}
