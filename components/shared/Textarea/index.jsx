"use client";

// components/shared/Textarea/index.jsx
// Wrapper around shadcn Textarea for consistency
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

/**
 * Textarea Component
 * 
 * Wrapper around shadcn/ui Textarea component.
 * Provides consistent textarea styling across the app.
 * 
 * Props: All shadcn Textarea props are supported
 * - placeholder: string - Placeholder text
 * - className: string - Additional CSS classes
 * - disabled: boolean - Whether textarea is disabled
 * - rows: number - Number of rows
 */
const Textarea = forwardRef(({ className, ...props }, ref) => {
  return <ShadcnTextarea className={cn(className)} ref={ref} {...props} />;
});

Textarea.displayName = "Textarea";

export default Textarea;

