import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="relative py-10 pt-12 text-white min-h-auto">
        <div className="homecontainer relative m-1">
          {/* Animated Heading */} 
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-about text-[35px]  font-bold text-[#06B6D4] pb-5 md:text-5xl"
          >
            Code Wrangler & Pixel Perfectionist
          </motion.h1>

          {/* Quote with glow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 mt-4 w-[90%] italic border-l-4 py-2 border-[#06B6D4] pl-3 rounded-md shadow-lg bg-gradient-to-r from-[#0f172a]/30 to-[#0f172a]/10 backdrop-blur-sm"
          >
            "Jaya praptir dhairyavataam."
            <span className="block text-gray-300 text-sm mt-1">
              (Victory belongs to those who persevere with patience.)
            </span>
            <span className="block text-[#06B6D4] mt-5 font-semibold">
              — Bhagavad Gita
            </span>
          </motion.p>

          {/* About Text */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="homeabout text-1xl w-[90%] pb-4 pt-5 text-[rgba(255, 255, 255, 0.664)]"
          >
            Hey, I’m Bichitra, a web developer on a mission to turn caffeine
            into clean code and ideas into stunning digital experiences. With a
            knack for problem-solving and a love for sleek, high-performing
            websites, I build with precision and a sprinkle of creativity.
            Always learning, always debugging—let’s make the web a better place!
          </motion.p>

          {/* Call-to-Action Button + animated subtext */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="heroo-btn"
          >
            <p className="text-xs mb-8 text-[#A5F3FC] italic animate-pulse">
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
