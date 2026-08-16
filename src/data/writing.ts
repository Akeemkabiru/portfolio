export type WritingEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: "Engineering" | "Computational Biology" | "Notes";
};

// No entries published yet. Add here as pieces go live —
// the /writing page renders an elegant empty state until then.
export const writingEntries: WritingEntry[] = [];
