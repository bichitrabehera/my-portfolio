import React from "react";
import Navbar from "../Navbar";
import meImg from "../../assets/me.jpg"; // your avatar
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TimeLocation from "../TimeLocation";

const SOCIAL_LINKS = [
  { icon: <FaGithub />, url: "https://github.com/bichitrabehera", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bichitra-behera-99b189291", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/imdaakuu?igsh=bmd0ZmwzeWZpdjJw", label: "Instagram" },
  { icon: <FaDiscord />, url: "https://discord.com/users/1192891032220733510", label: "Discord" },
  { icon: <MdEmail />, url: "mailto:bichitrabehera.amcec@gmail.com", label: "Email" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="pt-32 md:px-6 max-w-4xl px-6 mx-auto text-black dark:text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-col items-start md:items-center gap-10"
        >


          {/* Profile Pic */}
          <div className="relative flex-shrink-0 group w-fit">
            {/* Profile Image */}
            <img
              src={meImg}
              alt="profile"
              className="w-28 h-28 rounded-full shadow-lg mb-10 object-cover"
            />

            {/* Discord-style Online Dot */}
            <span
              className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full
               border-4 border-[#0d0d0d]  /* same as bg to blend cleanly */
               transition-all duration-300 group-hover:scale-110"
            ></span>

            {/* Tooltip */}
            <span
              className="absolute bottom-12 right-0 opacity-0 group-hover:opacity-100
               group-hover:-translate-y-1 transition-all duration-300
               bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md
               border border-white/20 pointer-events-none"
            >
              Online
            </span>
          </div>

          <TimeLocation />

          {/* Text Content */}
          <div className="flex-1 space-y-5">

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
              Hi, I'm <span className="text-gray-100 dark:text-gray-200">Bichitra</span> — <br />
              <span className="text-gray-600 dark:text-gray-300 font-[Cursor]">
                A Full Stack web developer.
              </span>
            </h1>

            {/* Sub intro */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              I build modern digital experiences across{" "}
              <span className="font-semibold text-white">web</span> and{" "}
              <span className="font-semibold text-white">mobile</span>, and I experiment with{" "}
              <span className="font-semibold text-white">AI agents</span> and automation systems.
              <br />
              With a focus on <span className="font-semibold text-white">clean UI</span>,{" "}
              <span className="font-semibold text-white">smooth interactions</span>, and{" "}
              <span className="font-semibold text-white">high-performance engineering</span>.
            </p>


            {/* Buttons */}


            {/* Social Icons */}
            <div className="flex gap-6 pt-4 text-[22px] text-gray-700 dark:text-gray-300">
              {SOCIAL_LINKS.map((s, i) => (
                <div key={i} className="relative group flex items-center justify-center">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        text-gray-400
        transition-all duration-300
        hover:text-white
        hover:scale-[1.15]
        hover:-translate-y-1
        hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]
      "
                  >
                    {s.icon}
                  </a>

                  {/* Tooltip */}
                  <span
                    className="
        absolute -top-8 left-1/2 -translate-x-1/2
        opacity-0 group-hover:opacity-100
        translate-y-1 group-hover:translate-y-0
        bg-white/10 px-2 py-1 text-xs rounded-md
        text-white border border-white/20
        backdrop-blur
        transition-all duration-300
        pointer-events-none
        whitespace-nowrap
      "
                  >
                    {s.label}
                  </span>
                </div>
              ))}


            </div>

            <div className="mt-8">
              <Link
                key='contact'
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="btn px-3"
              >
                Contact
              </Link>            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
