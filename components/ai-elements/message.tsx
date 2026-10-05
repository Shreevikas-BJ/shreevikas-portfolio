"use client";

import { memo, type ComponentProps } from "react";
import { Streamdown } from "streamdown";
import { cn } from "@/lib/utils";

// AI Elements MessageResponse, adapted to prose-only portfolio answers.
// https://elements.ai-sdk.dev/components/message
export type MessageResponseProps = ComponentProps<typeof Streamdown>;

export const MessageResponse = memo(
  ({ className, ...props }: MessageResponseProps) => (
    <Streamdown
      className={cn("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className)}
      controls={false}
      skipHtml
      allowedElements={["p", "a", "strong", "em", "ul", "ol", "li", "br", "code"]}
      unwrapDisallowed
      {...props}
    />
  )
);

MessageResponse.displayName = "MessageResponse";
