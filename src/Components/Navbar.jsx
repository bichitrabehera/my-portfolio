import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-[#111111] relative shadow-md w-full z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="https://bichitrabehera-blue.vercel.app/"
            className="text-xl font-semibold text-[#06B6D4]"
          >
            Bichitra Behera
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-gray-300 font-semibold hover:text-[#06B6D4] transition-colors"
              href="https://bichitrabehera-blue.vercel.app/">Home</a>
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 font-semibold hover:text-[#06B6D4] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </div>
        </div>

        {/* Mobile Menu (Framer Motion for smooth animation) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#111111] text-white rounded-lg absolute right-0 top-16 w-[40%] shadow-md"
            >
              <ul className="flex flex-col items-center space-y-2 py-4">
                <a className="text-gray-300 font-semibold hover:text-[#06B6D4] transition-colors"
                  href="https://bichitrabehera-blue.vercel.app/">Home</a>
                {["About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-300 font-semibold hover:text-[#06B6D4] transition-colors"
                        onClick={() => setIsOpen(false)} // Close menu on click
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
