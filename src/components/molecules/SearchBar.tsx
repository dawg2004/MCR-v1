"use client";

import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("search submitted:", query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass flex w-full max-w-xl items-center gap-3 px-5 py-4"
    >
      <span className="text-mute">search</span>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="名前で検索"
        className="w-full bg-transparent text-foreground placeholder:text-faint focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-foreground transition hover:opacity-90"
      >
        検索
      </button>
    </form>
  );
}
