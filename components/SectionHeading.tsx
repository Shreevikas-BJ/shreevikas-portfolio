import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12 max-w-4xl lg:mb-16", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-primary/70" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-[2rem] font-semibold leading-[1.18] text-balance sm:text-[2.55rem] lg:text-[3rem]">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
