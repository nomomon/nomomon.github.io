import fs from "fs";
import path from "path";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import matter from "gray-matter";
import markdownit from "markdown-it";
import mdk from "@traptitech/markdown-it-katex";
import mdh from "markdown-it-highlightjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function* walk(dir: string): AsyncGenerator<string, void, void> {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

export function parseMarkdown(text: string) {
  const mdSettings = {
    html: true,
    linkify: true,
  };
  const katexSettings = { blockClass: "math-block", errorColor: " #cc0000" };
  const highlightSettings = {
    inline: false,
  };

  const { data, content } = matter(text);

  const markdown = markdownit(mdSettings)
    .use(mdk, katexSettings)
    .use(mdh, highlightSettings)
    .render(content);

  return { data, markdown };
}
