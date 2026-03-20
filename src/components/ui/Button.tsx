import React from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-white hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,146,74,0.4)]",
  outline:
    "bg-transparent text-white border-[1.5px] border-white/30 hover:border-gold-light hover:text-gold-light hover:bg-gold/8",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-9 py-4 font-body text-[0.92rem] font-semibold no-underline rounded-[4px] transition-all duration-400 ease-[var(--ease-custom)] cursor-pointer tracking-[0.3px] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
