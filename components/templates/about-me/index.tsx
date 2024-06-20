import { FC } from "react";
import info from "@/public/data/info.json";
import { Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export const AboutMe: FC = () => {
  return (
    <div className="flex flex-row items-center gap-6 max-md:flex-col">
      <div className="w-40 h-40">
        <img
          src="/assets/me.jpg"
          alt="Me"
          width={200}
          height={200}
          className="rounded-full object-fit"
        />
      </div>
      <div className="">
        <div className="font-bold text-xl">
          {info.firstname} {info.lastname}
        </div>
        <div className="my-2">
          <div className="text-gray-500 flex flex-row items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            {info.job.title}
            <Link
              href={info.job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 max-[350px]:hidden"
            >
              @{" "}
              <span className="decoration-dotted underline underline-offset-2 duration-300 hover:text-blue-500">
                {info.job.place}
              </span>
            </Link>
          </div>
          <div className="text-gray-500 flex flex-row items-center">
            <GraduationCap className="w-4 h-4 mr-1" />
            {info.degree.title}
            <Link
              href={info.degree.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 max-[350px]:hidden"
            >
              @{" "}
              <span className="decoration-dotted underline underline-offset-2 duration-300 hover:text-blue-500">
                {info.degree.place}
              </span>
            </Link>
          </div>
        </div>
        <div className="max-w-[38rem]">{info.description}</div>
      </div>
    </div>
  );
};
