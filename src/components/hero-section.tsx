import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-64px)] flex justify-center items-center overflow-hidden"
    >
        <Image
          src="/hero-background.png"
          alt="Hero Background"
          quality={75}
          priority
          fill
          sizes="100vw"
          className="w-full h-full object-cover object-left lg:object-center"
        />

      <div className="container mx-auto absolute inset-0 flex justify-center items-center">
        <div className="text-center px-4 py-8 md:max-w-2xl md:px-8 md:py-16 lg:max-w-3xl">
          <ScrollReveal direction="fade-down" delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Transforming Enterprise Infrastructure.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="fade-down" delay={0.2}>
            <p className="md:text-lg lg:text-xl mx-auto mb-6">
              PT Teman Berkah Sentosa delivers mission-critical systems,
              emerging technology, and hardened security — designed, deployed,
              and supported for Indonesian organizations that cannot afford
              downtime.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="fade-down">
            <Button className="text-lg gap-2 py-6 px-8 rounded-full">
              <span>Explore More</span>
              <ArrowRight />
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
