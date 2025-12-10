import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Icons
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiDocker
} from "react-icons/di";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiRedis,
  SiRender,
  SiVercel,
  SiNpm
} from "react-icons/si";

// 🌈 Category Light Colors
const categoryColors = {
  Frontend: "#0D4C92",          // deep blue
  Backend: "#7D0633",           // dark cherry
  Database: "#034F1F",          // deep green
  "DevOps & Cloud": "#4A3F30",  // dark golden brown
  "Version Control": "#2B2B2B", // dark gray
  "Design & Multimedia": "#3B0066" // deep purple
};


function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  // 📌 ALL skills merged into a single array
  const allSkills = [
    // Frontend
    { name: "HTML", icon: <DiHtml5 size={40} color="#E44D26" />, category: "Frontend" },
    { name: "CSS", icon: <DiCss3 size={40} color="#1572B6" />, category: "Frontend" },
    { name: "JavaScript", icon: <DiJavascript1 size={40} color="#F7DF1E" />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" />, category: "Frontend" },
    { name: "ReactJS", icon: <DiReact size={40} color="#61DAFB" />, category: "Frontend" },
    { name: "React Native", icon: <DiReact size={40} color="#61DAFB" />, category: "Frontend" },
    { name: "NextJS", icon: <SiNextdotjs size={40} color="#666666" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" />, category: "Frontend" },
    { name: "Framer Motion", icon: <SiFramer size={40} color="#0055FF" />, category: "Frontend" },

    // Backend
    { name: "NodeJS", icon: <DiNodejsSmall size={40} color="#339933" />, category: "Backend" },
    { name: "ExpressJS", icon: <SiExpress size={40} color="#555555" />, category: "Backend" },

    // Database
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, category: "Database" },
    { name: "Redis", icon: <SiRedis size={40} color="#DC382D" />, category: "Database" },

    // DevOps & Cloud
    { name: "Docker", icon: <DiDocker size={40} color="#2496ED" />, category: "DevOps & Cloud" },
    { name: "Vercel", icon: <SiVercel size={40} color="#555555" />, category: "DevOps & Cloud" },
    { name: "Render", icon: <SiRender size={40} color="#FF3F3F" />, category: "DevOps & Cloud" },
    { name: "npm", icon: <SiNpm size={40} color="#CB3837" />, category: "DevOps & Cloud" },

    // Version Control
    { name: "Git", icon: <DiGit size={40} color="#F05032" />, category: "Version Control" },
    { name: "GitHub", icon: <DiGit size={40} color="#555555" />, category: "Version Control" },

    // Design
    { name: "Figma", icon: <SiFigma size={40} color="#F24E1E" />, category: "Design & Multimedia" }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="skills-cursor-area pt-20 max-w-4xl mx-auto px-6 md:px-6 text-foreground relative"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl text-left underline text-foreground">Skills</h2>
      </div>
      <motion.p className="text-left mx-auto text-foreground mb-10">
        I constantly strive to improve exploring new technologies, solving challenges, and building meaningful projects that make an impact.
      </motion.p>

      {/* 🎨 Legend Section */}
      <div className="flex flex-wrap gap-4 justify-start mb-10">
        {Object.entries(categoryColors).map(([key, color]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: color }}
            ></div>
            <span className="text-sm">{key}</span>
          </div>
        ))}
      </div>

      {/* 🔥 One Grid for All Skills */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className="flex flex-wrap gap-6 pb-10"
      >
        {allSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group flex flex-col items-center justify-center
              rounded-lg border w-14 h-14  md:w-16 md:h-16 transition-all duration-300"
            style={{
              // backgroundColor: categoryColors[skill.category],
              borderColor: categoryColors[skill.category],
            }}
          >
            <div className="text-center">{skill.icon}</div>
            <span
              className="absolute top-[-33px] left-1/2 -translate-x-1/2
              opacity-0 group-hover:opacity-100 group-hover:translate-y-1
              text-xs px-3 py-1 rounded-md backdrop-blur-sm font-medium
              transition-all duration-300 pointer-events-none whitespace-nowrap"
              style={{
                backgroundColor: categoryColors[skill.category],
                color: "#ffffff"
              }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
