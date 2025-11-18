import "./index.css";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Project from "./Components/sections/Project";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/sections/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     // easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  //     smooth: true,
  //     direction: "vertical",
  //     gestureOrientation: "vertical",
  //   });

  //   lenis.on("scroll", ({ scroll, velocity }) => {
  //     console.log(scroll, velocity);
  //   });


  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <>
      <div className="relative z-10">
        <Home />      {/* Intro + what you do → FIRST */}
        <Skills />    {/* Core skills → recruiters want this early */}
        <Project />   {/* Your proof of ability → MUST be early */}
        <About />     {/* More detail → AFTER projects */}
        <Contact />   {/* Easy CTA */}
        <Footer />
      </div>
    </>
  );
}

export default App;
