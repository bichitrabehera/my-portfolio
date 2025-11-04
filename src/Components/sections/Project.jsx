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
      "A landing page for Synapse, a digital identity platform that lets users share all their important links like social media and contact details through a single dynamic QR code.",
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
    image: ClearSpend,
    link: "https://github.com/bichitrabehera/expense-tracker",
    techStack: ["React Native", "Node.js", "Express", "Clerk", "Redis"],
    team: "Solo",
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
];

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-20 mx-auto bg-black">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* ===== Heading ===== */}
        <div className="relative text-center pb-12">
          <h2 className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl font-extrabold text-gray-700 opacity-10 uppercase select-none">
            Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-wide">
            <code>~builds</code>
          </h3>

          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px mx-2 bg-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <div className="w-12 h-px mx-2 bg-purple-400"></div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-gray-300 text-left max-w-5xl mx-auto text-[16px]"
        >
          Here you’ll find some of my featured projects — focused on frontend
          development, design precision, and clean user experiences.
        </motion.p>

        {/* ===== Projects ===== */}
        <div className="mt-16 flex flex-col gap-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8
                bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.03)]
                ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 p-3 lg:h-full object-cover rounded-lg transition duration-300"
                />
              </div>

              {/* Description */}
              <div className="w-full lg:w-1/2 p-4 lg:p-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-snug text-[16px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="mb-4">
                    <ul className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="bg-[#1a1a1a] border border-[#333] text-gray-200 text-sm px-2 py-1 rounded"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* View Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-white border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition-all duration-200"
                >
                  ↗ View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
