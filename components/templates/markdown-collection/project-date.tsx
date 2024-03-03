import { ArrowRight, Calendar } from "lucide-react";
import { FC } from "react";

interface ProjectDateProps {
  post: { [key: string]: any };
}

const ProjectDate: FC<ProjectDateProps> = ({ post }) => {
  const dateObj = new Date(post.date);
  const endDateObj =
    post.endDate == "now" ? new Date() : new Date(post.endDate);

  const date = dateObj.toLocaleDateString("en-En", {
    month: "short",
    year: "numeric",
  });
  const endDate = endDateObj.toLocaleDateString("en-En", {
    month: "short",
    year: "numeric",
  });

  // show end date if it exists and the month is different from the start date
  const showEndDate =
    post.endDate &&
    (endDateObj.getMonth() !== dateObj.getMonth() ||
      endDateObj.getFullYear() !== dateObj.getFullYear());

  return (
    <div className="text-sm flex flex-row items-center justify-start text-muted-foreground">
      <Calendar className="w-4 h-4 inline-block mr-1" />
      {date}
      {showEndDate && (
        <>
          <ArrowRight className="inline-block w-4 h-4 mx-0.5" />
          {endDate}
        </>
      )}
    </div>
  );
};

export default ProjectDate;
