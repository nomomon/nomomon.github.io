import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly id?: string;
}

export function SectionContainer({
  children,
  className,
  id,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 px-6 md:px-10 rounded-lg bg-white shadow-sm my-8",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
