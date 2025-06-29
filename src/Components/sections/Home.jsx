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
        <div className="homecontainer relative mx-4 text-center max-w-3xl">
          <p className="text-[28px] uppercase tracking-widest text-cyan-300 mb-2">
            Hi, I'm Bichitra Behera
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[28px] md:text-5xl font-semibold pb-5"
          >
            Full-Stack Developer & Digital Craftsman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[16px] text-[rgba(255, 255, 255, 0.75)] font-light mb-10"
          >
            I design and build engaging, performant web and mobile applications using modern tech — from concept to deployment.
          </motion.p>

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
