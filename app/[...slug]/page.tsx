import { create, parseMarkdown, walk } from "@/lib/server_utils";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/molecules/nav-bar";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const { data, markdown, error } = await create(params);

  if (error || !data || !markdown) {
    return notFound();
  }

  return (
    <>
      <NavBar />
      <div className="mt-8">
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
