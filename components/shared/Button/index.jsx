// components/shared/Button/index.jsx
// Wrapper around shadcn Button for consistency
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Button Component
 * 
 * Wrapper around shadcn/ui Button component.
 * Provides consistent button styling across the app.
 * 
 * Props: All shadcn Button props are supported
 * - variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
 * - size: "default" | "sm" | "lg" | "icon"
 * - className: string - Additional CSS classes
 * - children: ReactNode - Button content
 */
export default function Button({ className, ...props }) {
  return <ShadcnButton className={cn(className)} {...props} />;
}


