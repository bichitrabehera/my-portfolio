import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const skills = [
    // Frontend
    { name: "HTML", icon: "html5-plain" },
    { name: "CSS", icon: "css3-plain" },
    { name: "JavaScript", icon: "javascript-plain" },
    { name: "TypeScript", icon: "typescript-plain" },
    { name: "ReactJS", icon: "react-original" },
    { name: "React Native", icon: "react-original" }, // Uses React icon
    { name: "NextJS", icon: "nextjs-original" },
    { name: "Tailwind CSS", icon: "tailwindcss-plain" },
    { name: "Framer Motion", icon: "framer-plain" },

    // Backend
    { name: "NodeJS", icon: "nodejs-plain" },
    { name: "ExpressJS", icon: "express-original" },
    { name: "MongoDB", icon: "mongodb-plain" },
    { name: "MySQL", icon: "mysql-plain" },

    // Tools
    { name: "Git", icon: "git-plain" },
    { name: "GitHub", icon: "github-original" },
    { name: "Postman", icon: "postman-plain" },
    { name: "pnpm", icon: "npm-original" }, // Use npm icon for pnpm

    // Deployment
    { name: "Vercel", icon: "vercel-original" },
  ];

  return (
    <section
      id="skills"
      className="py-20 mx-auto text-white border-b border-[#ffffff50] md:border-[#ffffff10]"
      ref={ref}
    >
      <div className="relative text-center pb-12">
        <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-300 opacity-8 uppercase select-none flex items-center justify-center">
          Skills
        </h2>

        <h3 className="relative text-3xl sm:text-4xl font-semibold text-white z-10 mb-4">
          <code>~loadout</code>
        </h3>

        {/* Dot Divider */}
        <div className="relative z-10 flex items-center justify-center mb-4">
          <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-sm text-center text-gray-400 uppercase tracking-wider mb-10"
      >
        I constantly try to improve
      </motion.p>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
          },
        }}
        className="flex flex-wrap justify-center gap-3 px-4 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2 px-3 py-1 m-1 rounded bg-[#1f1f1f] text-gray-200 shadow-sm hover:scale-105 transition-transform"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            <i className={`devicon-${skill.icon} colored `}></i>
            <span className="text-[16px] md:text-[20px] font-light ">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
