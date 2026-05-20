import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 border border-primary/80",
  secondary:
    "bg-foreground text-background hover:bg-foreground/90 border border-foreground/80",
  ghost: "bg-transparent hover:bg-muted border border-transparent",
  outline: "bg-transparent border border-border hover:border-primary/60 hover:bg-primary/10"
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  download
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  download?: boolean;
}) {
  if (external || download || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={buttonClasses(variant, className)}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
}) {
  return (
    <button type={type} className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}
