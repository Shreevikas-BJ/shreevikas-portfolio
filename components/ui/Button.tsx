import Link from "next/link";
import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "border border-primary/80 bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 hover:shadow-[0_20px_70px_rgba(34,211,238,0.24)]",
  secondary:
    "border border-foreground/15 bg-foreground text-background hover:bg-foreground/90 dark:border-white/15",
  ghost: "border border-transparent bg-transparent hover:bg-muted",
  outline:
    "border border-border bg-background/25 hover:border-primary/60 hover:bg-primary/10"
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition duration-200 disabled:pointer-events-none disabled:opacity-60",
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
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download ? "" : undefined}
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
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
}) {
  if (asChild && isValidElement<{ className?: string }>(children)) {
    return cloneElement(children, {
      className: cn(buttonClasses(variant, className), children.props.className)
    });
  }

  return (
    <button type={type} className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}
