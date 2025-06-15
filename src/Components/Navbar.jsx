import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-[#e4e4e4] relative shadow-md max-w-4xl mx-auto my-8 z-50 border-1 border-[#fdfdfd40]">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="https://bichitrabehera-blue.vercel.app/"
            className="text-xl font-semibold text-purple-500"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50"
            >
              {/* Blurred backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              {/* Full-screen menu */}
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative h-screen w-full bg-[#111111]/95 backdrop-blur-lg flex flex-col justify-center"
              >
                <ul className="space-y-8 px-6">
                  <a
                    className="block text-2xl text-gray-200 font-medium hover:text-[#06B6D4] transition-colors py-3 text-center"
                    href="https://bichitrabehera-blue.vercel.app/"
                  >
                    Home
                  </a>
                  {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <motion.li
                      key={item}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * ["About", "Skills", "Projects", "Contact"].indexOf(item) }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block text-2xl text-gray-200 font-medium hover:text-[#06B6D4] transition-colors py-3 text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Close button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-100 left-3 text-gray-400 hover:text-white p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
