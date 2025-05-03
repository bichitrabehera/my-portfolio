import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="pt-20" ref={ref}>
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
            <div className="space-y-4 text-gray-300">
  <p>
    I'm <span className="font-semibold text-[#06B6D4]">Bichitra Behera</span>, a software developer specializing in <span className="font-semibold text-[#06B6D4]">frontend development</span>. I build intuitive, high-performance web applications with pixel-perfect attention to detail.
  </p>

  <p>
    Passionate about <span className="font-semibold text-[#F97316]">UX/UI design</span> and modern web technologies, I thrive on turning complex problems into elegant solutions. Constantly learning and adapting to stay at the forefront of <span className="font-semibold text-[#06B6D4]">web development</span>.
  </p>

  <p>
    When not coding, you'll find me playing <span className="font-semibold text-[#06B6D4]">chess</span>, reliving my high school <span className="font-semibold text-[#06B6D4]">cricket</span> days, or enjoying <span className="font-semibold text-[#10B981]">games</span> and <span className="font-semibold text-[#A855F7]">music</span>. I occasionally channel creativity through <span className="font-semibold text-[#FACC15]">sketching</span>.
  </p>
</div>



            {/* Contact Button Animation */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="px-6 py-4 mt-5 btn hover:scale-105 transition-transform duration-300"
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
