import { SERVICES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-cream py-[100px] max-md:py-[60px] relative"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[640px] mx-auto mb-[60px]">
            <SectionLabel>What We Do</SectionLabel>
            <SectionTitle>
              Affordable Alternatives to Full Remodels
            </SectionTitle>
            <p className="text-[1.1rem] text-medium-brown max-w-[600px] mx-auto leading-[1.8] font-light">
              From cabinet repainting and repairs to adding style and function —
              transform your spaces without the stress or cost of tearing it all
              out.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-warm-white rounded-lg overflow-hidden shadow-[var(--shadow-soft)] border border-light-tan/30 transition-all duration-400 ease-[var(--ease-custom)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-strong)]"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-[#8B7355] to-[#A89279] relative overflow-hidden flex items-center justify-center text-white/50 text-[0.8rem]">
                  [ {service.placeholder} ]
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/40" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-[1.2rem] font-semibold mb-2.5 text-charcoal">
                    {service.title}
                  </h3>
                  <p className="text-[0.88rem] text-medium-brown leading-[1.7] font-light mb-[18px]">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-gold no-underline tracking-[0.3px] transition-[gap] duration-400 ease-[var(--ease-custom)] hover:gap-2.5"
                  >
                    Get a Free Estimate &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
