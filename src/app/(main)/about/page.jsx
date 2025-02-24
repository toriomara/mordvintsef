import { CertificateSectionCarousel } from "@/components/CertificateSectionCarousel";
import { HarantSection } from "@/components/HarantSection";
import { MissionSection } from "@/components/MissionSection";
import { Testimonials } from "@/components/Testimonials";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import React from "react";

export const metadata = {
  title: "Об адвокате",
  description: "О волгоградском адвокате Романе Фёдоровиче Мордвинцеве",
};

function AboutPage() {
  return (
    <div className="container-content">
      <TypographyH1 position={"flex justify-center"}>
        Об адвокате Р.Ф.&nbsp;Мордвинцеве
      </TypographyH1>
      <MissionSection />
      <Testimonials />
      <CertificateSectionCarousel />
      <HarantSection />
    </div>
  );
}

export default AboutPage;
