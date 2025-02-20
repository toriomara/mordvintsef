import { CertificateSectionCarousel } from "@/components/CertificateSectionCarousel";
import { HarantSection } from "@/components/HarantSection";
import { MissionSection } from "@/components/MissionSection";
import { Testimonials } from "@/components/Testimonials";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import React from "react";

export const metadata = {
  title: "Об адвокате",
  description: "Об адвокате Романе Фёдоровиче Мордвинцеве",
  // keywords: "dfklj? dkfjsdf, dfkjshdfkj, dskjfh. dsjfh, sdjhkfg"
};

function AboutPage() {
  return (
    <div className="w-[80%] mx-auto">
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
