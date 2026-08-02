import { SearchBar } from "@/components/molecules/SearchBar";
import { RecentPeopleSection } from "@/components/organisms/RecentPeopleSection";
import { RankingPreviewSection } from "@/components/organisms/RankingPreviewSection";
import { UniverseCtaSection } from "@/components/organisms/UniverseCtaSection";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-16 md:px-12">
      <section className="flex flex-col items-center gap-6 py-8 text-center">
        <p className="text-sm tracking-[0.4em] text-mute">MCR</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Soul Atlas
        </h1>
        <p className="text-mute">Navigate the Universe of Souls</p>
        <SearchBar />
      </section>

      <RecentPeopleSection />
      <RankingPreviewSection />
      <UniverseCtaSection />
    </main>
  );
}
