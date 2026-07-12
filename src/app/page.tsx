export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <p className="text-sm tracking-[0.4em] text-mute">MCR</p>
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
        Soul Atlas
      </h1>
      <p className="text-mute">Navigate the Universe of Souls</p>
      <div className="glass mt-6 px-6 py-4 text-sm text-mute">
        Platform foundation: Next.js / TypeScript / Tailwind. See docs/ROADMAP.md.
      </div>
    </main>
  );
}
