// lib/data.ts
import {Briefcase, Code, GraduationCap} from "lucide-react";

// Define and export the type for a single project
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  live: string;
  github: string;
};

// Define and export your projects array
export const projects: Project[] = [
  {
    id: 1,
    title: "QuickShow — Cinema Booking Platform",
    description:
      "A full-stack production-ready booking platform featuring event-driven architecture for real-time seat management. Integrated with Stripe for secure payments and Clerk for synchronized authentication.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Inngest",
      "Stripe",
      "Clerk",
      "Tailwind CSS",
    ],
    image: "/quickshow.png",
    live: "https://ticket-booking-neon.vercel.app/",
    github: "https://github.com/ahmed22981/ticket-booking",
  },
  {
    id: 2,
    title: "InstaLeh — Social media App",
    description:
      "A feature-rich social media app with real-time chat, notifications, and post interactions. Uses Socket.io for live updates, Redux Toolkit for efficient state management, and ImageKit for optimized media delivery.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Clerk",
      "Inngest",
      "Tailwind CSS",
    ],
    image: "/instaleh.png",
    live: "https://instaleh.vercel.app/",
    github: "https://github.com/ahmed22981/social_media",
  },
  //add 5 more to test carousel
  {
    id: 3,
    title: "Easy Cook Meals",
    description:
      "A dynamic recipe manager built with Angular and TypeScript. Features a component-based architecture, reactive forms for meal planning, and comprehensive client-side validation.",
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "Github"],
    image: "/Abgular.png",
    live: "https://easy-cook-meals.vercel.app/",
    github: "https://github.com/ahmed22981/Easy-Cook-Meals",
  },
  {
    id: 4,
    title: "AgriLink — Agricultural Platform",
    description:
      "A full-stack commerce platform for agriculture featuring interactive geospatial mapping with Leaflet. Implements a secure REST API with JWT authentication and optimized media management via Cloudinary.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Leaflet",
      "Cloudinary",
      "Github",
    ],
    image: "/agrilink.png",
    live: "/", // You can link to the portfolio itself
    github: "https://github.com/GP-AgriLink/AgriLink-MVP",
  },
  // {
  //     id: 5,
  //     title: "Subscription Trackr",
  //     description: "A full-stack subscription management app built with Next.js and Prisma. Features a responsive dashboard, multi-currency conversion, and automated renewal alerts to help users track their spending.",
  //     technologies: ["Next.js", "Supabase", "Tailwind CSS", "Prisma", "Vercel", "OAuth"],
  //     image: "/subscriptionTrackr.png",
  //     live: "https://subsciptiontrackr.vercel.app",
  //     github: "https://github.com/sparsh-kamat/SubscriptionTrackr",
  // },
  // {
  //     id: 6,
  //     title: "Portfolio Website",
  //     description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
  //     technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
  //     image: "/portfoliomockup.png",
  //     live: "#", // You can link to the portfolio itself
  //     github: "https://github.com/sparsh-kamat/portfolio-v2",
  // },

  // ... more projects
];

export const historyData = [
  {
    icon: Code,
    title: "Full Stack Web Development (MEARN)",
    company: "Information Technology Institute (ITI)",
    date: "July 2025 - Dec 2025",
    description:
      "Completed an intensive professional training program focused on the MERN stack. Built responsive web applications using MongoDB, Express, React, Angular and Node.js, mastering modern web architecture and database management.",
  },
  {
    icon: Briefcase,
    title: "Technical Office Engineer",
    company: "EMS Company",
    date: "Jan 2025 - June 2025",
    description:
      "Managed technical documentation and coordinated project requirements. Developed strong analytical skills and attention to detail while ensuring compliance with engineering standards.",
  },
  {
    icon: Briefcase,
    title: "Electrical Site Engineer",
    company: "Al-Maged Group",
    date: "June 2023 - Dec 2024",
    description:
      "Supervised site operations and led technical teams to deliver projects on schedule. Honed problem-solving abilities in high-pressure environments.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Electrical Engineering",
    institution: "October 6 University",
    date: "2016 - 2022",
    description:
      "Graduated with a 'Very Good' (B) grade. Gained a strong foundation in engineering mathematics, logic, and systems analysis.",
  },
];

export const frontendTech = [
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Angular",
  "Bootstrap",
  "Tailwind CSS",
  "Matiral UI",
];

export const backendTech = [
  "Node.js",
  "Express",
  "Nest.js",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
];

export const toolsAndDevops = [
  "GitHub",
  "Vercel",
  "Docker",
  "Unit Testing",
  "RESTfull APIs",
  "GraphQl",
];

export const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
];
