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
        // { name: "Styled Components", icon: <SiStyledcomponents size={40} color="#DB7093" /> },
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
        { name: "Docker", icon: <DiDocker size={40} color="#2496ED" /> },
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
      className="skills-cursor-area pt-20 max-w-4xl mx-auto px-6 md:px-6 text-foreground relative"
    >
      {/* Section heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl text-left underline">Skills</h2>
      </div>

      {/* Subtitle */}
      <motion.p
        // initial={{ opacity: 0, y: 10 }}
        // animate={isInView ? { opacity: 1, y: 0 } : {}}
        // transition={{ duration: 0.8 }}
        className="text-left mx-auto text-foreground mb-10 fon"
      >
        I constantly strive to improve exploring new technologies, solving challenges, and building meaningful projects that make an impact.
      </motion.p>


      {/* Render each category */}
      {skillCategories.map((cat, i) => (
        <div key={i} className="mb-6 max-w-5xl mx-auto md:px-0">
          <h4 className="text-xl sm:text-2xl font-semibold mb-6">{cat.category}</h4>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
            className="flex flex-wrap gap-6"
          >
            {cat.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative group flex flex-col items-center justify-center
                 rounded-xl bg-background border border-[#858585]
                 w-14 h-14 md:w-16 md:h-16
                 "
                whileHover={{
                  scale: 1,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                {/* Icon */}
                <div className="text-center">{skill.icon}</div>

                {/* Tooltip */}
                <span
                  className="absolute top-[-33px] left-1/2 -translate-x-1/2
                   opacity-0 group-hover:opacity-100 group-hover:translate-y-1
                   text-xs px-3 py-1 rounded-md backdrop-blur
                   border border-white/20 text-foreground transition-all duration-300
                   pointer-events-none whitespace-nowrap"
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      ))}
    </section>
  );
}

export default Skills;
