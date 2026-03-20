import { PROCESS_STEPS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-warm-white py-[100px] max-md:py-[60px]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-[70px]">
            <SectionLabel>How It Works</SectionLabel>
            <SectionTitle>Simple, Stress-Free Process</SectionTitle>
            <p className="text-[1.1rem] text-medium-brown max-w-[600px] mx-auto leading-[1.8] font-light">
              We make home improvement easy. From your first call to the final
              walkthrough, here&apos;s what to expect.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-[36px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gold via-light-tan to-gold opacity-30" />

            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="text-center relative group"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-warm-white border-2 border-gold flex items-center justify-center font-display text-2xl font-bold text-gold mx-auto mb-6 relative z-[1] transition-all duration-400 ease-[var(--ease-custom)] group-hover:bg-gold group-hover:text-white">
                  {step.number}
                </div>
                <h4 className="font-display text-[1.05rem] font-semibold mb-2.5">
                  {step.title}
                </h4>
                <p className="text-[0.85rem] text-warm-gray leading-[1.7] max-w-[220px] mx-auto font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
