"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageTabs = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex gap-6 my-2 text-muted-foreground text-sm font-semibold">
        <Link href="/" className={pathname === "/" ? "text-black" : ""}>
          Projects
        </Link>
        <Link href="/blog" className={pathname === "/blog" ? "text-black" : ""}>
          Blog Posts
        </Link>
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default PageTabs;
