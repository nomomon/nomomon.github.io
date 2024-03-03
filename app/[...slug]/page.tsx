import { parseMarkdown, walk } from "@/lib/utils";
import { readFileSync, existsSync } from "fs";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  async function create() {
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

  const { data, markdown, error } = await create();

  if (error || !data || !markdown) {
    return notFound();
  }

  return (
    <div>
      <div className="markdown-body">
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

      if (slug[slug.length - 1] === "index") {
        slugs.push({ slug: slug.slice(0, -1) });
      }
    }
  }

  return slugs;
}
