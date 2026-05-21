"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type PdfDownloadButtonProps = {
  href: string;
  fileName: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

export function PdfDownloadButton({
  href,
  fileName,
  children,
  variant = "primary"
}: PdfDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    setIsDownloading(true);

    try {
      const response = await fetch(href, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch {
      window.location.href = href;
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <Button
      aria-busy={isDownloading}
      disabled={isDownloading}
      onClick={handleDownload}
      variant={variant}
    >
      {isDownloading ? "Preparing..." : children}
    </Button>
  );
}
