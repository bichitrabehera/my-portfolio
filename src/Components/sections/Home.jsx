import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen pt-28 text-white flex items-center justify-center backdrop-blur-md"
      >
        <div className="homecontainer relative mx-4 text-center max-w-3xl py-24 px-4 bg-black">
          {/* Greeting */}
          <p className="text-[1.75rem] tracking-widest text-cyan-300 mb-4 md:mb-6">
            Hi, I'm <span className="font-semibold">Bichitra Behera</span>
          </p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[1.75rem] md:text-[3rem] font-bold mb-4 md:mb-6"
          >
            Building Apps & Websites
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[1rem] md:text-[1.125rem] text-[rgba(255, 255, 255, 0.75)] font-light mb-10 leading-relaxed"
          >
            I build web and mobile applications while exploring new technologies
            and creative solutions. Always curious and learning, I enjoy turning
            ideas into interactive, high-performance experiences.
          </motion.p>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-md mb-8 text-[#A5F3FC] italic animate-pulse">
              ↓ Check out what I’ve been building
            </p>

            <button
              type="button"
              className="btn hover:scale-105 transition-transform duration-300"
            >
              <strong>
                <a href="#projects" className="font-light">
                  Projects
                </a>
              </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
