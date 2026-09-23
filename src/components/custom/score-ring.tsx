"use client";

import { cn } from "@/lib/utils";

function scoreLevel(score: number) {
  if (score >= 67) return "good";
  if (score >= 34) return "fair";
  return "low";
}

interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function ScoreRing({ score, size = 40, strokeWidth = 3, className }: ScoreRingProps) {
  const level = scoreLevel(score);
  const strokeColor =
    level === "good" ? "#10b981" : level === "fair" ? "#f59e0b" : "#ef4444";
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/50"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-xs font-bold font-mono"
        style={{ color: strokeColor }}
      >
        {score}
      </span>
    </div>
  );
}
