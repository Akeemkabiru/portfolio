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
      "A web application for interactive visualization of protein structures, ligand-binding sites, and mutations.",
    problem:
      "Studying a protein's structure, ligand-binding sites, or mutation impact typically means switching between disconnected desktop tools built for structural biologists, not the web.",
    approach:
      "Built a browser-based viewer that retrieves structures directly from the RCSB PDB public API and renders them interactively, so structural analysis is one link away rather than a local install.",
    architecture:
      "Integrates the PDB public API for structure retrieval with Mol*/NGL Viewer for in-browser 3D rendering of protein structures, ligand-binding sites, and mutations.",
    technologies: ["PDB API", "Mol* / NGL Viewer"],
    result: PLACEHOLDER,
    liveUrl: "https://memprot.vercel.app/",
    githubUrl: "https://github.com/Akeemkabiru/memprot",
  },
  {
    slug: "haptle-operations-dashboard",
    name: "Real-Time Operations Dashboard",
    summary:
      "A real-time admin dashboard giving Haptle Technology's team live visibility into platform activity.",
    problem:
      "Haptle's operations team needed live visibility into platform activity, vendor–user matching, and messaging — without manually refreshing or polling for updates.",
    approach:
      "Built a real-time admin dashboard with a responsive, performant interface, backed by WebSocket-driven chat and activity updates, plus an AI-powered agent that recommends vendor matches from contextual data.",
    architecture:
      "Next.js frontend with Zustand for state management and Tailwind CSS for the interface; WebSocket connections stream chat and activity events; an AI recommendation agent matches vendors to users based on contextual data.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "WebSockets"],
    result:
      "Delivered as Haptle Technology's real-time admin dashboard, combining live operational visibility with AI-assisted vendor matching.",
  },
  {
    slug: "etherea-booking-platform",
    name: "Booking Platform — Full-Stack Case Study",
    summary:
      "REST APIs, real-time availability sync, and secured access for a booking platform, delivered as a contract engagement.",
    problem:
      "Etherea needed booking, search, and cancellation workflows backed by APIs that stayed consistent under concurrent access, with availability reflected correctly across every connected client.",
    approach:
      "Built and integrated the REST APIs for booking, search, and cancellation, synchronized booking availability and UI state in real time via WebSockets, and secured the system end to end.",
    architecture:
      "REST API layer over MongoDB with optimized queries; WebSocket layer for real-time state sync; JWT authentication with refresh-token workflows and role-based access control; rate limiting and input validation at the API boundary.",
    technologies: ["Node.js", "REST APIs", "MongoDB", "WebSockets", "JWT"],
    result:
      "A booking system with synchronized real-time availability across clients and access secured via JWT, refresh tokens, and role-based access control.",
  },
  {
    slug: "monietab-fintech-platform",
    name: "Fintech Platform Frontend",
    summary:
      "A performance- and security-conscious fintech interface for saving and managing funds.",
    problem:
      "A fintech product needs interfaces that load fast, rank well, and handle wallet operations securely — with performance and security treated as first-class, not an afterthought.",
    approach:
      "Architected the platform on Next.js with server-side rendering for performance and SEO, split and lazy-loaded code to keep initial loads light, and integrated third-party wallet APIs behind secure, authenticated interfaces.",
    architecture:
      "Next.js with SSR and code splitting; modular, responsive UI components built with Tailwind CSS and Framer Motion; JWT/OAuth authentication; third-party wallet API integration for fund management.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "JWT / OAuth"],
    result:
      "A production fintech interface combining SSR performance, code-splitting, and secure wallet integration for saving and managing funds.",
  },
];
