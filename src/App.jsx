import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Project from "./Components/sections/Project";
import Contact from "./Components/sections/Contact"
import Footer from "./Components/sections/Footer";

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
