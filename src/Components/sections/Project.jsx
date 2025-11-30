import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// === Import images ===
import DepartmentImage from "/src/assets/dataverse.jpg";
import SynapseImage from "/src/assets/synapse.jpg";
import ClearSpend from "/src/assets/clearspend.png";

// === Import icons ===
import { FaReact, FaNodeJs, FaTerminal } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiRedis,
  SiClerk,
} from "react-icons/si";

// === Map tech names to icons (DARK-MODE SAFE) ===
const iconMap = {
  React: <FaReact className="text-sky-400 text-xl" />,
  "React Native": <FaReact className="text-sky-400 text-xl" />,
  Nodejs: <FaNodeJs className="text-green-500 text-xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-xl" />,
  Express: <SiExpress className="text-foreground text-xl" />,   // << updated
  Tailwindcss: <SiTailwindcss className="text-cyan-400 text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-xl" />,
  Redis: <SiRedis className="text-red-500 text-xl" />,
  Clerk: <SiClerk className="text-purple-400 text-xl" />,
};

// === Project Data ===
const projects = [
  {
    id: 1,
    name: "DataVerse",
    description:
      "A website for the Department of Data Science and Engineering, AMC Engineering College. With a modern and responsive design, and a clean and easy to use interface. Includes an admin panel to add events and view registrations.",
    image: DepartmentImage,
    link: "https://dataverseamcec.vercel.app/",
    techStack: ["React", "Nodejs", "Tailwindcss"],
  },
  {
    id: 2,
    name: "Synapse Landing Page",
    description:
      "A landing page for Synapse, a digital identity platform that lets users share all their important links through a single dynamic QR code.",
    image: SynapseImage,
    link: "https://synapseeee.vercel.app",
    techStack: ["Tailwind CSS", "JavaScript", "React"],
  },
  {
    id: 3,
    name: "Expense Tracker App",
    description:
      "A React Native application to securely track income and expenses. Features email-verified authentication, dashboard analytics, and fast performance using Redis caching.",
    image: ClearSpend,
    link: "https://github.com/bichitrabehera/expense-tracker",
    techStack: ["React Native", "Node.js", "Express", "Clerk", "Redis"],
  },
];

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-0 mx-auto bg-background text-foreground"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl text-left underline text-foreground">Projects</h2>
        </div>

        <motion.p className="text-foreground/70 text-left max-w-5xl mx-auto text-[16px]">
          Here you’ll find some of my featured projects — focused on frontend
          development, design precision, and clean user experiences.
        </motion.p>

        {/* ===== Projects List ===== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col
                       bg-background/80
                       border border-border
                       rounded-2xl overflow-hidden
                       shadow-[0_0_20px_rgba(0,0,0,0.15)]"
            >
              {/* === Image Section === */}
              <div className="relative w-full group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 sm:h-54 object-cover transition-transform duration-700 group-hover:scale-105"
                />


              </div>

              {/* === Description Section === */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.name}
                </h3>

                <p className="text-foreground/70 mb-4 leading-snug text-[15px]">
                  {project.description}
                </p>

                {/* Tech Icons */}
                <div className="mb-4 flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="relative group flex items-center justify-center
                                 bg-background
                                 border border-border
                                 rounded-lg p-2 w-10 h-10
                                 hover:scale-110 transition-transform duration-200 cursor-pointer"
                    >
                      {/* Icon */}
                      {iconMap[tech] || (
                        <span className="text-foreground/60 text-xs">{tech}</span>
                      )}

                      {/* Tooltip */}
                      <span
                        className="absolute -top-10 left-1/2 -translate-x-1/2
                                   opacity-0 group-hover:opacity-100
                                   bg-foreground/10 text-foreground text-xs
                                   px-2 py-1 rounded-md shadow-lg
                                   transition-all duration-300 whitespace-nowrap pointer-events-none
                                   border border-foreground/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2
                             text-foreground px-5 py-2 rounded
                             hover:bg-foreground hover:text-background
                             transition-all duration-200 border border-border"
                >
                  <FaTerminal className="text-foreground/100 text-lg" />
                  <span className="text-sm tracking-wide">View Project</span>
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
