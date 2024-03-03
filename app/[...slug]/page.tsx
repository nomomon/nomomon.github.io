import { parseMarkdown, walk } from "@/lib/utils";
import { readFileSync, existsSync } from "fs";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

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

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // Read the file
  const filePath = `public/${slug.join("/")}.md`;
  const text = readFileSync(filePath, "utf-8");
  const { data } = parseMarkdown(text);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title || "Untitled",
    openGraph: {
      images: [data.thumbnail, ...previousImages],
    },
  };
}
