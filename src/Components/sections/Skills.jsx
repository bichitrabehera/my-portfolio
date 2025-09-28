import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: "HTML", icon: "html5-plain" },
    { name: "CSS", icon: "css3-plain" },
    { name: "JavaScript", icon: "javascript-plain" },
    { name: "TypeScript", icon: "typescript-plain" },
    { name: "ReactJS", icon: "react-original" },
    { name: "React Native", icon: "react-original" },
    { name: "NextJS", icon: "nextjs-original" },
    { name: "Tailwind CSS", icon: "tailwindcss-plain" },
    { name: "Framer Motion", icon: "framer-plain" },
    { name: "NodeJS", icon: "nodejs-plain" },
    { name: "ExpressJS", icon: "express-original" },
    { name: "MongoDB", icon: "mongodb-plain" },
    { name: "Git", icon: "git-plain" },
    { name: "GitHub", icon: "github-original" },
    { name: "Postman", icon: "postman-plain" },
    { name: "npm", icon: "npm-original" },
    { name: "Vercel", icon: "vercel-original" },
    { name: "Render", icon: "vercel-original" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="skills-cursor-area py-20 mx-auto text-white border-b border-[#ffffff50] md:border-[#ffffff10] relative"
    >
  
      {/* Section heading */}
      <div className="relative text-center pb-12">
        <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-500 opacity-10 uppercase select-none flex items-center justify-center">
          Skills
        </h2>
        <h3 className="relative text-3xl sm:text-4xl font-semibold text-white z-10 mb-4">
          <code>~loadout</code>
        </h3>
        <div className="relative z-10 flex items-center justify-center mb-4">
          <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
        </div>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-sm text-center text-gray-400 uppercase tracking-wider mb-10"
      >
        I constantly strive to improve
      </motion.p>

      {/* Skills grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="cursor-target flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl bg-[#101010 ] text-gray-200 shadow-lg relative overflow-hidden transform-gpu border-dotted border-1"
            whileHover={{
              scale: 1.1,
              rotateX: -5,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              background:
                "linear-gradient(135deg, #0ea5e9, #3b82f6, #2563eb, #1e40af)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <i className={`devicon-${skill.icon} colored text-4xl md:text-5xl z-10`} />
            <span className="text-lg md:text-xl font-semibold z-10">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
