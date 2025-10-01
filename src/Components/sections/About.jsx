import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProfileCard from "../ProfileCard/ProfileCard";
import meImg from "../../assets/me.jpg"
import { Link } from "react-scroll"; // <-- import Link from react-scroll

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-30 text-white font-light border-b border-[#ffffff50] md:border-[#ffffff10]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1">


          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center  md:text-left text-gray-400 uppercase mb-8"
          >
            Web / App Developer | Problem Solver | Tech Enthusiast
          </motion.p>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="space-y-5 text-gray-300 font-light text-justify leading-relaxed text-[16px] md:text-[20px]"
          >
            <p>
              I'm <span className="text-[#06B6D4]">Bichitra Behera</span>, a
              <span className="font-semibold text-[#06B6D4]"> full-stack developer</span>{" "}
              who <span className="text-[#F97316]">builds apps</span> that solve
              real problems. From <span className="font-semibold">mobile applications </span>
              to <span className="font-semibold">complex web platforms</span>, I create
              solutions that are both powerful and user-friendly.
            </p>

            <p>
              My app development process focuses on{" "}
              <span className="text-[#10B981]">clean architecture</span>,{" "}
              <span className="text-[#A855F7]">intuitive UX</span>, and
              <span className="text-[#FACC15]"> scalable backend systems</span>.
              Whether it's a startup MVP or an enterprise solution, I build with
              both <span className="font-semibold">performance</span> and{" "}
              <span className="font-semibold">maintainability</span> in mind.
            </p>

            <p>
              I specialize in{" "}
              <span className="text-[#06B6D4]">cross-platform development</span>{" "}
              using modern frameworks, ensuring my apps work seamlessly across
              devices. When I'm not coding, you'll find me analyzing
              <span className="font-semibold"> app architectures</span>, exploring new
              <span className="text-[#F97316]"> development tools</span>, or sketching
              <span className="text-[#A855F7]"> UI concepts</span>.
            </p>
          </motion.div>

          {/* Contact Button */}
          <Link
            key="contact"
            to="contact"
            smooth={true}
            duration={600}
            offset={-80} // Adjust offset to match navbar height
            className="btn mt-10"
          >
            Contact
          </Link>
        </div>

        {/* Right Content: ProfileCard */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <ProfileCard
            name="Bichitra Behera"
            title="Software Engineer"
            handle="bichitrabehera"
            status="Offline"
            contactText="Contact Me"
            avatarUrl={meImg}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
