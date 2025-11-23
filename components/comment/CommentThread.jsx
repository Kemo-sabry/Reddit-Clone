"use client";

// components/comment/CommentThread.jsx
import { useState } from "react";
import CommentCard from "./CommentCard";
import { Button } from "@/components/ui/button";
import  Textarea from "@/components/shared/Textarea/index.jsx";
import  LoadingSpinner  from "@/components/shared/LoadingSpinner/index.jsx";
import { cn } from "@/lib/utils";

/**
 * CommentThread Component
 * 
 * Container for displaying a thread of comments.
 * Handles comment sorting, loading states, and reply functionality.
 * 
 * Props:
 * - comments: array - Array of comment objects
 * - isLoading: boolean - Loading state
 * - onReply: function - Handler for reply submission
 * - onVote: function - Handler for comment voting
 * - sortBy: "best" | "top" | "new" | "controversial" - Sort order
 * - onSortChange: function - Handler for sort change
 * - className: string - Additional CSS classes
 */
export default function CommentThread({
  comments = [],
  isLoading = false,
  onReply,
  onVote,
  sortBy = "best",
  onSortChange,
  className,
}) {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = () => {
    if (replyText.trim() && onReply) {
      onReply(replyingTo, replyText);
      setReplyText("");
      setReplyingTo(null);
    }
  };

  const handleCancelReply = () => {
    setReplyText("");
    setReplyingTo(null);
  };

  const sortOptions = [
    { value: "best", label: "Best" },
    { value: "top", label: "Top" },
    { value: "new", label: "New" },
    { value: "controversial", label: "Controversial" },
  ];

  return (
    <div className={cn("space-y-4", className)}>
      {/* Sort Options */}
      {comments.length > 0 && (
        <div className="flex items-center gap-2 pb-2 border-b">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          {sortOptions.map((option) => (
            <Button
              key={option.value}
              variant={sortBy === option.value ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => onSortChange && onSortChange(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader size="lg" />
        </div>
      )}

      {/* Comments List */}
      {!isLoading && comments.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No comments yet. Be the first to comment!</p>
        </div>
      )}

      {/* Comments */}
      {!isLoading && comments.length > 0 && (
        <div className="space-y-1">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              {...comment}
              onVote={onVote}
              onReply={(commentId) => setReplyingTo(commentId)}
            />
          ))}
        </div>
      )}

      {/* Reply Form */}
      {replyingTo && (
        <div className="border rounded-lg p-4 space-y-3 bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Replying to comment</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 text-xs"
              onClick={handleCancelReply}
            >
              Cancel
            </Button>
          </div>
          <Textarea
            placeholder="What are your thoughts?"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={4}
            className="resize-none"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={handleCancelReply}>
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleReplySubmit}
              disabled={!replyText.trim()}
            >
              Reply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}


