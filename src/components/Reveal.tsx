import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
