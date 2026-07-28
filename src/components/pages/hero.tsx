"use client";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

import {Mail, Download, MapPin, Briefcase} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import profilePhoto from "../../../public/headshot.jpg";

import {AuroraBackground} from "../ui/aurora-background";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen justify-center lg:justify-start overflow-hidden pt-20 md:pt-0"
    >
      <AuroraBackground className="absolute inset-0 -z-10" showRadialGradient />

      <motion.div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 px-6 lg:px-[10%] w-full">
        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
        >
          <Image
            src={profilePhoto}
            alt="Ahmed Omran"
            width={512}
            height={512}
            priority
            className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 border border-border shadow-2xl ring-2 ring-white/10 object-cover transition-all duration-500 hover:scale-105"
          />
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="flex flex-col max-w-2xl">
          {/* Social */}

          {/* Name */}

          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            className="font-serif text-center md:text-left text-5xl md:text-6xl lg:text-7xl font-medium leading-none"
          >
            <span>Ahmed</span>
            <span className="block lg:inline text-primary"> Omran</span>
          </motion.h1>

          {/* Subtitle */}

          <h2 className="mt-6 text-center md:text-left text-xl md:text-2xl font-medium text-primary">
            Full Stack Software Engineer
          </h2>

          {/* Description */}

          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.7}}
            className="mt-6 text-center md:text-left text-muted-foreground leading-8 text-lg max-w-2xl"
          >
            I build scalable, production-ready web applications using
            <span className="text-foreground font-medium"> React</span>,
            <span className="text-foreground font-medium"> Node.js</span>,
            <span className="text-foreground font-medium"> TypeScript</span>,
            <span className="text-foreground font-medium"> Express</span>, and
            <span className="text-foreground font-medium"> MongoDB</span>.
            Passionate about backend architecture, clean APIs, and solving
            real-world problems through software.
          </motion.p>

          {/* Location */}

          <div className="flex justify-center md:justify-start items-center gap-2 mt-5 text-muted-foreground">
            <MapPin size={18} />

            <span>Cairo, Egypt • Open to Relocation</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            <span className="px-3 py-1 rounded-full border text-sm">
              ITI MERN Graduate
            </span>

            <span className="px-3 py-1 rounded-full border text-sm">
              Open to Relocation
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {/* View Projects */}

            <Button
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-1"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({behavior: "smooth"})
              }
            >
              View Projects
            </Button>

            {/* Download CV */}

            <a href="/resume.pdf" download="Ahmed_Omran_CV.pdf">
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                Download CV
                <Download size={18} />
              </Button>
            </a>

            {/* Contact */}

            <Button
              variant="secondary"
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-1"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({behavior: "smooth"})
              }
            >
              Let's Talk
            </Button>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link
              href="https://github.com/ahmed22981"
              target="_blank"
              aria-label="GitHub"
              className="social-link transition-all duration-300 hover:-translate-y-2 hover:scale-110"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                width={24}
                height={24}
                className="invert-0 dark:invert transition-all w-7 h-7"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ahmed-omran-310a91317/"
              target="_blank"
              aria-label="LinkedIn"
              className="social-link transition-all duration-300 hover:-translate-y-2 hover:scale-110"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={24}
                height={24}
                className="invert-0 dark:invert transition-all w-7 h-7"
              />
            </Link>

            <Link
              href="mailto:ahmedhatemomran@gmail.com"
              aria-label="Email"
              className="social-link transition-all duration-300 hover:-translate-y-2 hover:scale-110"
            >
              <Mail size={24} className=" w-7 h-7" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
