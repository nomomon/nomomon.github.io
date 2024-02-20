"use server";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { parseMarkdown, walk } from "@/lib/utils";
import { readFileSync } from "fs";
import Link from "next/link";
import { FC } from "react";

interface MarkdownCollectionProps {
  title?: string;
  filter?: (data: { [key: string]: any }) => boolean;
}

const MarkdownCollection: FC<MarkdownCollectionProps> = async ({
  title,
  filter,
}) => {
  async function create() {
    "use server";
    try {
      const posts = [];
      for await (const filepath of walk("public/")) {
        if (filepath.endsWith(".md")) {
          const text = readFileSync(filepath, "utf-8");
          const { data } = parseMarkdown(text);

          if (filter && !filter(data)) continue;

          const link = filepath
            .replace("public/", "")
            .replace(".md", "")
            .split("/");
          data.link = link;
          posts.push(data);
        }
      }
      return posts;
    } catch (e) {
      return [];
    }
  }

  const posts = await create();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {posts.map((post, i) => (
          <Link key={i} href={`/${post.link.join("/")}`}>
            <Card className="cursor-pointer bg-white duration-100 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-md">{post.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarkdownCollection;
