export type Presentation = {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  status: string;
};

export const presentations: Presentation[] = [
  {
    title:
      "Host Immunogenetics and Immune Response: Determinants of Susceptibility and Disease Severity in Diphtheria Patients in Low- and Middle-Income Countries",
    authors: [
      "Okocha N.O.",
      "Omeluche P.D.",
      "Nwokeoma B.",
      "Eze M.C.",
      "Eko O.F.",
      "Fabuyi F.",
      "Idoko A.",
      "Giwa H.J.",
      "Akeem K.S.",
      "Olutekunbi O.O.",
      "Olusegun T.G.",
    ],
    venue: "NextGen Africa Biomedical Science & Innovation Symposium",
    date: "October 2025",
    status: "Presented · abstract submitted to BioMed Central Journal",
  },
];
