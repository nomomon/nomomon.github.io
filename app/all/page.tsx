import MarkdownCollection from "@/components/templates/markdown-collection";

const ProjectsPage = async () => {
  return (
    <>
      <MarkdownCollection filter={(data) => true} title="All" />
    </>
  );
};

export default ProjectsPage;
