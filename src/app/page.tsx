import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyMotozonSection } from "@/components/home/WhyMotozonSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { EmiCalculator } from "@/components/home/EmiCalculator";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyMotozonSection />
      <HowItWorksSection />
      <EmiCalculator />
      <CTASection />
    </>
  );
}
