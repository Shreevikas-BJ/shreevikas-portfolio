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
    <div className={cn("mb-10 max-w-3xl lg:mb-12", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-black tracking-normal text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
