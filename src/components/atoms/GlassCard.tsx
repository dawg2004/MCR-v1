import type { HTMLAttributes, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "", ...rest }: GlassCardProps) {
  return (
    <div className={`glass ${className}`} {...rest}>
      {children}
    </div>
  );
}
