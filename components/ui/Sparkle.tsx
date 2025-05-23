import React from "react";

export function Sparkle({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="gold"
      style={style}
      className={className}
    >
      <polygon points="10,1 12,7 18,8 13,12 14,18 10,15 6,18 7,12 2,8 8,7" />
    </svg>
  );
}
