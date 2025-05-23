import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  readonly name: string;
  readonly className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <Badge
      className={
        className ??
        "bg-gradient-to-r from-pink-500/80 to-purple-500/80 hover:from-pink-500 hover:to-purple-500 transition-colors"
      }
    >
      {name}
    </Badge>
  );
}
