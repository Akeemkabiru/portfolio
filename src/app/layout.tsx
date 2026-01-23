import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Kabby - Senior Full-Stack Engineer | Production-Scale Systems | Next.js & Node.js Expert",
  description:
    "Senior Full-Stack Software Engineer specializing in scalable architectures, microservices, and high-performance systems. Expert in Next.js, React, Node.js, Express.js, TypeScript, PostgreSQL, and DevOps. Portfolio showcasing enterprise-grade applications serving millions of users with 99.99% uptime.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "TypeScript Expert",
    "System Architecture",
    "Microservices",
    "DevOps Engineer",
    "Backend Architecture",
    "React Developer",
    "Production-Scale Systems",
    "AWS Developer",
    "PostgreSQL",
    "MongoDB",
  ],
  openGraph: {
    title:
      "Kabby | Senior Full-Stack Engineer | Production-Scale Systems Expert",
    description:
      "Explore Kabby's senior-level software engineering portfolio featuring scalable, high-performance applications. Expertise in system design, microservices, real-time processing, and enterprise infrastructure.",
    url: "https://www.kabby.pro",
    siteName: "Kabby",
    images: [
      {
        url: "https://www.kabby.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kabby's senior full-stack engineering portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabby | Senior Full-Stack Engineer | System Architecture Expert",
    description:
      "Senior full-stack engineer with expertise in building production-scale systems. View portfolio of enterprise applications, microservices, and DevOps infrastructure.",
    images: ["https://www.kabby.pro/og-image.jpg"],
  },
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <meta name="android-chrome" content="true" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kabby",
              url: "https://www.kabby.pro",
              description:
                "Senior Full-Stack Software Engineer and System Architect Portfolio. Expert in building production-scale applications with Next.js, Node.js, React, and modern infrastructure.",
              publisher: {
                "@type": "Person",
                name: "Kabby",
                url: "https://www.kabby.pro",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.kabby.pro/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kabby",
              url: "https://www.kabby.pro",
              sameAs: [
                "https://github.com/akeemkabiru",
                "https://www.linkedin.com/in/kabiruakeem",
                "https://twitter.com/akemkabiru",
              ],
              jobTitle: "Senior Full-Stack Engineer | System Architect",
              worksFor: {
                "@type": "Organization",
                name: "Kabby",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "Express.js",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "System Architecture",
                "Microservices",
                "DevOps",
                "AWS",
                "Docker",
                "Kubernetes",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
