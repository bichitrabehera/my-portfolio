import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "~Home", to: "home" },
    { name: "~whoami", to: "about" },
    { name: "~loadout", to: "skills" },
    { name: "~builds", to: "projects" },
    { name: "~say_hello", to: "contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-[30px] bg-[#00000060] py-1 md:p-4 border-b border-[#ffffff25] text-white">
        <div className="w-full max-w-5xl px-4 md:px-0 py-2 mx-auto flex items-center justify-between relative">
          <div>
            <h1 className="text-2xl bg-[#002896b0] p-1 rounded-2xl border-[#ffffff20]">
              <a href="https://bichitrabehera-blue.vercel.app">B<sup>2</sup></a>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 rounded-xl hover:bg-[#ffffff30] hover:text-blue-400 transition-colors text-lg font-medium cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none p-0 relative w-8 h-8 ml-auto"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000000] flex flex-col items-center justify-center space-y-4 text-white md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={toggleMenu}
              className="text-3xl hover:text-blue-300 transition-colors py-3 font-medium cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
