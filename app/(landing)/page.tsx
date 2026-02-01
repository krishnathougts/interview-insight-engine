import { HeroSection } from "@/components/landing/Hero";
import { HowItWorksSection } from "@/components/landing/HowItWorks";
import { FeaturesSection } from "@/components/landing/Features";
import { SocialProof } from "@/components/landing/SocialProof";
import { CTA } from "@/components/landing/CTA";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <SocialProof />
      <CTA />
    </>
  );
}
