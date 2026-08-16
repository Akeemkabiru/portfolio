export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  doi: string;
  url: string;
  description: string;
  contribution?: string;
};

// Peer-reviewed / journal publications. Empty for now — the Lassa vaccine
// work is a manuscript in preparation, not yet submitted or published.
// Add entries here once confirmed; do not list anything as "published"
// before it actually is.
export const publications: Publication[] = [];

export const manuscriptsInPreparation = [
  {
    title:
      "Multi-epitope mRNA vaccine design against Lassa virus using conserved NP and GPC epitopes",
    status: "Manuscript in preparation for journal submission",
    description:
      "Computational vaccine design work at Helix Biogen Research Institute — epitope prediction, molecular docking, and molecular dynamics simulation of a multi-epitope mRNA construct.",
  },
];
