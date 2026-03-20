import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const BENEFITS = [
  "Cabinet refinishing, repainting & color matching",
  "Cabinet repair, new cabinets & custom molding",
  "Kitchen, bathroom, office, closet & entertainment centers",
  "Smooth, factory-like finish guaranteed",
  "Full cabinet supply & installation available",
];

const IMAGE_LABELS = [
  "Before:\nDated Oak Cabinets",
  "After:\nModern White Finish",
  "Detail:\nSmooth Paint Finish",
  "Result:\nTransformed Kitchen",
];

export default function CabinetFeature() {
  return (
    <section
      id="cabinets"
      className="bg-charcoal text-white py-[100px] max-md:py-[60px] relative overflow-hidden"
    >
      {/* Subtle gold radial */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(184,146,74,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-10 items-center">
            {/* Content */}
            <div>
              <SectionLabel className="text-gold-light">
                Signature Service
              </SectionLabel>
              <SectionTitle className="text-white">
                Cabinet Refinishing &amp; Repainting
              </SectionTitle>
              <p className="text-[1.1rem] text-white/60 max-w-[600px] leading-[1.8] font-light">
                Transform your kitchen, bathrooms, and more — without the stress
                or cost of a full remodel. Professional cabinet painting
                delivers a stunning, durable finish at a fraction of replacement
                cost.
              </p>

              {/* Embedded FAQ */}
              <div className="bg-white/5 border border-white/[0.08] rounded-lg p-7 mt-8">
                <h4 className="font-display text-[1.1rem] font-medium italic text-gold-light mb-3">
                  &ldquo;Is professional cabinet painting worth it?&rdquo;
                </h4>
                <p className="text-[0.92rem] text-white/65 leading-[1.8] font-light">
                  Absolutely. Professionally painting kitchen cabinets is one of
                  the most cost-effective ways to transform a space, yielding
                  high ROI and increased home value. Unlike risky DIY attempts
                  that can actually decrease value, our skilled team ensures a
                  smooth, factory-like finish that withstands daily wear for
                  years to come.
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-col gap-4 mt-8">
                {BENEFITS.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3.5 text-[0.95rem] text-white/80 font-normal"
                  >
                    <span className="w-6 h-6 min-w-[24px] bg-gold/20 rounded-full flex items-center justify-center text-gold-light text-[0.75rem]">
                      &#10003;
                    </span>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4 max-lg:max-w-[500px]">
              {IMAGE_LABELS.map((label, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gradient-to-br from-medium-brown to-[#8B7355] rounded-lg overflow-hidden shadow-[var(--shadow-soft)] transition-transform duration-400 ease-[var(--ease-custom)] hover:scale-[1.03] ${
                    i === 1 ? "mt-[30px]" : ""
                  } ${i === 2 ? "-mt-[30px]" : ""}`}
                >
                  <div className="w-full h-full flex items-center justify-center text-[0.8rem] text-white/40 text-center p-5 uppercase tracking-[1px] font-medium whitespace-pre-line">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
