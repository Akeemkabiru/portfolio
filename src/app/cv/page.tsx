import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Download Kabiru Akeem's full CV.",
};

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="CV"
        title="The complete record."
        description="This site curates the highlights: engineering, research, and everything between. The CV holds the full detail, every role, every research project, every credential."
      />
      <Container className="pb-32">
        <Reveal>
          <Button href={site.cvUrl} variant="primary" external>
            Download CV ↗
          </Button>
        </Reveal>
      </Container>
    </>
  );
}
