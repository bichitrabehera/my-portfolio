import { useState } from "react";
import { Link } from "react-scroll"; // <-- import Link from react-scroll

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "~whoami", to: "about" },
    { name: "~loadout", to: "skills" },
    { name: "~builds", to: "projects" },
    { name: "~say_hello", to: "contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-3xl border-b border-[#ffffff50] md:border-[#ffffff10] text-white">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between p-4 relative">
          <div>
            <h1 className="text-xl bg-[#002896b0] p-2 rounded-full border-1 border-[#ffffff20]">B <sup>2</sup> </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 mx-auto">
            {navLinks.map((link) => ( 
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80} // Adjust offset to match navbar height
                className="px-2 py-1 border-[1px] rounded border-[#ffffff30] hover:bg-[#ffffff20] hover:text-blue-800 transition-colors text-lg font-medium cursor-pointer"
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
              className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000] flex flex-col items-center justify-center space-y-4 text-white md:hidden">
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
