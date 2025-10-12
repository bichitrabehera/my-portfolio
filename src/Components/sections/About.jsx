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
      className="py-20 text-white font-light border-b border-[#ffffff50] md:border-[#ffffff10]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-0 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">

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
            className="space-y-5 text-gray-300 leading-relaxed text-[16px]"
          >
            <p>
              I'm a <span className="text-[#06B6D4] font-semibold">full-stack developer</span>{" "}
              passionate about creating both{" "}
              <span className="text-[#F97316] font-semibold">mobile</span> and{" "}
              <span className="text-[#F97316] font-semibold">web applications</span> that
              solve real-world problems. I love transforming ideas into{" "}
              <span className="font-semibold text-[#06B6D4]">efficient</span> and{" "}
              <span className="font-semibold text-[#10B981]">user-friendly</span> digital
              experiences.
            </p>

            <p>
              My development process focuses on{" "}
              <span className="text-[#10B981]">clean architecture</span>,{" "}
              <span className="text-[#A855F7]">intuitive UI/UX</span>, and{" "}
              <span className="text-[#FACC15]">scalable backend systems</span>. From startup
              MVPs to production-grade products, I build with{" "}
              <span className="font-semibold">performance</span> and{" "}
              <span className="font-semibold">maintainability</span> in mind.
            </p>

            <p>
              I specialize in{" "}
              <span className="text-[#06B6D4]">cross-platform development</span> using
              modern frameworks to ensure smooth, consistent experiences across devices.
              When I’m not coding, I’m exploring new{" "}
              <span className="text-[#F97316] font-semibold">technologies</span>, refining{" "}
              <span className="text-[#A855F7] font-semibold">design workflows</span>, and
              experimenting with{" "}
              <span className="text-[#10B981] font-semibold">innovative app architectures</span>.
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
