export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: string;
  technologies: string[];
  result: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  // Optional gallery for the /engineering case study — add as many as you like
  // and the project card automatically becomes an auto-advancing carousel.
  // Falls back to `image` when omitted.
  images?: string[];
  flagship?: boolean;
};

const PLACEHOLDER = "PLACEHOLDER — replace with real detail before publishing.";

export const projects: Project[] = [
  {
    slug: "protein-visualizer",
    name: "Protein Visualizer",
    flagship: true,
    image: "/memprot.png",
    summary:
      "Interactive visualization of protein structures, ligand-binding sites, and mutations.",
    problem:
      "Structural biology tools are desktop-only, disconnected from the web.",
    approach:
      "A browser-based viewer that pulls structures live from the RCSB PDB API — no install required.",
    architecture:
      "PDB API for structure retrieval, Mol*/NGL Viewer for in-browser 3D rendering.",
    technologies: ["PDB API", "Mol* / NGL Viewer"],
    result: PLACEHOLDER,
    liveUrl: "https://memprot.vercel.app/",
    githubUrl: "https://github.com/Akeemkabiru/memprot",
  },
  {
    slug: "haptle-operations-dashboard",
    name: "Real-Time Operations Dashboard",
    image: "/memprot.png",
    summary:
      "Live visibility into platform activity for Haptle Technology's operations team.",
    problem:
      "Operations needed live visibility into activity and vendor matching — without manual polling.",
    approach:
      "A real-time dashboard with WebSocket-driven updates and an AI agent for vendor matching.",
    architecture:
      "Next.js, Zustand, and Tailwind CSS on the frontend; WebSockets stream live events.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "WebSockets",
    ],
    result:
      "Haptle's real-time admin dashboard, combining live visibility with AI-assisted matching.",
  },
  {
    slug: "etherea-booking-platform",
    image: "/pikgo-dasboard.png",
    name: "Booking Platform — Full-Stack Case Study",
    summary:
      "Booking APIs with real-time availability sync, built as a contract engagement.",
    problem:
      "Booking, search, and cancellation needed to stay consistent under concurrent access.",
    approach:
      "Built the REST APIs, synced availability in real time via WebSockets, and secured access end to end.",
    architecture:
      "REST over MongoDB; WebSockets for state sync; JWT auth with refresh tokens and role-based access.",
    technologies: ["Node.js", "REST APIs", "MongoDB", "WebSockets", "JWT"],
    result:
      "A booking system with real-time sync and secured, role-based API access.",
  },
  {
    slug: "monietab-fintech-platform",
    name: "Fintech Platform Frontend",
    image: "/regnum.png",
    summary:
      "A performance- and security-focused frontend for a fintech platform.",
    problem:
      "A fintech interface needs to load fast, rank well, and handle funds securely.",
    approach:
      "Built on Next.js with SSR, code-splitting, and secure wallet API integration.",
    architecture:
      "Next.js with SSR and code splitting; Tailwind CSS and Framer Motion for UI; JWT/OAuth.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "JWT / OAuth"],
    result:
      "A production fintech frontend combining SSR performance with secure wallet integration.",
  },
  {
    slug: "monietab-fintech-platform",
    name: "Fintech Platform Frontend",
    image: "/facccion-one.png",
    summary:
      "A performance- and security-focused frontend for a fintech platform.",
    problem:
      "A fintech interface needs to load fast, rank well, and handle funds securely.",
    approach:
      "Built on Next.js with SSR, code-splitting, and secure wallet API integration.",
    architecture:
      "Next.js with SSR and code splitting; Tailwind CSS and Framer Motion for UI; JWT/OAuth.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "JWT / OAuth"],
    result:
      "A production fintech frontend combining SSR performance with secure wallet integration.",
  },
];
