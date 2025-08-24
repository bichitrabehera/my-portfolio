import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      className="py-20 text-white font-ligh border-b border-[#ffffff50] md:border-[#ffffff10]"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="relative text-center pb-12">
          {/* Background Title */}
          <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-300 opacity-8 uppercase select-none flex items-center justify-center">
            About Me
          </h2>

          {/* Foreground Title */}
          <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            <code>~whoami</code>
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
          className="text-center text-gray-400 uppercase mb-8"
        >
          App Developer | Problem Solver | Tech Enthusiast
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-[16px] md:text-[20px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="w-full items-center justify-center"
          >
            <div className="space-y-5 text-gray-300 font-light text-left leading-relaxed">
              <p>
                I'm <span className="text-[#06B6D4]">Bichitra Behera</span>, a
                <span className="font-semibold text-[#06B6D4]">
                  {" "}
                  full-stack developer
                </span>{" "}
                who
                <span className="text-[#F97316]"> builds apps</span> that solve
                real problems. From
                <span className="font-semibold"> mobile applications</span> to
                <span className="font-semibold"> complex web platforms</span>, I
                create solutions that are both powerful and user-friendly.
              </p>

              <p>
                My app development process focuses on{" "}
                <span className="text-[#10B981]">clean architecture</span>,{" "}
                <span className="text-[#A855F7]">intuitive UX</span>, and
                <span className="text-[#FACC15]">
                  {" "}
                  scalable backend systems
                </span>
                . Whether it's a startup MVP or an enterprise solution, I build
                with both
                <span className="font-semibold"> performance</span> and
                <span className="font-semibold"> maintainability</span> in mind.
              </p>

              <p>
                I specialize in{" "}
                <span className="text-[#06B6D4]">
                  cross-platform development{" "}
                </span>
                using modern frameworks, ensuring my apps work seamlessly across
                devices. When I'm not coding, you'll find me analyzing
                <span className="font-semibold"> app architectures</span>,
                exploring new
                <span className="text-[#F97316]"> development tools</span>, or
                sketching
                <span className="text-[#A855F7]"> UI concepts</span>.
              </p>
            </div>

            {/* Contact Button - Keeping your original style */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="btn mt-10 mx-auto"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
