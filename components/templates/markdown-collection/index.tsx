import { parseMarkdown, walk } from "@/lib/server_utils";
import { readFileSync } from "fs";
import { FC } from "react";
import PreviewCardProject from "./preview-card-project";

interface MarkdownCollectionProps {
  title?: string;
  filter?: (data: { [key: string]: any }) => boolean;
}

const MarkdownCollection: FC<MarkdownCollectionProps> = async ({
  title,
  filter,
}) => {
  async function create() {
    try {
      const posts = [];
      for await (const filepath of walk("public/")) {
        if (filepath.endsWith(".md")) {
          const text = readFileSync(filepath, "utf-8");
          const { data } = parseMarkdown(text);

          if ((filter && !filter(data)) || !data.title) continue;

          const link = filepath
            .replace("public/", "")
            .replace("index.md", "")
            .replace(".md", "")
            .split("/");
          data.link = link;
          posts.push(data);
        }
      }
      posts.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        if (new Date(a.date) > new Date(b.date)) return -1;
        return 0;
      });
      return posts;
    } catch (e) {
      return [];
    }
  }

  const posts = await create();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {posts.map((post, i) => (
          <PreviewCardProject key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MarkdownCollection;
