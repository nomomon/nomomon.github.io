import React from "react";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className || "p-2"}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
