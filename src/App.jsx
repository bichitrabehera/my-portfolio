import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Project from "./Components/sections/Project";

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>
   </>
  );
}

export default App;
