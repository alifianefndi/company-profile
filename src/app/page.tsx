import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { NewsSection } from "@/components/news-section";
import { PartnerSection } from "@/components/partner-section";
import { SolutionSection } from "@/components/solution-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <PartnerSection />

      <SolutionSection />

      <NewsSection />

      <ContactSection />
    </>
  );
}
