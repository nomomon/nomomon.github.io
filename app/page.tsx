import { AboutMe } from "@/components/templates/about-me";
import { create } from "@/lib/utils";

export default async function Home() {
  const { data, markdown, error } = await create();

  return (
    <>
      <AboutMe />

      <div className="mt-8">
        <div className="markdown-body">
          <article dangerouslySetInnerHTML={{ __html: markdown || "" }} />
        </div>
      </div>
    </>
  );
}
