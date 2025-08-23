import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ArrowUp } from "lucide-react";


function Footer() {
  return (
    <motion.footer
      className="relative flex flex-col items-center justify-center py-10 text-white"
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
          className="text-gray-400 hover:underline transition-transform transform hover:scale-110"
        >
          instagram
        </a>
        <a
          href="https://www.linkedin.com/in/bichitra-behera-99b189291"
          target="_blank"
          className="text-gray-400 hover:underline transition-transform transform hover:scale-110"
        >
          linkedin
        </a>
        <a
          href="https://github.com/bichitrabehera"
          target="_blank"
          className="text-gray-400 hover:underline transition-transform transform hover:scale-110"
        >
          github{" "}
        </a>
        <a
          href="mailto:bichitrabehera.amcec@gmail.com"
          target="_blank"
          className="text-gray-400 hover:underline transition-transform transform hover:scale-110"
        >
          email{" "}
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
            href="https://bichitrabehera-blue.vercel.app/"
            className="text-[#06B6D4] hover:underline"
          >
            Bichitra Behera
          </a>
        </p>
      </motion.div>

       <div>
      <a
        href="#home"
        className="absolute right-4 bottom-0 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        <ArrowUp size={20} />
      </a>
    </div>
    </motion.footer>
  );
}

export default Footer;
