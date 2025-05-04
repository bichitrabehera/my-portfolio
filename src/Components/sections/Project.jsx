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
  },
  {
    id: 2,
    name: "Magma Clone",
    description:
      "A frontend-only Magma clone built with HTML, CSS, JavaScript, and GSAP, featuring a responsive UI and smooth animations.",
    image: magmaCloneImage,
    link: "https://magma-clone-rose.vercel.app/",
  },
  {
    id: 2,
    name: "My Blog",
    description:
      "A minimalist blog sharing valuable resources for developers—guides, tools, and insights. No clutter, just pure dev content. 🚀",
    image: Blog,
    link: "https://bichitra-blog.onrender.com/",
  },
  {
    id: 3,
    name: "BetterDays",
    description:
      "Supporting mental health with self-assessments, valuable resources, and guidance to help take charge of your well-being.",
    image: BetterDays,
    link: "https://betterdayshealth.vercel.app/",
  },
  {
    id: 4,
    name: "News Channel",
    description:
      "Stay updated with real-time news, important notices, and student highlights—all in one place!",
    image: News,
    link: "https://news-ni7g.onrender.com",
  },
];

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#06B6D4]"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="w-20 h-1 bg-orange-600 mt-2 mb-8 rounded origin-left"
      ></motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-base leading-relaxed lg:w-full pb-5"
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
            className="bg-[#27272A] rounded-lg shadow-lg overflow-hidden transition-transform transform"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#dedede]">{project.name}</h3>
              <p className="text-[#ffffff] text-sm mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="mt-4 items-center text-white font-semibold bg-gray-900 rounded-2xl inline-block p-2 hover:bg-gray-700"
                rel="noopener noreferrer"
              >
                🔗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
