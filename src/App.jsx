import React from "react";
import "./index.css";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Project from "./Components/sections/Project";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/sections/Footer";
import CustomCursor from "./Components/CustomCursor";
import Myresume from "./Components/sections/Myresume";
// import Backtotop from "./Components/backtotop";

function App() {
  return (
    <>
      <div className="">
        <Home />
        {/* <Backtotop/> */}
        {/* <CustomCursor /> */}
        <About />
        <Skills />
        <Myresume/>
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
