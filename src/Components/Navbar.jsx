import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-[#1a1a1a] shadow-md w-full z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="https://bichitrabehera-blue.vercel.app/" className="text-xl font-bold text-[#06B6D4]">
            Bichitra Behera
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 font-bold hover:text-[#06B6D4] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#111111] text-white rounded-lg absolute right-5 top-22 w-[40%] shadow-md transition-transform duration-300 ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } origin-top`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 font-bold hover:text-[#06B6D4] transition-colors"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
