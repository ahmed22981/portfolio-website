import Image from 'next/image';
import {
  // Existing standard icons
  IconBrandGithub, IconBrandReact, IconDatabase, IconBrandNodejs,
  IconBrandNextjs, IconBrandTypescript, IconBrandTailwind, IconBrandSupabase,
  IconBrandVercel, IconBrandFramerMotion, IconBrandPrisma, IconBrandOauth,
  IconBrandHtml5, IconBrandCss3, IconBrandMongodb, IconBrandJavascript,
  IconBrandDocker, IconBrandDjango, IconBrandAngular, IconBrandBootstrap,
  IconBrandPython, IconBrandCpp, IconBrandGraphql, 
  
  // NEW: Specific Brand Icons
  IconBrandStripe, IconBrandSocketIo, IconBrandRedux, IconBrandGit,
  
  // NEW: Concept Icons for tools without official brands
  IconApi,        // For REST API
  IconTestPipe,   // For Unit Testing
  IconBrush,      // For Material UI / Design
  IconMap,        // For Leaflet (Map)
  IconCloud,      // For Cloudinary (Cloud)
  IconUserShield, // For Clerk (Auth/Security)
  IconBolt        // For Inngest (Serverless/Fast)

} from "@tabler/icons-react";
import { JSX } from 'react';

const getTechIcon = (tech: string): JSX.Element | null => {
  // Normalize text: "Socket.io" -> "socketio", "Redux Toolkit" -> "reduxtoolkit"
  const normalizedTech = tech.toLowerCase().replace(/[.\s-]/g, "");

  const techIcons: { [key: string]: JSX.Element } = {
    // --- Frontend ---
    react: <IconBrandReact size={14} className="inline mr-1.5" />,
    nextjs: <IconBrandNextjs size={14} className="inline mr-1.5" />,
    typescript: <IconBrandTypescript size={14} className="inline mr-1.5" />,
    javascript: <IconBrandJavascript size={14} className="inline mr-1.5" />,
    html: <IconBrandHtml5 size={14} className="inline mr-1.5" />,
    css: <IconBrandCss3 size={14} className="inline mr-1.5" />,
    tailwindcss: <IconBrandTailwind size={14} className="inline mr-1.5" />,
    angular: <IconBrandAngular size={14} className="inline mr-1.5" />,
    bootstrap: <IconBrandBootstrap size={14} className="inline mr-1.5" />,
    framermotion: <IconBrandFramerMotion size={14} className="inline mr-1.5" />,
    matiralui: <IconBrush size={14} className="inline mr-1.5" />, // Typo handler
    materialui: <IconBrush size={14} className="inline mr-1.5" />,

    // --- Backend & Database ---
    nodejs: <IconBrandNodejs size={14} className="inline mr-1.5" />,
    python: <IconBrandPython size={14} className="inline mr-1.5" />,
    django: <IconBrandDjango size={14} className="inline mr-1.5" />,
    mongodb: <IconBrandMongodb size={14} className="inline mr-1.5" />,
    postgresql: <IconDatabase size={14} className="inline mr-1.5" />,
    supabase: <IconBrandSupabase size={14} className="inline mr-1.5" />,
    prisma: <IconBrandPrisma size={14} className="inline mr-1.5" />,
    sqlite: <IconDatabase size={14} className="inline mr-1.5" />,
    graphql: <IconBrandGraphql size={14} className="inline mr-1.5" />,
    restfullapis: <IconApi size={14} className="inline mr-1.5" />,
    
    // --- Tools & DevOps ---
    github: <IconBrandGithub size={14} className="inline mr-1.5" />,
    git: <IconBrandGit size={14} className="inline mr-1.5" />,
    vercel: <IconBrandVercel size={14} className="inline mr-1.5" />,
    docker: <IconBrandDocker size={14} className="inline mr-1.5" />,
    unittesting: <IconTestPipe size={14} className="inline mr-1.5" />,
    "c++": <IconBrandCpp size={14} className="inline mr-1.5" />,

    // --- NEW FIXES FOR UNBADGED ITEMS ---
    stripe: <IconBrandStripe size={14} className="inline mr-1.5" />,
    socketio: <IconBrandSocketIo size={14} className="inline mr-1.5" />,
    reduxtoolkit: <IconBrandRedux size={14} className="inline mr-1.5" />,
    redux: <IconBrandRedux size={14} className="inline mr-1.5" />,
    
    // Mapped Concept Icons
    leaflet: <IconMap size={14} className="inline mr-1.5" />,       // Map icon
    cloudinary: <IconCloud size={14} className="inline mr-1.5" />,  // Cloud icon
    clerk: <IconUserShield size={14} className="inline mr-1.5" />,  // Shield icon
    inngest: <IconBolt size={14} className="inline mr-1.5" />,      // Bolt icon
    oauth: <IconBrandOauth size={14} className="inline mr-1.5" />,

    // --- SVGs (Keep your existing ones) ---
    heroku: (
      <span className="inline-flex items-center mr-1.5">
        <Image src={"/heroku.svg"} alt="Heroku" className="invert-0 dark:invert" width={14} height={14} />
      </span>
    ),
    shadcnui: (
      <span className="inline-flex items-center mr-1.5">
        <Image src={"/shadcn-ui.svg"} alt="Shadcn UI" className="invert-0 dark:invert" width={14} height={14} />
      </span>
    ),
    express: (
      <span className="inline-flex items-center mr-1.5">
        <Image src={"/express.svg"} alt="Express" className="invert-0 dark:invert" width={14} height={14} />
      </span>
    ),
    java: (
        <span className="inline-flex items-center mr-1.5">
            <Image src={"/java.svg"} alt="Java" className="invert-0 dark:invert" width={14} height={14} />
        </span>
    ),
    c: (
        <span className="inline-flex items-center mr-1.5">
            <Image src={"/c.svg"} alt="C" className="invert-0 dark:invert" width={14} height={14} />
        </span>
    ),
  };
  
  return techIcons[normalizedTech] || null;
};

export default function TechBadge({ tech }: { tech: string }) {
  const icon = getTechIcon(tech);
  
  return (
    <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground flex items-center gap-1">
      {icon}
      <span>{tech}</span>
    </span>
  );
}