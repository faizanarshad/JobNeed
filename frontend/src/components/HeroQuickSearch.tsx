import { FormEvent, useState } from "react";
import { useSearchIntent } from "../context/SearchIntentContext";

const EXAMPLE_QUERIES = [
  "remote React contract",
  "junior data analyst",
  "senior backend engineer",
  "product designer, US",
];

export function HeroQuickSearch() {
  const { submitFromHero } = useSearchIntent();
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim()) submitFromHero(value.trim());
  }

  return (
    <div className="relative z-10 mx-auto -mt-10 w-full max-w-3xl px-4 sm:-mt-14">
      <div className="rounded-2xl border border-white/10 bg-gray-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5">
        <form onSubmit={handleSubmit} className="flex gap-2.5">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 transition-shadow focus-within:border-transparent focus-within:ring-2 focus-within:ring-sky-500/50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-400">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. remote React contract under 3 months"
              className="h-11 flex-1 border-none bg-transparent text-sm text-gray-100 outline-none placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="whitespace-nowrap rounded-xl bg-gradient-to-br from-sky-600 to-yellow-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-sky-600/25 transition-transform hover:brightness-110 active:scale-[0.98]"
          >
            Search jobs
          </button>
        </form>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {EXAMPLE_QUERIES.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => submitFromHero(q)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
