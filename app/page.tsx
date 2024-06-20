"use client";

import SocialLinks from "@/components/molecules/social-links";
import { AboutMe } from "@/components/templates/about-me";
import PageTabs from "@/components/templates/page-tabs";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <SocialLinks />
      <AboutMe />
      <PageTabs />
    </div>
  );
};

export default Page;
