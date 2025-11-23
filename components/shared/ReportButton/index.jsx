"use client";

// components/shared/ReportButton/index.jsx
import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

/**
 * ReportButton Component
 * 
 * Button for reporting posts/comments with dropdown menu.
 * Shows report options when clicked.
 * 
 * Props:
 * - onReport: function - Callback when report option is selected
 * - variant: "ghost" | "outline" | "default" - Button variant
 * - size: "sm" | "md" | "lg" | "icon" - Button size
 * - className: string - Additional CSS classes
 */
export default function ReportButton({
  onReport,
  variant = "ghost",
  size = "icon",
  className,
}) {
  const reportReasons = [
    "Spam",
    "Misinformation",
    "Harassment",
    "Hate",
    "Self-harm",
    "Copyright violation",
    "Other",
  ];

  const handleReport = (reason) => {
    if (onReport) {
      onReport(reason);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn("text-muted-foreground hover:text-foreground", className)}
          aria-label="Report"
        >
          <Flag className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Report</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {reportReasons.map((reason) => (
          <DropdownMenuItem
            key={reason}
            onClick={() => handleReport(reason)}
            className="cursor-pointer"
          >
            {reason}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


