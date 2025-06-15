import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen pt-28 text-white flex items-center justify-center"
      >
        <div className="homecontainer relative mx-4 text-center max-w-3xl">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[30px] md:text-5xl font-light pb-5"
          >
            Code Wrangler & Pixel Perfectionist
          </motion.h1>

          {/* Shorter About Text */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[16px] text-[rgba(255, 255, 255, 0.75)] font-light mb-10"
          >
            I’m Bichitra — a frontend, backend, and mobile developer crafting clean,
            efficient, and delightful digital experiences.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-md mb-8 text-[#A5F3FC] italic animate-pulse">
              → Check out what I’ve been building
            </p>
            <button
              type="button"
              className="btn hover:scale-105 transition-transform duration-300"
            >
              <strong>
                <a href="#projects" className="font-bold">
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
