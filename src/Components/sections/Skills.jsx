import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import icons from react-icons
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiMysql,
  DiGit,
  DiLinux,
  DiDocker,
  DiLaravel,
  DiWordpress
} from "react-icons/di";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiChakraui,
  SiStyledcomponents,
  SiReactquery,
  SiReacthookform,
  SiStorybook,
  SiVite,
  SiWebpack,
  SiStrapi,
  SiWoo,
  SiMariadb,
  SiRedis,
  SiGitlab,
  SiAwsamplify,
  SiUbuntu,
  // SiBash,
  SiNginx,
  SiYarn,
  SiNpm,
  SiRender,
  SiVercel,
  SiJquery,
  SiAstro,
  SiElectron,
  // SiPhpmyadmin
} from "react-icons/si";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <DiHtml5 size={40} color="#E44D26" /> },
        { name: "CSS", icon: <DiCss3 size={40} color="#1572B6" /> },
        { name: "JavaScript", icon: <DiJavascript1 size={40} color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
        { name: "ReactJS", icon: <DiReact size={40} color="#61DAFB" /> },
        { name: "React Native", icon: <DiReact size={40} color="#61DAFB" /> },
        { name: "NextJS", icon: <SiNextdotjs size={40} color="#000000" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
        { name: "Framer Motion", icon: <SiFramer size={40} color="#0055FF" /> },
        // { name: "jQuery", icon: <SiJquery size={40} color="#0769AD" /> },
        // { name: "Astro", icon: <SiAstro size={40} color="#0F172A" /> },
        // { name: "Electron", icon: <SiElectron size={40} color="#47848F" /> },
        { name: "Chakra UI", icon: <SiChakraui size={40} color="#319795" /> },
        { name: "Styled Components", icon: <SiStyledcomponents size={40} color="#DB7093" /> },
        // { name: "React Query", icon: <SiReactquery size={40} color="#FF4154" /> },
        // { name: "React Hook Form", icon: <SiReacthookform size={40} color="#EC5990" /> },
        // { name: "Storybook", icon: <SiStorybook size={40} color="#FF4785" /> },
        { name: "Vite", icon: <SiVite size={40} color="#646CFF" /> },
        // { name: "Webpack", icon: <SiWebpack size={40} color="#8DD6F9" /> }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "NodeJS", icon: <DiNodejsSmall size={40} color="#339933" /> },
        { name: "ExpressJS", icon: <SiExpress size={40} color="#000000" /> },
        // { name: "PHP", icon: <DiPhp size={40} color="#777BB4" /> },
        // { name: "Laravel", icon: <DiLaravel size={40} color="#FF2D20" /> },
        // { name: "Strapi", icon: <SiStrapi size={40} color="#0A6EC2" /> },
        // { name: "WordPress", icon: <DiWordpress size={40} color="#21759B" /> },
        // { name: "WooCommerce", icon: <SiWoo size={40} color="#96588A" /> }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
        // { name: "MySQL", icon: <DiMysql size={40} color="#4479A1" /> },
        // { name: "MariaDB", icon: <SiMariadb size={40} color="#003545" /> },
        { name: "Redis", icon: <SiRedis size={40} color="#DC382D" /> }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        // { name: "AWS", icon: <SiAwsamplify size={40} color="#FF9900" /> },
        // { name: "Linux", icon: <DiLinux size={40} color="#FCC624" /> },
        // { name: "Ubuntu", icon: <SiUbuntu size={40} color="#E95420" /> },
        // { name: "Bash", icon: <SiBash size={40} color="#4EAA25" /> },
        // { name: "Docker", icon: <DiDocker size={40} color="#2496ED" /> },
        // { name: "Nginx", icon: <SiNginx size={40} color="#009639" /> },
        { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
        { name: "Render", icon: <SiRender size={40} color="#FF3F3F" /> },
        // { name: "Yarn", icon: <SiYarn size={40} color="#2C8EBB" /> },
        { name: "npm", icon: <SiNpm size={40} color="#CB3837" /> }
      ]
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", icon: <DiGit size={40} color="#F05032" /> },
        { name: "GitHub", icon: <DiGit size={40} color="#181717" /> },
        // { name: "GitLab", icon: <SiGitlab size={40} color="#FCA121" /> }
      ]
    },
    {
      category: "Design & Multimedia",
      skills: [
        { name: "Figma", icon: <SiFigma size={40} color="#F24E1E" /> },
        // { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={40} color="#31A8FF" /> },
        // { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={40} color="#FF9A00" /> },
        // { name: "Adobe Lightroom", icon: <SiAdobelightroom size={40} color="#31A8FF" /> },
        // { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro size={40} color="#9999FF" /> },
        // { name: "Adobe After Effects", icon: <SiAdobeaftereffects size={40} color="#9999FF" /> }
      ]
    }
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

      {/* Render each category */}
      {skillCategories.map((cat, i) => (
        <div key={i} className="mb-16 max-w-5xl mx-auto px-6 md:px-0">
          <h4 className="text-xl sm:text-2xl font-semibold mb-6">{cat.category}</h4>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 "
          >
            {cat.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="cursor-target flex flex-col items-center justify-center gap-3 px-4 py-4 rounded bg-[#111111] shadow-lg relative overflow-hidden transform-gpu border-1 border-[#ffffff20]"
                whileHover={{
                  scale: 1.1,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                  background: "linear-gradient(135deg, #777777)",
                  color: "#000",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                {skill.icon}
                <span className="z-10">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
