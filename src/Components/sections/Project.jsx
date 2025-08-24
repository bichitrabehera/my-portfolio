import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BetterDays from "/src/assets/betterdays.png";
import magmaCloneImage from "/src/assets/magma.png";
import SynapseImage from "/src/assets/synapse.jpg";
import ClearSpend from "/src/assets/clearspend.png";

const projects = [
  {
    id: 6,
    name: "Synapse Landing Page",
    description:
      "A landing page for Synapse, a digital identity platform that lets users share all their important links - social media and contact details — through a single dynamic QR code.",
    image: SynapseImage,
    link: "https://synapseeee.vercel.app",
    techStack: ["Tailwind CSS", "JavaScript", "React"],
    team: "Solo",
  },
  {
    id: 7,
    name: "Expense Tracker App",
    description:
      "A React Native application to securely track income and expenses. Features email-verified authentication, a dashboard showing total balance, recent transactions, and fast performance using Redis caching.",
    image: ClearSpend, // replace with actual import
    link: "https://github.com/bichitrabehera/expense-tracker", // replace with actual link
    techStack: ["React Native", "Node.js", "Express", "Clerk", "Redis"], // adjust if needed
    team: "Solo", // or "Team" if applicable
  },

  {
    id: 2,
    name: "Magma Clone",
    description:
      "A frontend-only Magma clone built with HTML, CSS, JavaScript, and GSAP, featuring a responsive UI and smooth animations.",
    image: magmaCloneImage,
    link: "https://magma-clone-rose.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    team: "Solo",
  },
  {
    id: 4,
    name: "BetterDays",
    description:
      "Supporting mental health with self-assessments, valuable resources, and guidance to help take charge of your well-being.",
    image: BetterDays,
    link: "https://betterdays-theta.vercel.app/",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    team: "Solo",
  },
];

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      className="py-20 mx-auto border-b border-[#ffffff50] md:border-[#ffffff10]"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-2">
        {/* Section Heading */}
        <div className="relative text-center pb-12">
          {/* Background Title */}
          <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-300 opacity-8 uppercase select-none flex items-center justify-center">
            projects
          </h2>

          {/* Foreground Title */}
          <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            <code>~builds</code>
          </h3>

          {/* Dot Divider */}
          <div className="relative z-10 flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-base text-center text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Here you will find some of my personal and team projects where I
          contributed as a frontend developer. Explore GitHub and live demo
          links below.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-12 ">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: project.id * 0.15 }}
              className="bg-[#0f0f0f] m-5 rounded shadow-lg transform transition-transform border border-[#ffffff11]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-50 object-cover rounded-t-lg opacity-70"
              />
              <div className="p-5 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#dedede]">
                    {project.name}
                  </h3>
                  <p className="text-[#ffffff] text-[16px] mt-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="mt-3">
                      <p className=" text-gray-400 font-semibold mb-1">
                        Tech Stack:
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <li
                            key={index}
                            className="bg-gray-700 text-gray-200 px-2 py-1 rounded mt-2"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Team Info */}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-black font-semibold bg-[#ffffff] rounded px-2 py-1 hover:bg-[#b0b0b0] transition-colors text-center"
                  >
                    ↗ View Project
                  </a>
                </div>

                {/* View Project Button */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
