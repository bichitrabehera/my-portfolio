import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-[#06B6D4]">What I Use</h2>
      <div className="w-20 h-1 bg-orange-600  mt-2 mb-2 rounded"></div>
      <p class="text-base leading-relaxed lg:w-full py-5">
        Here are my key skills, from front-end to back-end development. I love
        building seamless solutions and staying updated with new technologies.
      </p>
      <div className="skills-vert">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 justify-items-center">
          {/* MERN Stack */}
          <i className="devicon-javascript-plain colored skill-icon"></i>
          <i className="devicon-react-original colored skill-icon"></i>
          <i className="devicon-nodejs-plain colored skill-icon"></i>
          <i className="devicon-express-original text-gray-400 skill-icon"></i>
          <i className="devicon-mongodb-plain colored skill-icon"></i>

          {/* Frontend */}
          <i className="devicon-html5-plain colored skill-icon"></i>
          <i className="devicon-css3-plain colored skill-icon"></i>
          <i className="devicon-tailwindcss-plain colored skill-icon"></i>

          {/* Programming Languages */}
          <i className="devicon-c-plain colored skill-icon"></i>
          <i className="devicon-cplusplus-plain colored skill-icon"></i>
          <i className="devicon-java-plain colored skill-icon"></i>
          <i className="devicon-python-plain colored skill-icon"></i>

          {/* Tools & Utilities */}
          <i className="devicon-canva-plain colored skill-icon"></i>
          <i className="devicon-git-plain colored skill-icon"></i>
          <i className="devicon-github-original text-gray-400 skill-icon"></i>
          <i className="devicon-anaconda-original colored skill-icon"></i>
        </div>
      </div>
    </section>
  );
}

export default Skills;
