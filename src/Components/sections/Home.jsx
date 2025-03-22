import React from "react";

function Home() {
  return (
    <section id="home" className="py-20 h-full">
      <div className="homecontainer">
        <h1 className="heading-about text-4xl font-bold text-[#06B6D4] pb-10">
          Code Wrangler & Pixel Perfectionist
        </h1>

        <p className="homeabout text-1xl w-[80%] pb-10 text-[rgba(255, 255, 255, 0.664)] ">
          Hey, I’m Bichitra, a web developer on a mission to turn caffeine into
          clean code and ideas into stunning digital experiences. With a knack
          for problem-solving and a love for sleek, high-performing websites, I
          build with precision and a sprinkle of creativity. Always learning,
          always debugging let’s make the web a better place!
        </p>

        <p className="pb-10">Crafting the Web, One Pixel at a Time ✨</p>

        <div className="heroo-btn">
          <button className="px-6 py-4 bg-[#2091a5]">
            <a href="#projects" className="font-bold">Projects</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
