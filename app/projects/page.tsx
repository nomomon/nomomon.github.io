import { AboutMe } from "@/components/templates/about-me";
import MarkdownCollection from "@/components/templates/markdown-collection";

const ProjectsPage = async () => {
  return (
    <>
      <div className="mb-8">
        <AboutMe />
      </div>
      <MarkdownCollection
        filter={(data) => data.type === "project"}
        title="Projects"
      />
    </>
  );
};

export default ProjectsPage;
