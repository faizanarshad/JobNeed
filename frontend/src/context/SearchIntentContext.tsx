import { createContext, ReactNode, useContext, useState } from "react";
import { scrollToId } from "../lib/scroll";

interface SearchIntentState {
  /** The most recent query submitted from outside the Search section itself
   * (e.g. the hero quick-search) - Home.tsx watches this and runs the
   * search, since the two live in different parts of the component tree. */
  heroQuery: string | null;
  submitFromHero: (query: string) => void;
}

const SearchIntentContext = createContext<SearchIntentState | null>(null);

export function SearchIntentProvider({ children }: { children: ReactNode }) {
  const [heroQuery, setHeroQuery] = useState<string | null>(null);

  function submitFromHero(query: string) {
    setHeroQuery(query);
    scrollToId("search");
  }

  return (
    <SearchIntentContext.Provider value={{ heroQuery, submitFromHero }}>{children}</SearchIntentContext.Provider>
  );
}

export function useSearchIntent() {
  const ctx = useContext(SearchIntentContext);
  if (!ctx) throw new Error("useSearchIntent must be used within a SearchIntentProvider");
  return ctx;
}
