import { TESTIMONIALS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-cream py-[100px] max-md:py-[60px] relative"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-[60px]">
            <SectionLabel>Client Reviews</SectionLabel>
            <SectionTitle>What Our Clients Say</SectionTitle>
            <p className="text-[1.1rem] text-medium-brown max-w-[600px] mx-auto leading-[1.8] font-light">
              Don&apos;t just take our word for it. Here&apos;s what homeowners
              across Northeast Florida are saying about JWALL.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-lg:max-w-[500px] max-lg:mx-auto">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-warm-white rounded-lg p-9 shadow-[var(--shadow-soft)] border border-light-tan/30 relative"
              >
                {/* Quote decoration */}
                <span className="absolute top-4 left-6 font-display text-[4rem] text-gold opacity-20 leading-none select-none">
                  &ldquo;
                </span>
                <div className="text-gold text-[0.9rem] tracking-[2px] mb-4">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-[0.92rem] text-dark-brown leading-[1.8] italic mb-5 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="text-[0.85rem] font-semibold text-charcoal">
                  {t.author}
                </div>
                <div className="text-[0.78rem] text-warm-gray mt-0.5">
                  {t.location}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
