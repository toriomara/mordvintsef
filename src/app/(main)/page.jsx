import { AboutSection } from "@/components/AboutSection";
import { BenefitSection } from "@/components/BenefitSection";
import { HeroSection } from "@/components/HeroSection";
import { PracticeSectionAdministrative } from "@/components/PracticeSectionAdministrative";
import { PracticeSectionCriminal } from "@/components/PracticeSectionCriminal";
import { ServiceSection } from "@/components/ServiceSection";
import { StatisticSection } from "@/components/StatisticSection";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    // <div className="grid">
    <>
      <HeroSection />
      <AboutSection />
      <PracticeSectionAdministrative />
      <PracticeSectionCriminal />
      <StatisticSection />
      <ServiceSection />
      <Testimonials />
      <BenefitSection />
    </>
    // </div>
  );
}
