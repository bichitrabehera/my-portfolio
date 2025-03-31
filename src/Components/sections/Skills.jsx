import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: "JavaScript", icon: "javascript-plain" },
    { name: "React", icon: "react-original" },
    { name: "Node.js", icon: "nodejs-plain" },
    { name: "Express.js", icon: "express-original text-gray-400" },
    { name: "MongoDB", icon: "mongodb-plain" },
    { name: "HTML5", icon: "html5-plain" },
    { name: "CSS3", icon: "css3-plain" },
    { name: "Tailwind CSS", icon: "tailwindcss-plain" },
    { name: "C", icon: "c-plain" },
    { name: "C++", icon: "cplusplus-plain" },
    { name: "Java", icon: "java-plain" },
    { name: "Python", icon: "python-plain" },
    { name: "Canva", icon: "canva-plain" },
    { name: "Git", icon: "git-plain" },
    { name: "GitHub", icon: "github-original text-gray-400" },
    { name: "Anaconda", icon: "anaconda-original" },
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#06B6D4] text-left"
      >
        What I Use
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="w-20 h-1 bg-orange-600 mt-2 mb-6 rounded origin-left"
      ></motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-base leading-relaxed lg:w-full text-left pb-8"
      >
        Here are the tools and technologies I work with to build high-quality
        projects.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[#222222] p-2 rounded-lg shadow-lg transition-transform transform hover:scale-110 w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <i className={`devicon-${skill.icon} colored text-4xl`}></i>
            <span className="mt-2 text-[12px] font-semibold text-gray-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
