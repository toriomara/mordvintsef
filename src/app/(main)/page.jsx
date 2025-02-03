import { AboutSection } from "@/components/AboutSection";
import { BenefitSection } from "@/components/BenefitSection";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { StatisticSection } from "@/components/StatisticSection";
import { Testimonials } from "@/components/Testimonials";
import { ServiceWithContent } from "@/components/ServiceWithContent";

export default function HomePage() {
  return (
    <div className="grid w-[80%] mx-auto">
      <HeroSection />
      <StatisticSection />
      <AboutSection />
      <ServiceSection />
      {/* <ServiceWithContent /> */}
      <Testimonials />
      <BenefitSection />
    </div>
  );
}
