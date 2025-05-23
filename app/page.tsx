import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import config from "@/lib/config";
import { Heading1 } from "@/components/molecules/Heading1";
import { Heading2 } from "@/components/molecules/Heading2";
import { SectionContainer } from "@/components/molecules/SectionContainer";
import { SkillBadge } from "@/components/molecules/SkillBadge";
import { SocialLink } from "@/components/molecules/SocialLink";
import { nanoid } from "nanoid";

export default function Home() {
  // Helper function to get the appropriate icon for social platforms
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "stackoverflow":
        return <HelpCircle className="h-5 w-5" />;
      case "telegram":
        return <MessageCircle className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">{config.name.split(" ")[0]}</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="transition-colors hover:text-foreground/80"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                href="#achievements"
                className="transition-colors hover:text-foreground/80"
              >
                Achievements
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="flex items-center gap-2">
              {config.social.map((social) => (
                <SocialLink
                  key={social.platform + social.url}
                  href={social.url}
                  icon={getSocialIcon(social.platform)}
                  label={social.platform}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="container py-6 md:py-12">
        <SectionContainer
          id="hero"
          className="py-12 md:py-20 px-6 md:px-10 rounded-lg bg-white shadow-sm mb-8"
        >
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <Heading1>
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  {config.name}
                </span>
              </Heading1>
              <p className="text-xl text-muted-foreground">{config.title}</p>
              <p className="text-muted-foreground max-w-[600px]">
                {config.bio}
              </p>
              <p className="text-sm text-muted-foreground italic">
                That guy with that unpronounceable last name 😂
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={
                  config.profileImage ?? "/placeholder.svg?height=300&width=300"
                }
                alt={`${config.name} profile`}
                width={300}
                height={300}
                className="rounded-full border-4 border-muted p-1"
              />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="about">
          <Heading2>About Me</Heading2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {config.about.paragraphs.map((paragraph) => (
                <p key={nanoid()}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {config.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="experience">
          <Heading2>Work Experience</Heading2>
          <div className="space-y-8">
            {config.workExperience.map((work) => (
              <div
                key={work.company + work.position + work.duration}
                className="border-l-4 border-gradient-to-b from-pink-400 to-purple-600 pl-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium">{work.position}</h3>
                  <span className="text-sm text-muted-foreground">
                    {work.duration}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground mb-2">
                  {work.company}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {work.location} • {work.type}
                </p>
                <ul className="space-y-2 mb-4">
                  {work.description.map((desc) => (
                    <li
                      key={nanoid()}
                      className="text-sm text-muted-foreground"
                    >
                      • {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {work.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="projects">
          <Heading2>Projects</Heading2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.projects
              .filter((project) => project.featured)
              .map((project) => (
                <Card
                  key={project.title + (project.date ?? "")}
                  className="border border-muted/40 hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.category === "data-science"
                        ? "Data Science"
                        : "Software Development"}
                      {project.date && ` • ${project.date}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={
                        project.image ?? "/placeholder.svg?height=200&width=400"
                      }
                      alt={`${project.title} screenshot`}
                      width={400}
                      height={200}
                      className="rounded-md mb-4 object-cover w-full h-48"
                    />
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <SocialLink
                          href={project.githubUrl}
                          icon={<ExternalLink className="h-5 w-5" />}
                          label="GitHub"
                        />
                      )}
                      {project.demoUrl && (
                        <SocialLink
                          href={project.demoUrl}
                          icon={<ExternalLink className="h-5 w-5" />}
                          label="Live Demo"
                        />
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link
                href={
                  config.social.find((s) => s.platform === "github")?.url ?? "#"
                }
                target="_blank"
                rel="noreferrer"
              >
                View more on GitHub
              </Link>
            </Button>
          </div>
        </SectionContainer>

        <SectionContainer id="educations">
          <Heading2>Education</Heading2>
          <div className="space-y-8">
            {config.education.map((edu) => (
              <div key={edu.title + edu.year} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white">
                  <span className="font-bold">{edu.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{edu.title}</h3>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="contact">
          <Heading2>Get In Touch</Heading2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                I'm always open to discussing new projects, opportunities, or
                partnerships. Let's connect to discuss how we can turn data into
                magic and build AI that actually makes life easier! 🚀
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>{config.contact.email}</span>
                </div>
                {config.contact.location && (
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 text-muted-foreground">📍</span>
                    <span>{config.contact.location}</span>
                  </div>
                )}
                {config.social.map((social) => (
                  <div
                    key={social.platform + social.url}
                    className="flex items-center gap-2"
                  >
                    {getSocialIcon(social.platform)}
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {(() => {
                        switch (social.platform) {
                          case "github":
                            return "GitHub";
                          case "linkedin":
                            return "LinkedIn";
                          case "stackoverflow":
                            return "StackOverflow";
                          case "telegram":
                            return "Telegram";
                          default:
                            return social.platform;
                        }
                      })()}
                    </Link>
                  </div>
                ))}
                {config.resume && (
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href={config.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Download Resume
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {config.testimonial && (
              <div className="bg-muted/30 p-6 rounded-lg border border-muted/40">
                <p className="italic text-muted-foreground">
                  "{config.testimonial.quote}"
                </p>
                <p className="mt-4 font-medium">
                  — {config.testimonial.author}, {config.testimonial.position}
                </p>
              </div>
            )}
          </div>
        </SectionContainer>
      </main>
      <footer className="border-t py-6 md:py-0 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {config.social.map((social) => (
              <SocialLink
                key={social.platform + social.url}
                href={social.url}
                icon={getSocialIcon(social.platform)}
                label={social.platform}
              />
            ))}
            <Link href={`mailto:${config.contact.email}`} className="p-2">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
