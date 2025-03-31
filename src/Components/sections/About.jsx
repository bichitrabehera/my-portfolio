import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-15" ref={ref}>
      <div className="containerabout">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#06B6D4]"
        >
          About Me
        </motion.h2>

        {/* Underline Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
          className="underline bg-orange-600 h-1 mb-10 w-18 origin-left"
        ></motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
          className="about-info text-sm pb-5"
        >
          Learn more about me, my work, and my journey in tech.
        </motion.p>

        <div className="about-container flex flex-col md:flex-row items-center gap-10">
          {/* Profile Picture Placeholder (You can add an image here later) */}
          {/* <div className="w-[200px] h-[200px] bg-gray-700 rounded-full"></div> */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 1.2 }}
            className="aboutcont w-[100%] pb-10"
          >
            <p className="text-gray-300">
              I’m <b className="text-[#06B6D4]">Bichitra Behera</b>, a dedicated and 
              passionate software developer with a strong foundation in{" "}
              <b className="text-[#06B6D4]">computer science</b>. I enjoy
              building sleek, performant, and user-friendly applications that 
              provide great experiences.
            </p>

            <p className="mt-3 text-gray-300">
              My expertise revolves around{" "}
              <b className="text-[#F97316]">frontend development</b>, where I love
              bringing designs to life with modern web technologies. I also have
              a keen interest in optimizing performance and enhancing{" "}
              <b className="text-[#F97316]">user experience</b>.
            </p>

            <p className="mt-3 text-gray-300">
              Beyond coding, I enjoy collaborating on innovative projects, exploring new
              technologies, and keeping up with the ever-evolving world of{" "}
              <b className="text-[#06B6D4]">web development</b>.
            </p>

            {/* Contact Button Animation */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="px-6 py-4 mt-10 btn hover:scale-105 transition-transform duration-300"
              type="button"
            >
              <strong>
                <a href="#contact">Contact</a>
              </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
