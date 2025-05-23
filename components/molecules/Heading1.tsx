import { cn } from "@/lib/utils";
import React from "react";

interface Heading1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Heading1({ children, className, ...props }: Heading1Props) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
