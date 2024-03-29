import { create, parseMarkdown, walk } from "@/lib/server_utils";
import { readFileSync, existsSync } from "fs";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { AboutMe } from "@/components/templates/about-me";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const { data, markdown, error } = await create(params);

  if (error || !data || !markdown) {
    return notFound();
  }

  return (
    <>
      {!params.slug && (
        <div className="mb-8">
          <AboutMe />
        </div>
      )}
      <div>
        <div className="markdown-body">
          <article dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </div>
    </>
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
