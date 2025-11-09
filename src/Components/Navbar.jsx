import { useState } from "react";
import { Link } from "react-scroll";
import logoBG from "../assets/me.jpg"

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
      <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-[30px] bg-[#00000060] py-1 md:p-3 text-white">
        <div className="w-full max-w-5xl px-8 md:px-6 py-3 mx-auto flex items-center justify-between relative">
          <div>
            <h1 className="p-0 rounded-full flex gap-5 border-[#ffffff20]">
              <a href="https://bichitrabehera-blue.vercel.app"><img src={logoBG} alt="" className="h-10 w-10 rounded-full " /></a>
              <p className="font-[pixel] text-xl pt-2">Bichitra Behera</p>
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
                className="btn-shine px-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none p-0 relative w-6 h-6 font-[pixel]"
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
              className="text-xl hover:text-blue-300 transition-colors py-3 cursor-pointer"
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
