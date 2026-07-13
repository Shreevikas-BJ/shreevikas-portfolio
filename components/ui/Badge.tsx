import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-muted/60 px-3 py-1.5 text-sm font-medium leading-5 text-muted-foreground shadow-sm transition group-hover:border-primary/30 group-hover:text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
