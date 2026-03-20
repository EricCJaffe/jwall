const TRUST_ITEMS = [
  { icon: "\u{1F6E1}\uFE0F", label: "Licensed & Insured" },
  { icon: "\u{1F3E0}", label: "Full Cabinet Supplier & Installer" },
  { icon: "\u{1F477}", label: "In-House Expert Team" },
  { icon: "\u2728", label: "Factory-Quality Finish" },
  { icon: "\u{1F4CB}", label: "Free Estimates" },
];

export default function TrustBar() {
  return (
    <div className="bg-cream py-7 border-b border-light-tan/40">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-center gap-12 flex-wrap items-center">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 text-[0.85rem] text-medium-brown font-medium"
          >
            <div className="w-9 h-9 bg-warm-white rounded-full flex items-center justify-center text-base shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              {item.icon}
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
