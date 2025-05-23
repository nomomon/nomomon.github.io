import React from "react";
import Link from "next/link";

interface SocialLinkProps {
  readonly href: string;
  readonly icon: React.ReactNode;
  readonly label: string;
  readonly className?: string;
}

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className ?? "p-2"}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
