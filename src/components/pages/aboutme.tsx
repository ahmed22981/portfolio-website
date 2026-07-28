"use client";

// Description: About Me section for a portfolio website, showcasing technologies used in development.

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import TechBadge from "@/components/common/TechBadge";
import {
  frontendTech,
  backendTech,
  toolsAndDevops,
  programmingLanguages,
} from "@/lib/data";
import {motion} from "motion/react";

export default function AboutMe() {
  const techCategories = [
    {title: "Frontend", data: frontendTech || []},
    {title: "Backend", data: backendTech || []},
    {title: "Tools & DevOps", data: toolsAndDevops || []},
    {title: "Languages", data: programmingLanguages || []},
  ];

  return (
    <section id="about" className="w-full py-27 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-8"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            I enjoy building modern, scalable web applications using
            technologies across the frontend, backend, databases, and cloud
            ecosystem. Below are the tools and frameworks I use to transform
            ideas into production-ready software.
          </motion.p>
        </div>
        <motion.div
          initial={{width: 0}}
          whileInView={{width: 150}}
          transition={{duration: 0.8}}
          className="h-[2px] bg-primary mx-auto rounded-full"
        />
        <div className="mx-auto mt-12 max-w-xs md:max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                whileHover={{y: -8, scale: 1.02}}
                transition={{duration: 0.6, delay: index * 0.15}}
              >
                <Card className="h-full transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary transition-colors duration-300 group-hover:text-blue-400">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 ">
                    {category.data.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
