"use client";

import Link from "next/link";
import { FC } from "react";

const links = [
  { name: "About", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Projects", url: "/projects" },
];

export const NavBar: FC = () => {
  return (
    <nav className="fixed top-0 h-12 w-full mb-4 shadow-sm flex items-center justify-center z-10 bg-white bg-opacity-[50] bg-blend-soft-light">
      <div className="w-full max-w-4xl flex gap-4 text-gray-500 max-md:px-4 max-md:max-w-full">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="duration-300 hover:text-blue-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
