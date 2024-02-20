"use server";

import { parseMarkdown, walk } from "@/lib/utils";
import { readFileSync } from "fs";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  async function create() {
    "use server";
    try {
      const file = `public/${params.slug.join("/")}.md`;
      const text = readFileSync(file, "utf-8");
      return parseMarkdown(text);
    } catch (e) {
      return { data: {}, markdown: "" };
    }
  }

  const { data, markdown } = await create();

  if (markdown === "") {
    // TODO: add if publish is false
    return notFound();
  }

  return (
    <div>
      Page{" "}
      <span className="font-mono text-sm bg-gray-100 p-1 rounded-sm">
        {params.slug.join("/")}
      </span>
      <pre className="bg-gray-100 p-2 rounded-md overflow-auto text-sm my-2">
        {JSON.stringify(data)
          .replace(/,/g, ",\n\t")
          .replace("{", "{\n\t")
          .replace("}", "\n}")}
      </pre>
      <div className="markdown-body">
        <h1>{data?.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  const slugs = [];

  for await (const file of walk("public/")) {
    if (file.endsWith(".md")) {
      const slug = file.replace("public/", "").replace(".md", "").split("/");
      slugs.push({ slug });
    }
  }

  return slugs;
}
