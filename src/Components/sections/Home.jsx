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
            className="heading-about text-[32px] text-center font-bold text-purple-500 pb-5 md:text-5xl"
          >
            Code Wrangler & Pixel Perfectionist
          </motion.h1>

          

          {/* About Text */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="homeabout text-1xl pb-4 pt-5 pb-5 text-center text-[rgba(255, 255, 255, 0.664)] font-light"
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
            className="heroo-btn items-center justify-center flex flex-col"
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
