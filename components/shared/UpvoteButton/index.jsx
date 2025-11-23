"use client";

// components/shared/UpvoteButton/index.jsx
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * UpvoteButton Component
 * 
 * Standalone upvote button with press animation.
 * Used when you only need an upvote button (not the full VoteButtons component).
 * 
 * Props:
 * - isActive: boolean - Whether button is in active/upvoted state
 * - onClick: function - Click handler
 * - disabled: boolean - Whether button is disabled
 * - size: "sm" | "md" | "lg" - Button size
 * - className: string - Additional CSS classes
 */
export default function UpvoteButton({
  isActive = false,
  onClick,
  disabled = false,
  size = "md",
  className,
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);

    if (onClick) {
      onClick();
    }
  };

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        sizeClasses[size],
        "flex items-center justify-center rounded transition-all duration-200",
        "hover:bg-orange-100 dark:hover:bg-orange-900/20",
        "active:scale-90",
        isActive
          ? "text-orange-500 bg-orange-50 dark:bg-orange-900/30"
          : "text-muted-foreground hover:text-orange-500",
        disabled && "opacity-50 cursor-not-allowed",
        isAnimating && "scale-95",
        className
      )}
      aria-label="Upvote"
      aria-pressed={isActive}
    >
      <ChevronUp
        className={cn("transition-transform", isAnimating && "scale-125")}
        size={iconSizes[size]}
        strokeWidth={2.5}
      />
    </button>
  );
}


