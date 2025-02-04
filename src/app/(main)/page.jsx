import { AboutSection } from "@/components/AboutSection";
import { BenefitSection } from "@/components/BenefitSection";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { StatisticSection } from "@/components/StatisticSection";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="grid">
      <HeroSection />
      <AboutSection />
      {/* <StatisticSection /> */}
      {/* <ServiceSection /> */}
      {/* <Testimonials /> */}
      <BenefitSection />
    </div>
  );
}
