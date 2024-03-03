import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface PreviewCardBlogProps {
  post: { [key: string]: any };
}

const PreviewCardBlog: FC<PreviewCardBlogProps> = ({ post }) => {
  return (
    <Link href={`/${post.link.join("/")}`}>
      <Card className="h-72 cursor-pointer bg-white duration-100 hover:shadow-md">
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
        <CardHeader className="shadow-[0_-5px_20px_-15px_rgba(0,0,0,0.3)] z-50">
          <CardTitle className="text-md">{post.title}</CardTitle>
          <CardDescription>
            <Calendar className="w-4 h-4 inline-block mr-2" />
            {new Date(post.date).toLocaleDateString()}
            {new Date(post.endDate).toLocaleDateString()}
          </CardDescription>
          <CardDescription className="line-clamp-3">
            {post.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PreviewCardBlog;
