import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Blog from "/src/assets/blog.png";
import News from "/src/assets/news-channel.png";
import BetterDays from "/src/assets/betterdays.png";
import SpotifyCloneImage from "/src/assets/spotify_clone.png";
import magmaCloneImage from "/src/assets/magma.png"

const projects = [
  {
    id: 1,
    name: "Spotify Clone",
    description:
      "A frontend-only Spotify clone built using React with a simple music player that supports play and pause functionality. Designed to replicate Spotify's clean and responsive UI.",
    image: SpotifyCloneImage,
    link: "https://github.com/bichitrabehera/spotify-clone.git",
    techStack: ["React", "TailwindCSS"],
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
  {
    id: 3,
    name: "My Blog",
    description:
      "A minimalist blog sharing valuable resources for developers—guides, tools, and insights. No clutter, just pure dev content. 🚀",
    image: Blog,
    link: "https://bichitra-blog.onrender.com/",
    techStack: ["Node.js", "Express", "EJS", "CSS"],
    team: "Solo",
  },
  {
    id: 4,
    name: "BetterDays",
    description:
      "Supporting mental health with self-assessments, valuable resources, and guidance to help take charge of your well-being.",
    image: BetterDays,
    link: "https://betterdayshealth.vercel.app/",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    team: "Solo",
  },
  {
    id: 5,
    name: "News Channel",
    description:
      "Stay updated with real-time news, important notices, and student highlights—all in one place!",
    image: News,
    link: "https://news-ni7g.onrender.com",
    techStack: ["Python", "Django", "SqlLite", "CSS"],
    team: "Team",
  },
];


function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="relative text-center py-16">
        <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-300 opacity-8 uppercase select-none flex items-center justify-center">
          Projects
        </h2>

        <h3 className="relative text-3xl sm:text-4xl font-semibold text-white z-10 mb-4">
          Projects
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
        className="text-base text-center leading-relaxed lg:w-full pb-5"
      >
        Here you will find some of my personal projects and group projects where
        I contributed as a frontend developer with GitHub and Website links.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: project.id * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#202020] rounded-lg shadow-lg overflow-hidden transition-transform transform"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#dedede]">{project.name}</h3>
              <p className="text-[#ffffff] text-sm mt-2">{project.description}</p>

              {/* Tech Stack */}
              {project.techStack && (
                <div className="mt-3">
                  <p className="text-xs text-gray-300 font-semibold mb-1">Tech Stack:</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Team Info */}
              {project.team && (
                <p className="text-xs text-gray-400 mt-3 italic">👥 {project.team}</p>
              )}

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                className="mt-4 inline-block text-black font-semibold bg-[#c0c0c0] rounded-[10px] px-4 py-2 hover:bg-[#b0b0b0] transition-colors"
                rel="noopener noreferrer"
              >
                ↗ View Project
              </a>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Project;
