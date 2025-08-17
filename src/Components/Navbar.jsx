import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-md text-white shadow-lg">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between p-4 relative">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-10 mx-auto">
            <a
              href="#home"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button - Right aligned */}
          <button
            className="md:hidden focus:outline-none p-2 relative w-8 h-8 ml-auto"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-4 text-white md:hidden">
          <a
            href="#home"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
