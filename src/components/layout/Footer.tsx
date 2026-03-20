import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 pt-[72px] pb-9">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5 mb-0">
              <div className="w-12 h-12 bg-charcoal border border-white/10 rounded-[4px] flex items-center justify-center text-gold font-display text-[1.4rem] font-bold -tracking-[1px] relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gold">
                JW
              </div>
              <div className="flex flex-col leading-[1.15]">
                <strong className="font-display text-[1.35rem] font-bold text-white -tracking-[0.5px]">
                  JWALL
                </strong>
                <span className="text-[0.7rem] tracking-[2.5px] uppercase text-white/40 font-medium">
                  Contractor Services
                </span>
              </div>
            </div>
            <p className="mt-4 text-[0.88rem] leading-[1.8] font-light">
              Northeast Florida&apos;s trusted experts in cabinet refinishing,
              kitchen remodeling, and home renovation. High-quality
              craftsmanship. Exceptional service. Every time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                "Cabinet Refinishing",
                "Kitchen Remodeling",
                "Bathroom Renovation",
                "Custom Cabinetry",
                "Home Offices",
                "Closets & Pantries",
              ].map((s) => (
                <li key={s}>
                  <a
                    href={s === "Cabinet Refinishing" ? "#cabinets" : "#services"}
                    className="text-[0.88rem] text-white/50 no-underline font-light transition-colors duration-400 hover:text-gold-light"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Process", href: "#process" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.88rem] text-white/50 no-underline font-light transition-colors duration-400 hover:text-gold-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5">
              Contact Us
            </h4>
            <div className="flex items-start gap-3 mb-3.5 text-[0.88rem] font-light">
              <span className="text-gold min-w-4 mt-0.5">&#9742;</span>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="text-white/60 no-underline transition-colors duration-400 hover:text-gold-light"
              >
                {COMPANY.phone}
              </a>
            </div>
            <div className="flex items-start gap-3 mb-3.5 text-[0.88rem] font-light">
              <span className="text-gold min-w-4 mt-0.5">&#9993;</span>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-white/60 no-underline transition-colors duration-400 hover:text-gold-light"
              >
                {COMPANY.email}
              </a>
            </div>
            <div className="flex items-start gap-3 mb-3.5 text-[0.88rem] font-light">
              <span className="text-gold min-w-4 mt-0.5">&#128205;</span>
              <span>
                Serving all of Northeast Florida
                <br />
                Jacksonville &middot; Ponte Vedra &middot; St. Augustine
                <br />
                Orange Park &middot; Fernandina Beach
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-[0.8rem] text-white/30">
          <span>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights
            Reserved.
          </span>
          <span>
            Owner: {COMPANY.owner} &middot; Licensed &amp; Insured &middot;
            Northeast Florida
          </span>
        </div>
      </div>
    </footer>
  );
}
