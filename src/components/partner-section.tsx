import Image from "next/image";
import { Marquee } from "./ui/marquee";
import { partnersContent } from "@/utils/content";

export function PartnerSection() {
  return (
      <section
        id="partners"
        className="flex flex-col items-center py-4 gap-4 overflow-x-hidden"
      >
        <h1 className="text-2xl lg:text-3xl font-bold">Our Partners</h1>

        <Marquee className="gap-5" pauseOnHover={true}>
          {partnersContent.map((partner) => (
            <div
              key={partner.alt}
              className="flex justify-center items-center px-3 w-48 h-24 lg:px-6 lg:w-60 lg:h-36"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={120}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Marquee>
      </section>
  )
}
