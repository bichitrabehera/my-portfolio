import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-lg border-b border-[#ffffff50] md:border-[#ffffff10] text-white">
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
              ~whoami
            </a>
            <a
              href="#skills"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              ~loadout
            </a>
            <a
              href="#projects"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              ~builds
            </a>
            <a
              href="#contact"
              className="px-3 py-2 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              ~say_hello
            </a>
          </div>

          {/* Mobile Menu Button - Right aligned */}
          <button
            className="md:hidden focus:outline-none p-2 relative w-8 h-8 ml-auto"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
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
        <div className="fixed inset-0 z-40 bg-[#000] flex flex-col items-center justify-center space-y-4 text-white md:hidden">
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
            ~whoami
          </a>
          <a
            href="#skills"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            ~loadout
          </a>
          <a
            href="#projects"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            ~builds
          </a>
          <a
            href="#contact"
            className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium"
            onClick={toggleMenu}
          >
            ~say_hello
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
