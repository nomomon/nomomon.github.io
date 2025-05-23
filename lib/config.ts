export type Skill = {
  name: string;
  category:
    | "programming"
    | "framework"
    | "tool"
    | "database"
    | "cloud"
    | "other";
};

export type Project = {
  title: string;
  description: string;
  category: "software" | "data-science" | "other";
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  date?: string;
};

export type Education = {
  title: string;
  description: string;
  year: number;
  url?: string;
};

export type SocialLink = {
  platform:
    | "github"
    | "linkedin"
    | "twitter"
    | "instagram"
    | "facebook"
    | "youtube"
    | "medium"
    | "dev"
    | "stackoverflow"
    | "telegram"
    | "other";
  url: string;
  username?: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  description: string[];
  skills: string[];
};

export type FunFact = {
  emoji: string;
  fact: string;
};

export type PersonalConfig = {
  name: string;
  title: string;
  bio: string;
  about: {
    paragraphs: string[];
    hobbies: string;
  };
  funFacts: FunFact[];
  profileImage?: string;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  workExperience: WorkExperience[];
  contact: {
    getInTouchPrompt?: string;
    email?: string;
    location?: string;
  };
  social: SocialLink[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  resume?: {
    link: string;
    label?: string;
  };
  footerCopyright?: string;
};

const config: PersonalConfig = {
  name: "Mansur Nurmukhambetov",
  title: "Machine Learning Engineer & Community Builder",
  bio: "I turn data into magic. From molecules to neural nets, I build things that learn—and love sharing the ride. ☕️",
  about: {
    paragraphs: [
      "A tinkerer at heart who writes code by day and chases film photo sunsets by evening. I believe learning is a lifelong journey best shared over coffee and whiteboard sketches.",
      "I craft AI and ML solutions at Researchable B.V., weave together community-driven ML competitions, and occasionally nerd out on inversive geometry while sipping matcha. When I'm not coding, you'll find me fixing bikes, exploring hidden corners of Groningen, or cheering on a random chess engine battle.",
    ],
    hobbies:
      "film photography, running trails, puzzle hunts, bike repair, and cozy coding sessions with friends",
  },
  funFacts: [
    {
      emoji: "📸",
      fact: "I've shot 5 rolls of film in a single photo walk—no regrets!",
    },
    {
      emoji: "🦆",
      fact: "My desk hosts a rubber duck debugging squad of 7 quackers.🦆🦆🦆",
    },
    {
      emoji: "🤖",
      fact: "Won a Yandex AI art contest with a smart speaker prize.",
    },
    {
      emoji: "🌐",
      fact: "Learning Dutch, Kazakh and Arabic one flashcard at a time.",
    },
  ],
  profileImage: "/assets/me.jpg",
  skills: [
    { name: "Python", category: "programming" },
    { name: "TypeScript", category: "programming" },
    { name: "React.js", category: "framework" },
    { name: "TensorFlow", category: "framework" },
    { name: "MLOps (MLflow, Azure)", category: "other" },
    { name: "Data Science", category: "other" },
    { name: "Algorithm Development", category: "other" },
    { name: "Serverless Computing", category: "cloud" },
    { name: "CI/CD", category: "tool" },
    { name: "Data Visualization", category: "other" },
  ],
  projects: [
    {
      title: "Inversive Geometry",
      description:
        "A simple React.js app that demonstrates the inversive geometry of a point in a circle.",
      category: "software",
      technologies: ["React.js", "JavaScript", "Mathematics"],
      githubUrl: "https://github.com/nomomon/inversive-geometry",
      demoUrl: "https://nomomon.github.io/inversive-geometry/",
      featured: true,
      date: "Aug 2022",
      image: "/projects/inversive-geometry/assets/inversive-geometry.jpeg",
    },
    {
      title: "Markov Chain Text Generator",
      description:
        "Text generator written in React.js that uses Markov chains to generate text based on a given input.",
      image: "/projects/markov-chain-text/assets/markov-chain-text.jpeg",
      category: "software",
      technologies: ["React.js", "Markov Chains", "NLP"],
      githubUrl: "https://github.com/nomomon/markov-text-generator",
      demoUrl: "https://nomomon.github.io/markov-text-generator/",
      featured: true,
      date: "Aug 2022",
    },
    {
      title: "Molecule Energy Estimator",
      description:
        "The chemical and physical properties of a molecule are determined not only by its structural formula, but also by its conformation – positions of atoms in 3d space.",
      category: "data-science",
      technologies: ["Python", "Machine Learning", "Chemistry"],
      githubUrl: "https://github.com/nomomon/molecule-energy-estimator",
      featured: true,
      date: "Apr 2022 - Jul 2022",
      image:
        "/projects/molecule-energy-estimator/assets/rucode-5.0-preview.gif",
    },
    {
      title: "Data Science Bootcamp",
      description:
        "Collection of final projects from data science bootcamp from Yandex Practicum.",
      category: "data-science",
      technologies: ["Python", "Data Science", "Machine Learning"],
      githubUrl: "https://github.com/nomomon/data-science-bootcamp",
      featured: true,
      date: "Feb 2022 - May 2025",
      image: "/projects/yandex-practicum/assets/yandex-practicum.png",
    },
    {
      title: "Anime RecSys",
      description:
        "Development and comparison of user-item recommendation systems in TensorFlow on an anime dataset.",
      category: "data-science",
      technologies: ["TensorFlow", "Recommendation Systems", "Python"],
      githubUrl: "https://github.com/nomomon/anime-recsys",
      featured: true,
      date: "Sep 2021",
      image:
        "https://github.com/nomomon/Anime-RecSys/raw/main/images/banner.png",
    },
    {
      title: "Orama Visual Assistant",
      description:
        "Orama Visual Assistant is an app for visually impaired people that announces objects detected using user's phone camera.",
      category: "software",
      technologies: ["Computer Vision", "Mobile Development", "AI"],
      githubUrl: "https://github.com/nomomon/orama-visual-assistant",
      demoUrl: "https://nomomon.github.io/orama-visual-assistant/",
      featured: true,
      date: "Nov 2019 - Jan 2022",
      image: "/projects/orama-visual-assistant/assets/oramava-preview.jpeg",
    },
  ],
  education: [
    {
      title: "B.Sc. in Artificial Intelligence",
      description:
        "University of Groningen — specialized in ML, data science & algorithms.",
      year: 2024,
    },
    {
      title: "Yandex Data Science Bootcamp",
      description: "Intensive Python & ML immersion, final projects gallery.",
      year: 2022,
    },
  ],
  workExperience: [
    {
      company: "Researchable B.V.",
      position: "Machine Learning Engineer",
      duration: "Sep 2024 - Present",
      location: "Groningen, NL",
      type: "full-time",
      description: [
        "Developed algorithms to infer building structures from sensor metadata and measurements, resulting in a 300% reduction in manual inspection time.",
        "Built robust CI/CD pipelines deploying ML models in Azure serverless functions with real-time monitoring.",
        "Designed MLOps workflows with MLflow to track experiments, detect drift, and optimize models for increased reliability.",
        "Engineered end-to-end ML pipelines for ship energy usage forecasting, improving prediction accuracy by 15%.",
        "Utilized research-backed fuel efficiency models enabling 10% more fuel-efficient route planning.",
      ],
      skills: [
        "Large Language Models (LLM)",
        "Microsoft Azure",
        "MLOps",
        "Machine Learning",
      ],
    },
    {
      company: "Researchable B.V.",
      position: "Data Scientist",
      duration: "Sep 2022 - Sep 2024",
      location: "Groningen, Netherlands",
      type: "part-time",
      description: [
        "Designed and developed a large-scale data labeling platform for video analysis, reducing manual annotation time by 40%.",
        "Implemented automated segmentation and content analysis techniques that provided deep audience behavior insights.",
        "Contributed to more targeted content strategies through advanced data analysis.",
      ],
      skills: [
        "Machine Learning",
        "Serverless Computing",
        "Data Analysis",
        "Video Processing",
      ],
    },
  ],
  contact: {
    getInTouchPrompt:
      "I'm always up for a chat—whether it's AI, film cameras, or coffee spot recommendations in Groningen. Drop me a message! ☕️",
  },
  social: [
    {
      platform: "github",
      url: "https://github.com/nomomon",
      username: "nomomon",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/nomomon",
      username: "nomomon",
    },
    { platform: "telegram", url: "https://t.me/nomomon", username: "nomomon" },
    {
      platform: "stackoverflow",
      url: "https://stackoverflow.com/users/15930948/mansur",
      username: "mansur",
    },
  ],
  testimonial: {
    quote:
      "Mansur is a really talented and driven person that is always asking questions to learn more about a topic. As a student of a practical machine learning class, his group was exceptional and independent. Any practical problem gets him excited and he is always looking for optimizations.",
    author: "Ömer Tarık Özyılmaz",
    position: "CAIO/Co-Founder @ normai | PhD Candidate",
  },
  footerCopyright: `© ${new Date().getFullYear()} Mansur Nurmukhambetov. All rights reserved.`,
};

export default config;
