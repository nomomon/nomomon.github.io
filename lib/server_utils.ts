import { existsSync, readFileSync, promises } from "fs";
import path from "path";
import matter from "gray-matter";
import markdownit from "markdown-it";
import mdk from "@traptitech/markdown-it-katex";
import mdh from "markdown-it-highlightjs";

export async function* walk(dir: string): AsyncGenerator<string, void, void> {
  for await (const d of await promises.opendir(dir)) {
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

export async function create(params: { slug?: string[] } = {}) {
  try {
    let filePath = "public/index.md";

    if (params.slug) {
      const slugPath = params.slug.join("/");
      filePath = existsSync(`public/${slugPath}.md`)
        ? `public/${slugPath}.md`
        : `public/${slugPath}/index.md`;
    }

    if (!existsSync(filePath)) {
      throw new Error(`File not found, ${filePath}`);
    }

    const text = readFileSync(filePath, "utf-8");

    return { ...parseMarkdown(text), error: null };
  } catch (error) {
    console.error("Error:", error);
    return { error: JSON.stringify(error), data: null, markdown: null };
  }
}
