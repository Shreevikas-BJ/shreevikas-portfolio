"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    let frame = 0;
    const updateActiveSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const probe = window.scrollY + window.innerHeight * 0.34;
        const current = sections.reduce(
          (active, section) => (section.offsetTop <= probe ? section : active),
          sections[0]
        );
        setActiveHref(`#${current.id}`);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-border/80 bg-background/88 shadow-[0_12px_44px_rgba(2,8,23,0.12)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:px-8 lg:px-12"
      >
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 font-mono text-sm font-semibold text-primary">
            {siteConfig.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-4">{siteConfig.name}</span>
            <span className="mt-0.5 block font-mono text-[0.62rem] text-muted-foreground">
              AI / ML + DATA
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "location" : undefined}
              className={cn(
                "focus-ring rounded-lg px-2.5 py-2 text-[0.78rem] font-semibold transition",
                activeHref === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={siteConfig.resumePath}
            variant="outline"
            external
            className="hidden min-h-9 px-3 py-2 text-sm sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </ButtonLink>
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/55 text-muted-foreground transition hover:border-primary/50 hover:text-foreground xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background/96 px-4 py-4 shadow-elevated backdrop-blur-xl xl:hidden"
        >
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-2 sm:px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={cn(
                  "focus-ring rounded-lg px-3 py-3 text-sm font-semibold transition",
                  activeHref === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink
              href={siteConfig.resumePath}
              variant="outline"
              external
              className="col-span-2 mt-2 w-full"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
