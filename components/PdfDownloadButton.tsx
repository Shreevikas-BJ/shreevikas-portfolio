"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type PdfDownloadButtonProps = {
  href: string;
  fileName: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

type SaveFilePicker = (options: {
  suggestedName: string;
  types: Array<{
    description: string;
    accept: Record<string, string[]>;
  }>;
}) => Promise<{
  createWritable: () => Promise<{
    write: (data: Blob) => Promise<void>;
    close: () => Promise<void>;
  }>;
}>;

export function PdfDownloadButton({
  href,
  fileName,
  children,
  variant = "primary"
}: PdfDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleDownload() {
    setIsDownloading(true);
    setStatus("");

    try {
      const response = await fetch(href, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const showSaveFilePicker = (
        window as Window & { showSaveFilePicker?: SaveFilePicker }
      ).showSaveFilePicker;

      if (showSaveFilePicker && window.isSecureContext) {
        try {
          const handle = await showSaveFilePicker({
            suggestedName: fileName,
            types: [
              {
                description: "PDF document",
                accept: { "application/pdf": [".pdf"] }
              }
            ]
          });
          const writable = await handle.createWritable();
          await writable.write(blob);
          await writable.close();
          setStatus("Saved");
          window.setTimeout(() => setStatus(""), 2500);
          return;
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            return;
          }
        }
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setStatus("Downloaded");
      window.setTimeout(() => setStatus(""), 2500);
    } catch {
      window.location.href = href;
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <Button
        aria-busy={isDownloading}
        disabled={isDownloading}
        onClick={handleDownload}
        variant={variant}
      >
        {isDownloading ? "Preparing..." : children}
      </Button>
      {status ? <span className="text-xs font-semibold text-primary">{status}</span> : null}
    </span>
  );
}
