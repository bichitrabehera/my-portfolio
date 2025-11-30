import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <motion.footer
      className="
        relative w-full py-10 mt-20
        bg-background/40 backdrop-blur-xl
        border-t border-border
        flex flex-col items-center justify-center
        text-foreground
      "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back to Top Button */}
      <Link
        to="home"
        smooth={true}
        duration={600}
        offset={-80}
        className="
          group cursor-pointer mb-6
          flex items-center justify-center
          w-12 h-12 rounded-full
          border border-border
          bg-background/50
          hover:bg-foreground hover:text-background
          transition-all duration-300
        "
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </Link>

      {/* Copyright */}
      <motion.div
        className="text-foreground/70 text-sm tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-center">
          &copy; {new Date().getFullYear()} — Built with ❤️ by{" "}
          <a
            href="https://bichitrabehera-blue.vercel.app/"
            className="text-primary hover:underline transition"
          >
            Bichitra Behera
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
