import { CallToAction } from "@/features/landing/components/CallToAction";
import { Features } from "@/features/landing/components/Features";
import { Hero } from "@/features/landing/components/Hero";
import { Pricing } from "@/features/landing/components/Pricing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <CallToAction />
    </>
  );
}
