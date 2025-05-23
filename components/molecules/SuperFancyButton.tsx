import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export interface SuperFancyButtonProps extends ButtonProps {
  sparkleCount?: number;
}

export const SuperFancyButton = React.forwardRef<
  HTMLButtonElement,
  SuperFancyButtonProps
>(({ children, sparkleCount = 4, ...props }, ref) => {
  // Generate random positions for sparkles
  const sparkles = Array.from({ length: sparkleCount }).map((_, i) => {
    // Random positions around the button
    const top = Math.random() * 60 + "%";
    const left = Math.random() * 80 + "%";
    const delay = (Math.random() * 1.2).toFixed(2) + "s";
    return (
      <Sparkles
        key={i}
        style={{
          position: "absolute",
          top,
          left,
          pointerEvents: "none",
          zIndex: 2,
          animationDelay: delay,
        }}
        size={Math.random() * 10 + 5}
        color="gold"
        className="animate-sparkle"
      />
    );
  });

  return (
    <span className="relative inline-block group">
      <Button
        ref={ref}
        variant="fancy"
        {...props}
        className={
          "relative overflow-visible shadow-2xl ring-4 ring-pink-300/40 ring-offset-2 ring-offset-purple-200/30 " +
          (props.className || "")
        }
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Button>
      {/* Sparkles overlay */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full z-20"
      >
        {sparkles}
      </span>
    </span>
  );
});
SuperFancyButton.displayName = "SuperFancyButton";
