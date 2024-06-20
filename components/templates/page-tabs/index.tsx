import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PageTabs = () => {
  return (
    <Tabs defaultValue="projects" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="blog">Blog posts</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <p>Projects content</p>
      </TabsContent>
      <TabsContent value="blog"></TabsContent>
    </Tabs>
  );
};

export default PageTabs;
