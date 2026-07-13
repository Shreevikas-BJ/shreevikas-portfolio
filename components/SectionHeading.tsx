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
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-[2rem] font-black leading-[1.2] text-balance sm:text-4xl sm:leading-[1.2] lg:text-[2.5rem] lg:leading-[1.2]">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
