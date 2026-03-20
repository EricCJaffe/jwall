interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] text-charcoal mb-5 ${className}`}
    >
      {children}
    </h2>
  );
}
