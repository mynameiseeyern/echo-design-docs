"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function scoreLevel(score: number) {
  if (score >= 67) return "good";
  if (score >= 34) return "fair";
  return "low";
}

function scoreBadgeClasses(level: string) {
  switch (level) {
    case "good":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400";
    case "fair":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400";
    default:
      return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400";
  }
}

function scoreLabel(level: string) {
  switch (level) {
    case "good":
      return "Good";
    case "fair":
      return "Fair";
    default:
      return "Low";
  }
}

interface ScoreBadgeProps {
  score: number;
  className?: string;
  showLabel?: boolean;
}

export function ScoreBadge({ score, className, showLabel = true }: ScoreBadgeProps) {
  const level = scoreLevel(score);
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-medium text-sm font-mono">{score}</span>
      {showLabel && (
        <Badge
          className={cn(
            "text-[10px] font-medium px-1.5 py-0",
            scoreBadgeClasses(level)
          )}
        >
          {scoreLabel(level)}
        </Badge>
      )}
    </div>
  );
}

export { scoreLevel, scoreBadgeClasses, scoreLabel };
