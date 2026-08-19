import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { ScrollReveal } from "./scroll-reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full px-4 py-8 gap-6 md:px-8 md:py-16"
    >
      <ScrollReveal direction="fade-down">
        <h1 className="text-2xl lg:text-3xl font-bold">Have Some Questions?</h1>
      </ScrollReveal>

      <div className="flex flex-col justify-center items-center w-full gap-6 lg:flex-row">
        <ScrollReveal direction="fade-right" className="w-full">
          <div className="flex flex-col gap-4 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2975995551583!2d106.80744917355433!3d-6.224435460957811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1511299f669%3A0xb39dd74a162cb28!2sCEO%20SUITE%20One%20Pacific%20Place%2015th%20fl%20SCBD%20Jakarta!5e0!3m2!1sid!2sid!4v1786442519484!5m2!1sid!2sid"
              width="520"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-lg w-full h-full lg:h-74"
            ></iframe>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center w-10 h-10 rounded-sm bg-muted">
                  <Mail className="w-5 h-5" />
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Email</span>

                  <p className="font-semibold">info@temanberkahsentosa.com</p>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center w-10 h-10 rounded-sm bg-muted">
                  <Phone className="w-5 h-5" />
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Phone/Whatsapp</span>

                  <p className="font-semibold">+62 811 97 300 300</p>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center w-10 h-10 rounded-sm bg-muted">
                  <MapPin className="w-5 h-5" />
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Head Office</span>

                  <p className="font-semibold">
                    ONE Pacific Place, 15th Floor, Jl. Jend. Sudirman Kav.
                    52-53, Jakarta 12190
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="fade-left" className="w-full">
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
