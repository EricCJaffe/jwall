interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`font-body font-semibold text-xs tracking-[3px] uppercase text-gold block mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
