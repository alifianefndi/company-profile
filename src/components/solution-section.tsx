import { solutionContent } from "@/utils/content";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function SolutionSection() {
  return (
    <section
      id="solutions"
      className="flex flex-col items-center w-full px-4 py-8 gap-6 md:px-8 md:py-16"
    >
      <ScrollReveal>
        <h1 className="text-2xl lg:text-3xl font-bold">Our Solutions</h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 lg:grid-cols-3">
        {solutionContent.map((s, i) => (
          <ScrollReveal key={s.title} direction="fade-up" delay={0.2 + i * 0.1}>
            <Card className="w-full bg-background border shadow-xs">
              <CardHeader>
                <div className="flex justify-center items-center w-14 aspect-square bg-muted rounded-md">
                  <Image
                    src={s.src}
                    alt={s.title}
                    width={24}
                    height={24}
                    className="w-8"
                  />
                </div>

                <CardTitle className="text-xl font-semibold mt-4">
                  {s.title}
                </CardTitle>

                <CardDescription>{s.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="pl-4 list-disc font-light space-y-2">
                  {s.lists.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <CardAction>
                  <Link
                    href={s.link.href}
                    className="flex items-center gap-2 transition-all hover:text-primary hover:translate-x-0.5"
                  >
                    <span>{s.link.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardAction>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
