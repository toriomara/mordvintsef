import { AboutSection } from "@/components/AboutSection";
import { BenefitSection } from "@/components/BenefitSection";
import { ChooseSection } from "@/components/ChooseSection";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { StatisticSection } from "@/components/StatisticSection";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="grid w-[80%] mx-auto">
      <HeroSection />
      <StatisticSection />
      <ServiceSection />
      <AboutSection />
      <BenefitSection />
      <ChooseSection />
      <Testimonials />
    </div>
  );
}
