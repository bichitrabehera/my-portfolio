import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="max-w-4xl mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-[#06B6D4]">
            Bichitra Behera
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 font-bold hover:text-[#06B6D4]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 font-bold hover:text-[#06B6D4]"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 font-bold hover:text-[#06B6D4]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 font-bold hover:text-[#06B6D4]"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-gray-300 font-bold hover:text-[#06B6D4]"
            >
              Contact
            </a>
          </div>
          <div className="w-7 h-5 relative cursor-pointer">&#9776;</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
