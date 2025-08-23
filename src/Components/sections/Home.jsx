import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

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
        className="relative min-h-screen w-full flex items-center justify-center backdrop-blur-md text-white overflow-hidden"
      >
        {/* Text Wall */}
        <div className="absolute inset-0 flex flex-col gap-12">
          {rows.map((text, i) => (
            <motion.div
              key={i}
              className="whitespace-nowrap text-4xl md:text-6xl font-light opacity-10 mb-10"
              animate={{
                x: i % 2 === 0 ? ["100%", "-100%"] : ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 30 + i * 10, // slightly different speeds
                ease: "linear",
              }}
            >
              {text.repeat(10)}
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center">
          <p className="tracking-widest text-[#dadada] text-6xl mb-0 md:text-8xl">
            <span className="font-semibold">
              Bichitra <br /> Behera
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
