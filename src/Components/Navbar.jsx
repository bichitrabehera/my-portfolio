import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-[#e4e4e4] relative shadow-md max-w-4xl mx-auto my-8 z-50 border-1 border-[#fdfdfd40]">
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
          <div className="hidden md:flex items-center space-x-5">
            <a
              className="text-gray-300 font-semibold hover:transition-colors hover:bg-gray-500 py-1 px-2 rounded-[8px]"
              href="https://bichitrabehera-blue.vercel.app/"
            >
              Home
            </a>
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 font-semibold hover:transition-colors hover:bg-gray-500 py-1 px-2 rounded-[8px]"
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
              className="md:hidden bg-[#131313] text-white rounded-lg absolute right-0 top-16 w-[100%] shadow-md"
            >
              <ul className="flex flex-col items-center space-y-8 py-10">
                <a
                  className="text-gray-300 font-semibold hover:text-[#06B6D4] transition-colors"
                  href="https://bichitrabehera-blue.vercel.app/"
                >
                  Home
                </a>
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 font-semibold hover:text-[#06B6D4] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
