import { COMPANY } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-charcoal via-dark-brown via-50% to-[#4A3D34] text-center py-[100px] max-md:py-[60px] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(184,146,74,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <div className="max-w-[680px] mx-auto">
            <SectionLabel className="text-gold-light">
              Ready to Get Started?
            </SectionLabel>
            <SectionTitle className="text-white">
              Get Your Free Estimate Today
            </SectionTitle>
            <p className="text-white/60 text-[1.05rem] max-w-[500px] mx-auto font-light leading-[1.8]">
              Transform your kitchen, bathrooms, entertainment centers and more —
              without the stress or cost of a full remodel. Call Steve directly
              or send us an email.
            </p>

            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-gold-light no-underline inline-block mt-5 mb-3 transition-colors duration-400 hover:text-white"
            >
              {COMPANY.phone}
            </a>
            <br />
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-base text-white/60 no-underline transition-colors duration-400 hover:text-gold-light"
            >
              {COMPANY.email}
            </a>

            <div className="mt-9 flex gap-4 justify-center flex-wrap">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center gap-2 px-9 py-4 font-body text-[0.92rem] font-semibold no-underline rounded-[4px] bg-gold text-white transition-all duration-400 ease-[var(--ease-custom)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,146,74,0.4)]"
              >
                &#128222; Call Now for Free Estimate
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 px-9 py-4 font-body text-[0.92rem] font-semibold no-underline rounded-[4px] bg-transparent text-white border-[1.5px] border-white/30 transition-all duration-400 ease-[var(--ease-custom)] hover:border-gold-light hover:text-gold-light hover:bg-gold/[0.08]"
              >
                &#9993;&#65039; Email Us
              </a>
            </div>

            <p className="mt-6 text-[0.82rem] text-white/40">
              Free estimates &middot; No obligation &middot; Serving all of
              Northeast Florida
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
