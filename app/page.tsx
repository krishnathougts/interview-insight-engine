import { LandingNavbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/Features";
import { SocialProof } from "@/components/landing/SocialProof";

export default function HomePage() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <SocialProof />
    </>
  );
}
