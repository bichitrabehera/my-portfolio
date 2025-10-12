import Particles from '../Particle';
import React from "react";
import Navbar from "../Navbar";
import DecryptedText from "../DecryptedText";
import { Link } from "react-scroll";

// React Icons imports
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaVoicemail, FaDiscord } from "react-icons/fa";
import { FaEarthAmericas } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Home() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-white overflow-hidden border-b border-[#ffffff50] dark:bg-black"
      >
        {/* Full-Screen Particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Particles
            style={{ width: '100%', height: '100%' }}
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={20}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Overlay for better text contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center flex flex-col gap-6 px-4">
          <h1 className="text-4xl md:text-6xl text-gray-300 font-bold">
            <DecryptedText
              text="Bichitra Behera"
              animateOn="view"
              revealDirection="center"
            />
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mt-4">
            <DecryptedText
              text="Full Stack Developer | Problem Solver"
              animateOn="view"
              revealDirection="center"
            />
          </h2>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link
              to="skills"
              smooth={true}
              duration={800}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded cursor-pointer transition"
            >
              View Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded cursor-pointer transition"
            >
              Projects
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center gap-6 py-3 px-6 text-2xl max-w-xl mx-auto rounded border border-[#ffffff50] md:text-3xl">
            <a href="https://www.linkedin.com/in/bichitra-behera-99b189291"
              target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://discord.com/users/1192891032220733510" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaDiscord />
            </a>
            <a href="https://github.com/bichitrabehera"
              target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="mailto:bichitrabehera.amcec@gmail.com"
              target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <MdEmail />
            </a>
            <a href="https://www.instagram.com/imdaakuu?igsh=bmd0ZmwzeWZpdjJw" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
