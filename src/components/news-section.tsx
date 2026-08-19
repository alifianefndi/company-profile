import { newsContent } from "@/utils/content";
import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

export function NewsSection() {
  return (
    <section
      id="news"
      className="flex flex-col items-center w-full px-4 py-8 gap-6 md:px-8 md:py-16"
    >
      <ScrollReveal>
        <h1 className="text-2xl lg:text-3xl font-bold">Latest News</h1>
      </ScrollReveal>

      <div className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsContent.map((n, i) => (
          <ScrollReveal key={n.title} direction="fade-up" delay={0.2 + i * 0.1}>
            <div className="flex flex-col w-full">
              <Image
                src={n.src}
                alt={n.title}
                width={800}
                height={800}
                className="w-full h-auto rounded-xl"
              />

              <div className="mt-4 flex justify-between items-center gap-4">
                <h3 className="text-lg font-bold truncate">{n.title}</h3>

                <span className="text-xs text-muted-foreground">
                  {n.created_at}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {n.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
