import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import DecryptedText from "../DecryptedText";

const rows = [
  "Dev   •   Full Stack Developer   •   Creator   •   Coder   •",
  "Engineer   •   Designer   •   Problem Solver   •   Thinker   •",
  "React   •   Node.js   •   Tailwind   •   Framer Motion   •",
  "JavaScript   •   TypeScript   •   MongoDB   •   Express   •",
  "UI/UX   •   Responsive Design   •   Performance   •",
  "Building Apps •  Websites • Digital Experiences   •",
];

function Home() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-[70vh] mt-20 md:min-h-[80vh] w-full flex items-center border-b border-[#ffffff50] md:border-[#ffffff10] justify-center text-white overflow-hidden"
      >
        {/* Text Wall */}
        <div className="absolute inset-0 flex flex-col gap-12">
          {rows.map((text, i) => (
            <motion.div
              key={i}
              className="whitespace-nowrap text-3xl md:text-5xl font-light opacity-10 mb-10"
              animate={{
                x: i % 2 === 0 ? ["100%", "-100%"] : ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 + i * 10, // slightly different speeds
                ease: "linear",
              }}
            >
              {text.repeat(100)}
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center">
          <div className="tracking-widest text-[#dadada] text-5xl mb-0 md:text-7xl">
            <div className="text-center">
              <span className="font-[Cursor] text-3xl md:text-7xl flex justify-center items-center">
                <span>
                  <i><DecryptedText
                    text="Bichitra Behera"
                    animateOn="view"
                    revealDirection="center"
                  /></i>
                </span>
              </span>

              <div className="mt-7">
                <span className="text-2xl md:text-6xl font-[Cursor]">
                  <u><DecryptedText
                    text="I am an ENGINEER"
                    animateOn="view"
                    revealDirection="center"
                  /></u>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
