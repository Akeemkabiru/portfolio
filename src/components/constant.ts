export const projects = [
  {
    id: 1,
    title: "Real-Time Analytics Dashboard",
    description:
      "Enterprise-grade analytics platform with real-time data processing, WebSocket updates, and interactive visualizations. Handles 100k+ events per second with sub-second latency.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Recharts",
      "Redis",
    ],
    category: "Full-Stack",
    image: "/projects/dashboard.png",
    live: "https://analytics-dashboard-demo.vercel.app",
    code: "https://github.com/akeemkabiru/analytics-dashboard",
    impact:
      "Increased data processing efficiency by 300%, reduced latency from 5s to 200ms",
    metrics: { users: "50K+", uptime: "99.98%", dataPoints: "1M+/day" },
  },
  {
    id: 2,
    title: "Distributed Payment Processing System",
    description:
      "Highly available payment processing microservice with load balancing, circuit breakers, and comprehensive security. Processes $10M+ in transactions daily.",
    tags: [
      "Node.js",
      "Express",
      "Stripe API",
      "Redis",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
    category: "Backend",
    image: "/projects/payment.png",
    live: "https://payment-system-demo.vercel.app",
    code: "https://github.com/akeemkabiru/payment-processor",
    impact:
      "Achieved 99.99% uptime, reduced fraud by 98%, improved settlement time by 40%",
    metrics: {
      transactions: "100K+/day",
      volume: "$10M+",
      reliability: "99.99%",
    },
  },
  {
    id: 3,
    title: "AI-Powered Content Generator",
    description:
      "Intelligent content generation platform leveraging advanced LLMs with streaming responses, caching strategies, and multi-language support.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI API",
      "Vercel AI SDK",
      "Tailwind CSS",
    ],
    category: "Full-Stack",
    image: "/projects/ai-content.png",
    live: "https://ai-content-generator-demo.vercel.app",
    code: "https://github.com/akeemkabiru/ai-content-gen",
    impact:
      "Reduced content creation time by 85%, improved user satisfaction to 4.8/5 stars",
    metrics: {
      users: "25K+",
      generated: "500K+ pieces",
      satisfaction: "4.8/5",
    },
  },
  {
    id: 4,
    title: "Cloud Infrastructure Orchestration",
    description:
      "Infrastructure-as-code platform for automated deployment, scaling, and monitoring of containerized applications with multi-region support.",
    tags: [
      "TypeScript",
      "AWS SDK",
      "Docker",
      "Terraform",
      "GraphQL",
      "PostgreSQL",
    ],
    category: "Backend",
    image: "/projects/infrastructure.png",
    live: "https://infra-platform-demo.vercel.app",
    code: "https://github.com/akeemkabiru/cloud-orchestrator",
    impact:
      "Reduced deployment time from 2 hours to 5 minutes, cut infrastructure costs by 45%",
    metrics: { deployments: "1K+", uptime: "99.95%", costSavings: "45%" },
  },
  {
    id: 5,
    title: "E-Commerce Platform with AI Recommendations",
    description:
      "Full-stack e-commerce solution with ML-powered product recommendations, real-time inventory management, and advanced search capabilities.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "TensorFlow",
      "Redis",
    ],
    category: "Full-Stack",
    image: "/projects/ecommerce.png",
    live: "https://ecommerce-ai-demo.vercel.app",
    code: "https://github.com/akeemkabiru/ecommerce-ai",
    impact:
      "Increased AOV by 32%, improved conversion rate to 4.2%, reduced cart abandonment by 28%",
    metrics: { gmv: "$5M+/month", conversion: "4.2%", aov: "+32%" },
  },
  {
    id: 6,
    title: "Real-Time Collaborative Editor",
    description:
      "Google Docs-like collaborative editing platform with operational transformation, presence indicators, and version control built in.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Yjs", "MongoDB"],
    category: "Full-Stack",
    image: "/projects/editor.png",
    live: "https://collaborative-editor-demo.vercel.app",
    code: "https://github.com/akeemkabiru/collab-editor",
    impact:
      "Enabled real-time collaboration for 10K+ teams, achieved < 100ms latency",
    metrics: { teams: "10K+", latency: "< 100ms", documents: "100K+" },
  },
];

export const skills = {
  "Frontend Architecture": [
    "React.js",
    "Next.js 14+",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
  ],
  "State Management & Data": [
    "Zustand",
    "Redux Toolkit",
    "React Query (TanStack)",
    "Context API",
    "GraphQL (Apollo)",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "TypeScript",
    "REST APIs",
    "GraphQL",
    "WebSockets",
    "Microservices",
  ],
  "Database & Caching": [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "Firebase",
  ],
  "DevOps & Infrastructure": [
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3, Lambda, RDS)",
    "Vercel",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
  ],
  "Testing & Quality": [
    "Jest",
    "Cypress",
    "React Testing Library",
    "Playwright",
    "Vitest",
  ],
  "Tools & Workflow": [
    "Git & GitHub",
    "Agile/Scrum",
    "Jira",
    "Figma",
    "Postman",
    "VSCode",
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Haptle",
    date: "Sep 2024 – Dec 2025",
    location: "Nigeria (Remote)",
    type: "Full-time",
    overview:
      "Led frontend architecture and mentored junior developers. Implemented multi-step vendor onboarding, real-time features, and optimized performance.",
    bullets: [
      "Architected scalable Next.js application serving 50K+ monthly users with 98% Lighthouse score",
      "Implemented real-time updates for bookings & messaging using WebSockets, reducing latency by 300%",
      "Built customizable settings system with Zod validation, improving user satisfaction by 40%",
      "Mentored 3 junior developers and established frontend code standards and best practices",
      "Optimized bundle size by 35% through code splitting and dynamic imports",
    ],
    impact:
      "Increased user retention by 25%, reduced page load time from 3.2s to 1.1s, improved team velocity by 45%",
    metrics: { users: "50K+", lighthouse: "98", performance: "+45%" },
  },
  {
    id: 2,
    role: "Full-Stack Engineer",
    company: "Monietab",
    date: "Nov 2023 – Jun 2024",
    location: "Nigeria (Remote)",
    type: "Full-time",
    overview:
      "Designed and built scalable fintech infrastructure serving savings groups across Africa. Led backend API design and frontend optimization.",
    bullets: [
      "Designed RESTful APIs handling 10K+ concurrent users with 99.9% uptime",
      "Architected Next.js app with SSR, code splitting, achieving 4.5s → 1.3s load time improvement",
      "Implemented robust JWT/OAuth authentication with role-based access control",
      "Built real-time notification system using Redis pub/sub, serving 100K+ events daily",
      "Led database optimization using MongoDB indexing, reducing query times by 60%",
    ],
    impact:
      "Enabled 25K+ users to manage savings groups securely, processed $2M+ in transactions with zero security breaches",
    metrics: { transactions: "$2M+", users: "25K+", uptime: "99.9%" },
  },
  {
    id: 3,
    role: "Full-Stack Engineer",
    company: "EtherealCorp",
    date: "Jul 2023 – Sep 2023",
    location: "Nigeria (Contract)",
    type: "Contract",
    overview:
      "Built hotel booking platform with real-time availability and payment processing for booking operations across multiple properties.",
    bullets: [
      "Designed RESTful APIs with MongoDB, handling 5K+ bookings daily with proper indexing",
      "Implemented real-time booking synchronization using WebSockets across properties",
      "Built secure JWT authentication with Stripe payment integration",
      "Optimized database queries reducing average response time from 800ms to 150ms",
      "Created comprehensive API documentation with Swagger",
    ],
    impact:
      "Successfully launched platform processing $500K+ in bookings, achieved 4.8/5 customer satisfaction",
    metrics: { bookings: "5K+/day", volume: "$500K+", satisfaction: "4.8/5" },
  },
];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};
