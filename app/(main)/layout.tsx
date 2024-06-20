"use client";

import SocialLinks from "@/components/molecules/social-links";
import { AboutMe } from "@/components/templates/about-me";
import PageTabs from "@/components/templates/page-tabs";
import { FC } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const MainPageLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <SocialLinks />
      <AboutMe />
      <PageTabs />
      {children}
    </div>
  );
};

export default MainPageLayout;
