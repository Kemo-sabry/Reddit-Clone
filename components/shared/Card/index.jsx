// components/shared/Card/index.jsx
// Wrapper around shadcn Card for consistency
import { Card as ShadcnCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Card Component
 * 
 * Wrapper around shadcn/ui Card components.
 * Provides consistent card styling across the app.
 * 
 * Usage:
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content</CardContent>
 *   <CardFooter>Footer</CardFooter>
 * </Card>
 */
export default function Card({ className, ...props }) {
  return <ShadcnCard className={cn(className)} {...props} />;
}

// Export sub-components for convenience
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;


