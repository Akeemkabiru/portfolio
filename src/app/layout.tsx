import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { site, keywords } from "@/data/site";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.positioning}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: site.url,
              jobTitle: site.positioning,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
              sameAs: [
                site.social.github,
                site.social.linkedin,
                site.social.twitter,
              ].filter(Boolean),
              knowsAbout: [
                "Software Engineering",
                "Biochemistry",
                "Bioinformatics",
                "Structural Biology",
                "Molecular Modeling",
                "Computational Drug Discovery",
                "Structure-Based Drug Design",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Obafemi Awolowo University",
              },
            }),
          }}
        />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
