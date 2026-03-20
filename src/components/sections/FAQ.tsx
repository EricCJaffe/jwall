"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-warm-white py-[100px] max-md:py-[60px]">
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-[60px]">
            <SectionLabel>Common Questions</SectionLabel>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <p className="text-[1.1rem] text-medium-brown max-w-[600px] mx-auto leading-[1.8] font-light">
              Got questions? We&apos;ve got answers. Here are the most common
              things homeowners ask us.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-[800px] mx-auto flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border rounded-lg overflow-hidden transition-all duration-400 ease-[var(--ease-custom)] ${
                    isOpen
                      ? "border-gold"
                      : "border-light-tan/40 hover:border-gold"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-7 py-[22px] text-[0.95rem] font-semibold text-charcoal cursor-pointer flex justify-between items-center bg-transparent border-none text-left font-body transition-colors duration-400 hover:bg-gold/[0.04]"
                  >
                    {item.question}
                    <span
                      className={`text-gold text-xl min-w-[24px] text-center transition-transform duration-400 ease-[var(--ease-custom)] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "max-h-[300px] pb-[22px] px-7" : "max-h-0"
                    }`}
                  >
                    <p className="text-[0.9rem] text-medium-brown leading-[1.8] font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
