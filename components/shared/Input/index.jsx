"use client";

// components/shared/Input/index.jsx
// Wrapper around shadcn Input for consistency
import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

/**
 * Input Component
 * 
 * Wrapper around shadcn/ui Input component.
 * Provides consistent input styling across the app.
 * 
 * Props: All shadcn Input props are supported
 * - type: string - Input type (text, email, password, etc.)
 * - placeholder: string - Placeholder text
 * - className: string - Additional CSS classes
 * - disabled: boolean - Whether input is disabled
 */
const Input = forwardRef(({ className, ...props }, ref) => {
  return <ShadcnInput className={cn(className)} ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;

