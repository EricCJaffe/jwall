import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const VALUES = [
  {
    icon: "\u{1F3AF}",
    title: "In-House Experts",
    desc: "No subcontractors. Our skilled team handles every detail.",
  },
  {
    icon: "\u{1F48E}",
    title: "Premium Quality",
    desc: "Factory-like finish that withstands daily wear.",
  },
  {
    icon: "\u{1F91D}",
    title: "Personal Service",
    desc: "Owner-involved on every project from start to finish.",
  },
  {
    icon: "\u{1F4D0}",
    title: "Full-Service",
    desc: "Supply, install, refinish, repair — all under one roof.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-warm-white py-[100px] max-md:py-[60px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-10 items-center">
            {/* Image */}
            <div className="relative max-lg:order-first max-lg:max-w-[500px] max-lg:mx-auto">
              <div className="w-full aspect-[5/6] bg-gradient-to-br from-[#A89279] to-[#8B7355] rounded-lg overflow-hidden shadow-[var(--shadow-medium)] flex items-center justify-center text-white/50 text-[0.85rem] text-center p-5">
                [ Photo: Steve Wallace / JWALL team at work ]
              </div>
              <div className="absolute -bottom-5 -right-5 w-[180px] h-[180px] border-[3px] border-gold rounded-lg -z-1 opacity-30" />
            </div>

            {/* Content */}
            <div className="max-w-[520px] max-lg:max-w-none">
              <SectionLabel>About JWALL</SectionLabel>
              <SectionTitle>
                Craftsmanship You Can Trust, From a Team That Cares
              </SectionTitle>
              <p className="text-medium-brown mb-5 font-light text-[1.02rem]">
                JWALL Contractor Services is a{" "}
                <strong className="font-semibold text-charcoal">
                  full-service cabinet supplier, installer, and home remodeling
                  company
                </strong>{" "}
                serving Northeast Florida. Owned and operated by Steve Wallace,
                our experienced team of in-house experts is dedicated to
                providing high-quality workmanship and exceptional customer
                service on every project.
              </p>
              <p className="text-medium-brown mb-5 font-light text-[1.02rem]">
                Whether you&apos;re looking to refresh your kitchen cabinets
                with a flawless new finish or completely renovate your bathroom,
                we bring the same level of precision, care, and attention to
                detail that your home deserves.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {VALUES.map((v) => (
                  <div key={v.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 min-w-[32px] bg-gold/10 rounded-[6px] flex items-center justify-center text-gold text-[0.9rem] mt-0.5">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="text-[0.88rem] font-semibold mb-0.5">
                        {v.title}
                      </h4>
                      <p className="text-[0.8rem] text-medium-brown font-light leading-[1.5]">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
