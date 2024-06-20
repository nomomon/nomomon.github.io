import ClientOnlyPortal from "@/components/ui/client-only-portal";
import socialLinks from "@/public/social-links.json";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <ClientOnlyPortal selector="nav">
      <div className="w-full h-12 flex space-x-4 items-center justify-center">
        {socialLinks.map(({ name, url, iconUrl }, index) => (
          <Link key={index} href={url}>
            <img
              src={iconUrl}
              alt={name}
              className="w-6 h-6 cursor-pointer opacity-50 hover:opacity-80"
            />
          </Link>
        ))}
      </div>
    </ClientOnlyPortal>
  );
};

export default SocialLinks;
