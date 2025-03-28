import React from "react";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="containerabout">
        <h2 className="text-3xl font-bold text-[#06B6D4] ">About Me</h2>
        <div className="underline bg-orange-600 h-1 mb-10 w-18"></div>
        <p className="about-info text-sm pb-5">
          Learn more about me, my work, and my tech skills.{" "}
        </p>

        <div className="about-container">
          <div className="aboutcont w-[90%] pb-10">
            <p>
              I’m Bichitra Behera, a passionate{" "}
              <b className="text-[#2091a5]">
                Computer Science and Data Science
              </b>{" "}
              student at AMC Engineering College, with a strong foundation in
              technology and design. My love for{" "}
              <b className="text-[#2091a5]">frontend development </b>
              and web design drives me to create intuitive, responsive, and
              visually engaging user experiences. Beyond coding, I enjoy working
              on personal projects, keeping up with the latest UI/UX trends, and
              participating in hackathons. My goal? To master modern frameworks
              and technologies, building next-gen web experiences that blend
              functionality with aesthetics. Let’s create something amazing! 🚀
            </p>

            
            <button className="px-6 py-4 mt-10 btn" type="button">
            <strong>
            <a href="#contact">Contact</a>
            </strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
