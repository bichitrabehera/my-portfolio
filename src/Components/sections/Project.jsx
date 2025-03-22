import React from "react";
import Blog from "/src/assets/blog.png";
import News from "/src/assets/news-channel.png";
import BetterDays from "/src/assets/betterdays.png";
import ImageGen from "/src/assets/image-generator.png";

function Project() {
  return (
    <section id="projects" className="py-20">
  <h2 className="text-3xl font-bold text-[#06B6D4]">Projects</h2>
  <div className="w-20 h-1 bg-purple-700 mt-2 mb-8 rounded"></div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project 1 - My Blog */}
    <div className="bg-[#111111] rounded-lg shadow-lg overflow-hidden transition-transform transform">
      <img src={Blog} alt="Blog Project" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#dedede]">My Blog</h3>
        <p className="text-gray-300 text-sm mt-2">
          A minimalist blog sharing valuable resources for developers—guides, tools, and insights. No clutter, just pure dev content. 🚀
        </p>
        <a href="https://bichitra-blog.onrender.com/" target="_blank" className="mt-4 flex items-center text-gray-300 font-semibold">
          🔗 View Website
        </a>
      </div>
    </div>

    {/* Project 2 - BetterDays */}
    <div className="bg-[#111111] rounded-lg shadow-lg overflow-hidden transition-transform transform">
      <img src={BetterDays} alt="BetterDays Project" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#dedede]">BetterDays</h3>
        <p className="text-gray-300 text-sm mt-2">
          Supporting mental health with self-assessments, valuable resources, and guidance to help take charge of your well-being.
        </p>
        <a href="https://betterdayshealth.vercel.app/" target="_blank" className="mt-4 flex items-center text-gray-300 font-semibold">
          🔗 View Website
        </a>
      </div>
    </div>

    {/* Project 3 - News Channel */}
    <div className="bg-[#111111] rounded-lg shadow-lg overflow-hidden transition-transform transform">
      <img src={News} alt="News Project" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#dedede]">News Channel</h3>
        <p className="text-gray-300 text-sm mt-2">
          Stay updated with real-time news, important notices, and student highlights—all in one place!
        </p>
        <a href="https://news-ni7g.onrender.com" target="_blank" className="mt-4 flex items-center text-gray-300 font-semibold">
          🔗 View Website
        </a>
      </div>
    </div>

    {/* Project 4 - Image Generator */}
    <div className="bg-[#111111] rounded-lg shadow-lg overflow-hidden transition-transform transform">
      <img src={ImageGen} alt="Image Generator Project" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#dedede]">Image Generator</h3>
        <p className="text-gray-300 text-sm mt-2">
          Enter what you want to see, and we instantly display the perfect image for you. No extra steps—just search and view!
        </p>
        <a href="https://image-generator-theta-five.vercel.app/" target="_blank" className="mt-4 flex items-center text-gray-300 font-semibold">
          🔗 View Website
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

export default Project;
