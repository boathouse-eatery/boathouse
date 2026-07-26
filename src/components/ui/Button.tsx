import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans font-semibold text-sm sm:text-base transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-amber-400 text-bay-900 shadow-soft hover:bg-amber-300",
  secondary: "bg-bay-600 text-sand-50 hover:bg-bay-500",
  "outline-light":
    "border-2 border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-bay-700",
  ghost: "text-bay-600 underline underline-offset-4 hover:text-amber-600 rounded-none px-0 py-0",
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  );
}

export function Button({ href, children, variant = "primary", className = "", external }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const goesExternal = external ?? isExternalHref(href);

  if (goesExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}
