"use client";

// components/shared/DownvoteButton/index.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * DownvoteButton Component
 * 
 * Standalone downvote button with press animation.
 * Used when you only need a downvote button (not the full VoteButtons component).
 * 
 * Props:
 * - isActive: boolean - Whether button is in active/downvoted state
 * - onClick: function - Click handler
 * - disabled: boolean - Whether button is disabled
 * - size: "sm" | "md" | "lg" - Button size
 * - className: string - Additional CSS classes
 */
export default function DownvoteButton({
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
        "hover:bg-blue-100 dark:hover:bg-blue-900/20",
        "active:scale-90",
        isActive
          ? "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
          : "text-muted-foreground hover:text-blue-500",
        disabled && "opacity-50 cursor-not-allowed",
        isAnimating && "scale-95",
        className
      )}
      aria-label="Downvote"
      aria-pressed={isActive}
    >
      <ChevronDown
        className={cn("transition-transform", isAnimating && "scale-125")}
        size={iconSizes[size]}
        strokeWidth={2.5}
      />
    </button>
  );
}


