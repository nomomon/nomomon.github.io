import React from "react";
import { cn } from "@/lib/utils";

interface Heading2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Heading2({ children, className, ...props }: Heading2Props) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold tracking-tighter sm:text-3xl mb-6 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text inline-block",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
