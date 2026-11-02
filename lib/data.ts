import type {
  ContactLink,
  ExperienceItem,
  NavLink,
  ProjectItem,
  SkillItem,
} from "@/types";

export const SITE = {
  name: "Muhammad Ramadan",
  role: "Web Developer",
  tagline: "Specialized in WordPress, Webflow, and Modern Frontend Development.",
  // TODO: replace with the real production domain before deploying
  url: "https://muhammadramadan.dev",
  location: "Damascus, Syria",
  description:
    "Muhammad Ramadan is a Web Developer specializing in WordPress, Webflow, and modern frontend development — turning Figma designs into pixel-perfect, high-performance websites for clients across Saudi Arabia, Malaysia, the United States, and Syria.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT = {
  eyebrow: "// 01_about",
  heading: "Building the web, precisely.",
  paragraphs: [
    "I'm a web developer with more than 3 years of experience designing and building responsive, high-performance websites for clients in Saudi Arabia, Malaysia, the United States, and Syria.",
    "My work sits at the intersection of design and code: I specialize in translating Figma designs into pixel-perfect Webflow and WordPress builds, complete with custom animations and interactions — then optimize every build for speed, accessibility, and cross-browser reliability.",
    "Whether it's a corporate site, an e-commerce storefront, or a modern interactive frontend, I care about the same things: clean structure, deliberate motion, and an experience that feels as good as it looks.",
  ],
  stats: [
    { label: "Years of experience", value: "3+" },
    { label: "Countries served", value: "4" },
    { label: "Shipped projects", value: "10+" },
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ibtikar",
    role: "Web Developer",
    company: "Ibtikar Communications",
    companyUrl: "https://ibtikar.me/",
    location: "Syria · Full-Time",
    start: "Feb 2026",
    end: "Present",
    current: true,
    summary:
      "Building responsive WordPress websites for clients across industries, translating Figma designs into fully interactive, animated experiences.",
    highlights: [
      "Developed responsive websites using WordPress and squarespace for a range of industries",
      "Translated Figma designs into fully functional websites with smooth animations and interactive experiences",
    ],
    projects: ["ibtikar.me", "turtlewhite.com", "comtechsteelindustries.com", "zconsulting-co.com"],
  },
  {
    id: "gs-capital",
    role: "Web Developer",
    company: "GS Capital",
    companyUrl: "https://gs-capital.co/",
    location: "Syria · Full-Time",
    start: "Feb 2025",
    end: "Jun 2025",
    summary:
      "Designed and developed modern and WordPress websites for corporate clients, with a focus on pixel-perfect execution of Figma designs.",
    highlights: [
      "Designed and developed modern and WordPress websites for corporate clients",
      "Implemented pixel-perfect layouts from Figma with engaging animations and interactions",
    ],
    projects: ["gs-capital.co", "gs-funded.com"],
  },
  {
    id: "in-the-black-media",
    role: "Freelance Web Developer",
    company: "In The Black Media",
    companyUrl: "https://www.intheblackmedia.com/",
    location: "United States · Freelance",
    start: "Jun 2024",
    end: "Aug 2024",
    summary:
      "Collaborated remotely with a US-based design team, bringing creative concepts to life through Webflow animations and performance-focused builds.",
    highlights: [
      "Collaborated with the design team to bring creative concepts to life using Webflow animations",
      "Conducted performance testing and optimization to deliver seamless, responsive websites",
      "Created and customized Webflow-based websites, ensuring design consistency and enhanced UX/UI",
    ],
    projects: ["intheblackmedia.com"],
  },
  {
    id: "sarrdeh-tech",
    role: "Web Developer",
    company: "Sarrdeh Tech",
    location: "Syria · Full-Time",
    start: "Apr 2024",
    end: "Mar 2025",
    summary:
      "Built and maintained responsive WordPress websites and e-commerce platforms for clients in Saudi Arabia and Malaysia, ensuring cross-browser reliability at every step.",
    highlights: [
      "Developed and maintained responsive WordPress websites and e-commerce platforms",
      "Translated Figma designs into fully functional Webflow websites with interactive animations",
      "Ensured cross-browser compatibility and responsiveness for all website projects",
      "Improved website performance and optimized user experience across various platforms",
    ],
    projects: ["Oppoliaksa (KSA)", "EMTC (KSA)", "Team One (KSA)", "A-Z Bookstore (Malaysia)"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "oppolia-ksa",
    title: "Oppolia KSA",
    client: "Oppolia KSA",
    country: "Saudi Arabia",
    description:
      "A modern corporate website for a capital and funding group, built in Webflow from Figma designs with custom interactions and motion throughout.",
    tech: ["Wordpress", "Figma", "JavaScript"],
    url: "https://oppoliaksa.com/",
    image: "/projects/profile/oppolia.png",
  },
  {
    id: "gs-capital",
    title: "GS Capital",
    client: "GS Capital",
    country: "Syria",
    description:
      "A modern corporate website for a capital and funding group, built in Webflow from Figma designs with custom interactions and motion throughout.",
    tech: ["Wordpress", "Figma", "JavaScript"],
    url: "https://gs-capital.co/",
    image: "/projects/gs.png",
  },
  {
    id: "ibtikar",
    title: "Ibtikar Communications",
    client: "Ibtikar",
    country: "Syria",
    description:
      "Agency website for a communications firm, translated pixel-for-pixel from Figma into a responsive Webflow build with layered animation.",
    tech: ["Wordpress", "php", "Figma"],
    url: "https://ibtikar.me/",
    image: "/projects/ibtikar.png",
  },
  {
    id: "turtle-white",
    title: "Turtle White",
    client: "Turtle White",
    country: "Syria",
    description:
      "A brand-forward site built with careful attention to spacing, typography, and interactive scroll behavior.",
    tech: ["Wordpress", "php"],
    url: "https://turtlewhite.com/",
    image: "/projects/turtle.png",
  },
  {
    id: "emtc",
    title: "EMTC",
    client: "EMTC",
    country: "Saudi Arabia",
    description:
      "Responsive WordPress site for an education and training provider, optimized for performance and cross-browser consistency.",
    tech: ["WordPress", "php", "javascript"],
    url: "https://emtc.edu.sa",
    image: "/projects/emtc.png",
  },
  {
    id: "az-bookstore",
    title: "A-Z Bookstore",
    client: "A-Z Bookstore",
    country: "Malaysia",
    description:
      "A WooCommerce storefront built for reliability and speed, with a UX tuned for browsing and checkout on every device.",
    tech: ["WordPress", "WooCommerce"],
    url: "https://www.a-zbookstore.com",
    image: "/projects/a-z.png",
  },
  {
    id: "in-the-black-media",
    title: "In The Black Media",
    client: "In The Black Media",
    country: "United States",
    description:
      "A US media company site with Webflow-driven animation, built in close collaboration with the in-house design team.",
    tech: ["Webflow", "Figma"],
    url: "https://www.intheblackmedia.com/",
    image: "/projects/in-the-black.png",
  },
  {
    id: "comtech",
    title: "Comtech Steel Industries",
    client: "Comtech Steel Industries",
    country: "Syria",
    description:
      "Corporate presence for an industrial manufacturer, focused on clear information architecture and fast load times.",
    tech: ["Squarespace", "CSS"],
    url: "https://www.comtechsteelindustries.com/",
    image: "/projects/comtech.png",
  },
];

export const SKILLS: SkillItem[] = [
  { name: "WordPress", category: "cms" },
  { name: "Webflow", category: "cms" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "WooCommerce", category: "commerce" },
  { name: "Shopify", category: "commerce" },
  { name: "Figma", category: "tooling" },
  { name: "Git", category: "tooling" },
];

export const CONTACT: ContactLink[] = [
  {
    label: "Email",
    value: "mohadramadan2001@gmail.com",
    href: "mailto:mohadramadan2001@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+963 937 515 437",
    href: "tel:+963937515437",
    icon: "phone",
  },
  {
    label: "Location",
    value: "Damascus, Syria",
    href: "#",
    icon: "mapPin",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/963937515437",
    icon: "whatsapp",
  },
  {
    label: "GitHub",
    // TODO: replace with the real GitHub profile URL
    value: "github.com/muhammed-ramadan000",
    href: "https://github.com/",
    icon: "github",
  },
  {
    label: "LinkedIn",
    // TODO: replace with the real LinkedIn profile URL
    value: "https://www.linkedin.com/in/muhammed-ramadan-173356183/",
    href: "https://linkedin.com/",
    icon: "linkedin",
  },
];

export const RESUME_PATH = "/resume/Muhammad-Ramadan-CV.pdf";

// Drop your photo in /public/profile/ and update the filename here if needed
export const HERO_PHOTO_PATH = "/projects/profile/ramadan portfolio.png";
