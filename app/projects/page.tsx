import MarkdownCollection from "@/components/templates/markdown-collection";

const ProjectsPage = async () => {
  return (
    <>
      <MarkdownCollection
        filter={(data) => data.type === "project"}
        title="Projects"
      />
    </>
  );
};

export default ProjectsPage;
