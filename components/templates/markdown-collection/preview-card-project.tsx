import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Play } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import ProjectDate from "./project-date";
import { Button } from "@/components/ui/button";

interface PreviewCardProjectProps {
  post: { [key: string]: any };
}

const PreviewCardProject: FC<PreviewCardProjectProps> = ({ post }) => {
  return (
    <Card className="h-72 bg-white duration-100 hover:shadow-md">
      <Link href={`/${post.link.join("/")}`} className=" cursor-pointer">
        <div className=" z-10 rounded-t-lg overflow-clip h-20 max-md:h-24 max-sm:h-20">
          <img
            src={post.thumbnail || "/assets/placeholder.png"}
            alt={post.title}
            width={500}
            height={300}
            // layout="responsive"
            className="z-10 object-cover w-full h-20 max-md:h-24 max-sm:h-20"
          />
        </div>
        <CardHeader className="shadow-[0_-5px_20px_-15px_rgba(0,0,0,0.3)] z-50 flex flex-col gap-2 mb-0">
          <CardTitle className="text-md -mb-1">{post.title}</CardTitle>
          <ProjectDate post={post} />
          <CardDescription className="text-xs line-clamp-3">
            {post.description}
          </CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="flex gap-2 py-0">
        {post.demoLink && (
          <Link href={post.demoLink}>
            <Button variant="outline" className="h-8 text-xs px-2">
              <Play className="w-3 h-3 mr-1" /> Demo
            </Button>
          </Link>
        )}
        {post.sourceLink && (
          <Link href={post.sourceLink}>
            <Button variant="outline" className="h-8 text-xs px-2">
              <Github className="w-3 h-3 mr-1" /> Source
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default PreviewCardProject;
