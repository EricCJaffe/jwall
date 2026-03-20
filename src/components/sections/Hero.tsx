import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-charcoal via-dark-brown via-40% to-[#4A3D34] overflow-hidden"
    >
      {/* Gold radial gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(184,146,74,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(122,140,110,0.08) 0%, transparent 50%)",
        }}
      />
      {/* Cross-hatch pattern */}
      <div className="absolute inset-0 z-[1] pointer-events-none hero-pattern" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-15 items-center py-10 w-full">
        {/* Content */}
        <div className="max-w-[560px] lg:max-w-none">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-[18px] py-2 rounded-full text-[0.78rem] font-semibold text-gold-light tracking-[1.5px] uppercase mb-7 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-gold-light rounded-full animate-pulse-dot" />
            Northeast Florida&apos;s Trusted Craftsmen
          </div>

          <h1 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold text-white leading-[1.12] mb-6 animate-fade-in-up delay-100">
            Transform Your Home Without the Stress of a{" "}
            <em className="italic text-gold-light">Full Remodel</em>
          </h1>

          <p className="text-[1.1rem] text-white/70 leading-[1.8] mb-10 max-w-[480px] font-light animate-fade-in-up delay-200">
            From stunning cabinet refinishing to complete kitchen and bathroom
            renovations — JWALL Contractor Services delivers high-quality
            craftsmanship with a personal touch, every single time.
          </p>

          <div className="flex gap-4 flex-wrap items-center animate-fade-in-up delay-300 max-[480px]:flex-col max-[480px]:w-full">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-9 py-4 font-body text-[0.92rem] font-semibold no-underline rounded-[4px] bg-gold text-white transition-all duration-400 ease-[var(--ease-custom)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,146,74,0.4)] max-[480px]:w-full max-[480px]:justify-center"
            >
              Get Your Free Estimate &rarr;
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 px-9 py-4 font-body text-[0.92rem] font-semibold no-underline rounded-[4px] bg-transparent text-white border-[1.5px] border-white/30 transition-all duration-400 ease-[var(--ease-custom)] hover:border-gold-light hover:text-gold-light hover:bg-gold/[0.08] max-[480px]:w-full max-[480px]:justify-center"
            >
              &#128222; {COMPANY.phone}
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-8 border-t border-white/10 animate-fade-in-up delay-400 max-md:justify-center max-md:gap-6 max-[480px]:flex-col max-[480px]:gap-4">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "In-House Experts" },
              { number: "5\u2605", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[2rem] font-bold text-gold-light leading-none">
                  {stat.number}
                </div>
                <div className="text-[0.78rem] text-white/50 mt-1.5 tracking-[0.5px] uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-in-right hidden lg:block">
          <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#8B7355] via-medium-brown to-[#4A3D34] rounded-lg relative overflow-hidden shadow-[var(--shadow-strong)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60 z-[1]" />
            <div className="w-full h-full flex items-end p-[30px] text-white/50 text-[0.85rem] relative z-[2]">
              [ Hero Image: Stunning finished kitchen with refinished cabinets ]
            </div>
            <div className="absolute bottom-6 left-6 z-[2] text-white text-[0.82rem] font-medium tracking-[1px] uppercase">
              Featured Project
              <strong className="block font-display text-[1.3rem] font-semibold tracking-normal normal-case mt-1">
                Kitchen Cabinet Transformation
              </strong>
            </div>
          </div>

          {/* Floating review card */}
          <div className="absolute top-10 -right-[30px] bg-warm-white/95 backdrop-blur-[10px] px-6 py-5 rounded-lg shadow-[var(--shadow-medium)] z-[3] animate-float max-md:hidden">
            <div className="text-gold text-[1.1rem] tracking-[2px] mb-1.5">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <div className="text-[0.82rem] text-dark-brown font-medium max-w-[180px] leading-[1.5]">
              &ldquo;Best decision we ever made for our kitchen!&rdquo;
            </div>
            <div className="text-[0.72rem] text-warm-gray mt-1.5">
              — Recent Client, Ponte Vedra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
