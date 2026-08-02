import { PersonCard } from "@/components/molecules/PersonCard";
import { people } from "@/lib/dummy-data/people";

export function RecentPeopleSection() {
  const recent = people.slice(0, 5);

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-lg font-medium text-foreground">最近見た人物</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {recent.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
