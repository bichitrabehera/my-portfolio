import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold text-[#06B6D4]">What I Use</h2>
        <div className="w-20 h-1 bg-orange-600  mt-2 mb-8 rounded"></div>
      <div className="skills-vert py-8">
        

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          <i className="devicon-html5-plain colored skill-icon"></i>
          <i className="devicon-css3-plain colored skill-icon"></i>
          <i className="devicon-javascript-plain colored skill-icon"></i>
          <i className="devicon-tailwindcss-plain colored skill-icon"></i>
          <i className="devicon-react-original colored skill-icon"></i>
          {/* <i className="devicon-nextjs-original colored skill-icon"></i> */}
          <i className="devicon-nodejs-plain colored skill-icon"></i>
          <i className="devicon-express-original skill-icon text-gray-400"></i>
          <i className="devicon-mongodb-plain colored skill-icon"></i>
          {/* <i className="devicon-postman-plain colored skill-icon"></i> */}
          <i className="devicon-git-plain colored skill-icon"></i>
          <i className="devicon-github-original skill-icon text-gray-400"></i>
          <i className="devicon-c-plain colored skill-icon"></i>
          <i className="devicon-java-plain colored skill-icon"></i>
          <i className="devicon-python-plain colored skill-icon"></i>
        </div>
      </div>
    </section>
  );
}

export default Skills;
