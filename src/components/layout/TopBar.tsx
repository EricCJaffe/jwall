import { COMPANY } from "@/lib/constants";

export default function TopBar() {
  return (
    <div className="bg-charcoal text-light-tan text-[0.82rem] py-2.5 tracking-[0.3px]">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
        <span>
          Proudly Serving Northeast Florida — Jacksonville, St. Augustine, Ponte
          Vedra &amp; Beyond
        </span>
        <div className="flex gap-6 items-center max-md:hidden">
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-gold-light no-underline font-medium transition-colors duration-400 hover:text-white"
          >
            {COMPANY.email}
          </a>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="text-gold-light no-underline font-medium transition-colors duration-400 hover:text-white"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
