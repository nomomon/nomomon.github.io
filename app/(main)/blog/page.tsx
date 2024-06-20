import { AboutMe } from "@/components/templates/about-me";
import MarkdownCollection from "@/components/templates/markdown-collection";

const BlogPage = async () => {
  return (
    <MarkdownCollection filter={(data) => data.type === "blog"} title="Blog" />
  );
};

export default BlogPage;
