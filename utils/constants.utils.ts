export const COLORS = {
  danger: "#fc5185",
  light: "#E6F1FF",
  primary: "#64ffda",
  wirePrimary: "#B7FFEE",
  cursorBgPrimary: "rgba(129, 229, 206, 0.25)",
  secondary: "#040918",
  lightSecondary: "#0b1841",
  lightnessSecondary: "#142145",
  slate: "#8892B0",
  lightSlate: "#A8B2D1",
  lightnessSlate: "#CCD6F6",
};

export const TEXT_SHADOW = {
  outlineSlate: `rgb(136, 146, 176) 1px 0px 0px,
  rgb(136, 146, 176) 0.540302px 0.841471px 0px,
  rgb(136, 146, 176) -0.416147px 0.909297px 0px,
  rgb(136, 146, 176) -0.989992px 0.14112px 0px,
  rgb(136, 146, 176) -0.653644px -0.756802px 0px,
  rgb(136, 146, 176) 0.283662px -0.958924px 0px,
  rgb(136, 146, 176) 0.96017px -0.279415px 0px`,
};

export const MOTION_EASE = {
  default: [0.6, 0.01, -0.05, 0.95],
};

export const NAV_LINKS = [
  {
    key: "#1",
    name: "About",
    url: "/about",
  },
  {
    key: "#2",
    name: "Work",
    url: "/work",
  },
];

export const SKILLS = [
  "Javascript",
  "Typescript",
  "HTML",
  "CSS & SCSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Prisma ORM",
  "Bootstrap",
  "Tailwindcss",
  "Material UI",
  "Webpack",
  "Vite.js",
  "Git",
  "Figma (Basic)",
  "Linux",
];

export type WorkProjectLink = {
  key: string;
  label: string;
  href: string;
};

export type WorkProjectItem = {
  id: string;
  year: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  stacks: string[];
  links: WorkProjectLink[];
};

export const WORK_PROJECTS: WorkProjectItem[] = [
  {
    id: "project-1",
    year: "2022",
    title: "Storybook",
    summary: "A Node.js application for creating and sharing personal stories.",
    description:
      "Built with Express, MongoDB, and Passport.js, this app features Google OAuth2 authentication. It allows users to write stories, set visibility, and explore shared stories from the community.",
    image: "/images/project/project02.png",
    stacks: ["Node.js", "Express", "MongoDB", "Passport.js"],
    links: [
      {
        key: "storybook-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/nodejs-storybooks-app",
      },
    ],
  },
  {
    id: "project-2",
    year: "2022",
    title: "Beifong Shop",
    summary:
      "A full-stack MERN e-commerce platform with comprehensive shopping features.",
    description:
      "Features product search, shopping cart functionality, user reviews, and integrated payment processing. A complete demonstration of MERN stack implementation.",
    image: "/images/project/project01.png",
    stacks: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    links: [
      {
        key: "beifong-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/MERN-Beifong-shop",
      },
    ],
  },
  {
    id: "project-3",
    year: "2022",
    title: "Portfolio v1",
    summary: "The initial version of my personal portfolio website.",
    description:
      "A clean and simple portfolio site built to showcase my first set of projects and skills, serving as the foundation for my subsequent personal branding.",
    image: "/images/project/project03.png",
    stacks: ["React.js", "TailwindCss", "Framer Motion"],
    links: [
      {
        key: "portfolio-v1-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/portfolio",
      },
    ],
  },
  {
    id: "project-4",
    year: "2023",
    title: "Portfolio v2",
    summary:
      "Current animated personal portfolio built with modern web technologies.",
    description:
      "Featuring advanced animations with Framer Motion, custom cursor interactions, and a highly modular architecture. Optimized for performance and visual impact.",
    image: "/images/project/project04.png",
    stacks: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    links: [
      {
        key: "portfolio-v2-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/portfolio-v2",
      },
    ],
  },
  {
    id: "project-5",
    year: "2023",
    title: "StoreGG",
    summary: "A game voucher top-up platform with a clean, modern interface.",
    description:
      "Focuses on providing a seamless user experience for purchasing game credits, featuring a landing page, game lists, and robust data-fetching.",
    image: "/images/project/project05.png",
    stacks: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize ORM",
      "Bootstrap 5",
    ],
    links: [
      {
        key: "storegg-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/StoreGG",
      },
    ],
  },
  {
    id: "project-6",
    year: "2023",
    title: "Baebid eAuction",
    summary:
      "A real-time e-auction marketplace for public and private bidding.",
    description:
      "Utilizes MySQL via Sequelize and Socket.io for real-time bid updates. Features comprehensive user roles, auction management, and an integrated bidding system.",
    image: "/images/project/project06.png",
    stacks: ["React", "Node.js", "Express", "MySQL"],
    links: [
      {
        key: "baebid-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/auction-marketplace",
      },
    ],
  },
  {
    id: "project-7",
    year: "2023",
    title: "Projexly",
    summary:
      "An app to manage lists of portfolio projects and project task management.",
    description:
      "A centralized dashboard for tracking development tasks and managing portfolio entries, streamlining the workflow for project organization.",
    image: "/images/project/project07.png",
    stacks: ["Node.js", "Express", "MongoDB", "Ejs"],
    links: [
      {
        key: "portfolio-mgmt-github",
        label: "Github",
        href: "https://github.com/MuhammadAkbar11/auction-marketplace",
      },
      {
        key: "portfolio-mgmt-url",
        label: "Live Demo",
        href: "https://projexly-n67q.onrender.com/",
      },
    ],
  },
];
