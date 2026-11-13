import { BeforeAfter } from "@/features/landing/components/BeforeAfter";
import { CallToAction } from "@/features/landing/components/CallToAction";
import { Faq } from "@/features/landing/components/Faq";
import { Features } from "@/features/landing/components/Features";
import { Hero } from "@/features/landing/components/Hero";
import { HowItWorks } from "@/features/landing/components/HowItWorks";
import { LogoStrip } from "@/features/landing/components/LogoStrip";
import { Pricing } from "@/features/landing/components/Pricing";
import { StatsBand } from "@/features/landing/components/StatsBand";
import { Testimonials } from "@/features/landing/components/Testimonials";
import { UseCases } from "@/features/landing/components/UseCases";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <BeforeAfter />
      <StatsBand />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Faq />
      <CallToAction />
    
    </>
  );
}