import React from "react";
import "./index.css";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Project from "./Components/sections/Project";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/sections/Footer";
import Myresume from "./Components/sections/Myresume";
import TargetCursor from "./Components/TargetCursor";

function App() {
  return (
    <>
      <div className="relative z-10">

        <Home />
        <TargetCursor
          targetSelector="a, button, .cursor-target" // all links, buttons, and any custom elements
          spinDuration={2}
          hideDefaultCursor={true}
        />
        <About />
        <Skills />
        <Myresume />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
