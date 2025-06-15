import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="pt-20 pb-24 bg-black text-white font-light" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="relative text-center py-16">
  {/* Background Title */}
  <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-300 opacity-8 uppercase select-none flex items-center justify-center">
    About Me
  </h2>

  {/* Foreground Title */}
  <h3 className="relative text-3xl sm:text-4xl font-semibold text-white z-10 mb-4">
    About Me
  </h3>

  {/* Dot Divider */}
  <div className="relative z-10 flex items-center justify-center mb-4">
    <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
    <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
  </div>
</div>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center text-sm text-gray-400 uppercase mb-8"
        >
          Learn more about me, my work, and my journey in tech.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="w-full"
          >
            <div className="space-y-6 text-gray-300 font-light text-center leading-relaxed">
              <p>
                I'm <span className=" text-[#06B6D4]">Bichitra Behera</span>, a software developer specializing in{" "}
                <span className="font-semibold text-[#06B6D4]">frontend development</span>. I build intuitive, high-performance
                web applications with pixel-perfect attention to detail.
              </p>

              <p>
                Passionate about <span className=" text-[#F97316]">UX/UI design</span> and modern web technologies,
                I thrive on turning complex problems into elegant solutions. Constantly learning and adapting to stay at the
                forefront of <span className="font-semibold text-[#06B6D4]">web development</span>.
              </p>

              <p>
                When not coding, you'll find me playing <span className=" text-[#06B6D4]">chess</span>, reliving my
                high school <span className="font-semibold text-[#06B6D4]">cricket</span> days, or enjoying{" "}
                <span className="font-semibold text-[#10B981]">games</span> and <span className="font-semibold text-[#A855F7]">music</span>.
                I occasionally channel creativity through <span className="font-semibold text-[#FACC15]">sketching</span>.
              </p>
            </div>

            {/* Contact Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="px-6 py-4 mt-8 mx-auto flex items-center justify-center btn hover:scale-105 transition-transform duration-300"
              type="button"
            >
                <a className="font-light" href="#contact">Contact</a>
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
