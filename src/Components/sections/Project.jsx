import React from "react";
import Blog from "/src/assets/blog.png";
import News from "/src/assets/news-channel.png";
import BetterDays from "/src/assets/betterdays.png";
import ImageGen from "/src/assets/image-generator.png";

function Project() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-[#06B6D4]">Projects</h2>
      <div className="w-20 h-1 bg-orange-600 mt-2 mb-8 rounded"></div>

      <p className="ext-base leading-relaxed lg:w-full pb-5">
        Here you will find some of my personal projects and group projects where
        I contributed as a frontend developer with GitHub and Wesbite links
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#111111] rounded-lg shadow-lg overflow-hidden transition-transform transform"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#dedede]">{project.name}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="mt-4 items-center text-white font-semibold bg-gray-900 rounded-2xl inline-block p-2 hover:bg-gray-700"
              rel="noopener noreferrer"
            >
              🔗
            </a>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Project;

const projects = [
  {
    id: 1,
    name: "My Blog",
    description:
      "A minimalist blog sharing valuable resources for developers—guides, tools, and insights. No clutter, just pure dev content. 🚀",
    image: Blog,
    link: "https://bichitra-blog.onrender.com/",
  },
  {
    id: 2,
    name: "BetterDays",
    description:
      "Supporting mental health with self-assessments, valuable resources, and guidance to help take charge of your well-being.",
    image: BetterDays,
    link: "https://betterdayshealth.vercel.app/",
  },
  {
    id: 3,
    name: "News Channel",
    description:
      "Stay updated with real-time news, important notices, and student highlights—all in one place!",
    image: News,
    link: "https://news-ni7g.onrender.com",
  },
  {
    id: 4,
    name: "Image Generator",
    description:
      "Enter what you want to see, and we instantly display the perfect image for you. No extra steps—just search and view!",
    image: ImageGen,
    link: "https://image-generator-theta-five.vercel.app/",
  },
];

