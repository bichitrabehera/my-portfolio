import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <motion.footer
      className="flex flex-col items-center justify-center py-10 bg-[#111] text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Social Media Links */}
      <motion.div 
        className="flex space-x-5 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <a
          href="https://www.instagram.com/imdaakuu?igsh=bmd0ZmwzeWZpdjJw"
          target="_blank"
          className="text-gray-400 hover:text-pink-500 transition-transform transform hover:scale-110"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bichitra-behera-99b189291"
          target="_blank"
          className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://x.com/bichitra_16"
          target="_blank"
          className="text-gray-400 hover:text-gray-300 transition-transform transform hover:scale-110"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://github.com/bichitrabehera"
          target="_blank"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href="mailto:bichitrabehera.amcec@gmail.com"
          target="_blank"
          className="text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
        >
          <i className="fas fa-envelope text-2xl"></i>
        </a>
      </motion.div>

      {/* Copyright Info */}
      <motion.div 
        className="text-gray-400 text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p>
          &copy; {new Date().getFullYear()} - Made by{" "}
          <a
            href="https://portfolio-gilt-seven-25.vercel.app/"
            className="text-[#06B6D4] hover:underline"
          >
            Bichitra Behera
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
