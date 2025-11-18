import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <motion.footer
      className="relative flex flex-col items-center justify-center p-0 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >


      {/* Copyright Info */}
      <motion.div
        className="text-gray-400 text-sm mt-6"
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
    </motion.footer>
  );
}

export default Footer;
