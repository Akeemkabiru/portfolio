export type ExperienceEntry = {
  id: string;
  category: "engineering" | "research" | "clinical";
  role: string;
  org: string;
  period: string;
  location?: string;
  supervisor?: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "haptle",
    category: "engineering",
    role: "Software Engineer / DevOps",
    org: "Haptle Technology",
    period: "September 2024–Present",
    location: "Nigeria · Full-time",
    summary:
      "Real-time admin tooling, AI-assisted matching, and the deployment pipelines behind them.",
    bullets: [
      "Built a real-time admin dashboard using Next.js, TypeScript, Zustand, and Tailwind CSS to surface live operational data through a performant, responsive interface.",
      "Implemented real-time chat and activity updates using WebSockets to support messaging and event-driven workflows.",
      "Developed an AI-powered recommendation agent to match vendors with appropriate users based on contextual data.",
      "Collaborated with backend and design teams; contributed to technical decisions, code reviews, and engineering best practices.",
      "Maintained deployment pipelines and cloud infrastructure as part of ongoing DevOps responsibilities.",
    ],
  },
  {
    id: "etherea",
    category: "engineering",
    role: "Fullstack Engineer",
    org: "Etherea",
    period: "July 2025–September 2025",
    location: "Nigeria · Contract",
    summary:
      "A compact full-stack case study — booking system APIs, real-time sync, and application security.",
    bullets: [
      "Built and integrated REST APIs for booking, search, and cancellation workflows, and optimized MongoDB queries.",
      "Implemented WebSocket-based real-time updates to keep booking availability and UI state synchronized across clients.",
      "Implemented JWT authentication, refresh-token workflows, and role-based access control.",
      "Applied rate limiting, input validation, and HTTPS/security best practices to protect application data.",
    ],
  },
  {
    id: "monietab",
    category: "engineering",
    role: "Frontend Engineer",
    org: "Monietab",
    period: "November 2024–June 2025",
    location: "Nigeria · Full-time",
    summary:
      "Fintech platform architecture — performance, security, and frontend engineering combined.",
    bullets: [
      "Architected a fintech platform using Next.js, using SSR to improve performance and SEO.",
      "Implemented code splitting and lazy loading; built modular, responsive UI components with Tailwind CSS and Framer Motion.",
      "Integrated third-party wallet APIs and built secure interfaces for users to save and manage funds.",
      "Implemented JWT/OAuth authentication.",
    ],
  },
  {
    id: "helix-biogen",
    category: "research",
    role: "Graduate Research Assistant",
    org: "Helix Biogen Research Institute",
    period: "October 2025–Present",
    supervisor: "Prof. O.E. Kolawole",
    summary:
      "Computational vaccine design work on Lassa virus — from sequence analysis through molecular dynamics and systems-biology modeling.",
    bullets: [
      "Retrieved and analyzed Lassa virus NP and GPC proteome sequences; performed multiple sequence alignment and used custom Biopython scripts to extract conserved regions.",
      "Assessed antigenicity, allergenicity, and immunogenicity of conserved segments using VaxiJen, AllerTOP, NetMHCpan, and IEDB.",
      "Designed multi-epitope mRNA vaccine constructs and evaluated predicted HLA interactions through molecular docking and GROMACS-based molecular dynamics simulations.",
      "Extended evaluation with systems-biology modeling to examine immune activation pathways.",
      "Consolidating computational findings into a manuscript in preparation for journal submission.",
    ],
  },
  {
    id: "lead-student-researcher",
    category: "research",
    role: "Lead Student Researcher",
    org: "Department of Biochemistry, Obafemi Awolowo University",
    period: "November 2023–September 2024",
    supervisor: "Prof. R.O. Osoniyi",
    summary:
      "Phylogenetic analysis of West African HIV-1 envelope gene sequences — the basis of my undergraduate thesis.",
    bullets: [
      "Conducted phylogenetic analysis of West African HIV-1 envelope gene sequences using MUSCLE for alignment and IQ-TREE for model selection and tree inference.",
      "Generated and annotated phylogenetic trees with iTOL to evaluate regional genetic diversity and transmission structure.",
      "Resolved distinct clades connecting Nigerian and Gambian isolates, establishing evidence for cross-regional evolutionary patterns.",
    ],
  },
  {
    id: "undergrad-research-assistant",
    category: "research",
    role: "Undergraduate Research Assistant",
    org: "Biochemistry Research Laboratory G.23, Obafemi Awolowo University",
    period: "November 2023–January 2024",
    supervisor: "Prof. R.O. Osoniyi",
    summary:
      "In-vitro evaluation of antioxidant and antidiabetic activity of Mangifera indica extracts.",
    bullets: [
      "Evaluated antioxidant and antidiabetic activity of Mangifera indica extracts using in-vitro biochemical assays.",
      "Performed α-glucosidase and α-amylase inhibition tests, antioxidant screening, and phytochemical characterization.",
      "Analyzed assay outputs to link phenolic composition with enzyme-inhibition strength, establishing functional relevance of M. indica bioactive compounds.",
    ],
  },
  {
    id: "clinical-laboratory-trainee",
    category: "clinical",
    role: "Clinical Laboratory Trainee",
    org: "Department of Chemical Pathology, OAUTHC",
    period: "July 2023–September 2024",
    summary:
      "Applied clinical biochemistry training alongside academic research.",
    bullets: [
      "Operated point-of-care biochemical testing platforms and gained applied experience in clinical biochemistry workflows.",
      "Performed metabolic and hepatic function assays using the Reflotron system, including enzyme and metabolite quantification.",
      "Interpreted patient data to evaluate biomarker patterns.",
    ],
  },
];
