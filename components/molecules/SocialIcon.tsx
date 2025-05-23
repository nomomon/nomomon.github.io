import {
  Github,
  Linkedin,
  HelpCircle,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import React from "react";

interface SocialIconProps {
  platform: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  className = "h-5 w-5 text-muted-foreground",
}) => {
  switch (platform) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "stackoverflow":
      return <HelpCircle className={className} />;
    case "telegram":
      return <MessageCircle className={className} />;
    default:
      return <ExternalLink className={className} />;
  }
};
