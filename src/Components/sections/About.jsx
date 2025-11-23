import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";
import GithubActivity from "../GithubActivity";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const [stats, setStats] = useState({
    repos: null,
    followers: null,
    stars: null,
  });

  // Fetch GitHub Stats
  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/bichitrabehera");
        const repoRes = await fetch("https://api.github.com/users/bichitrabehera/repos");

        const user = await userRes.json();
        const repos = await repoRes.json();

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        setStats({
          repos: user.public_repos,
          followers: user.followers,
          stars: totalStars,
        });
      } catch (err) {
        console.log("GitHub Stats Error:", err);
      }
    }

    fetchGitHubStats();
  }, []);

  return (
    <section id="about" ref={ref} className="pt-20 text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-6">

        {/* =================== Title =================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-left underline">About Me</h2>
        </div>

        {/* =================== Content =================== */}
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={isInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 1 }}
          className="text-gray-300 space-y-6 leading-relaxed"
        >
          <p>
            I'm a <span className="text-[#06B6D4] font-semibold">full-stack developer</span> focused on building fast,
            reliable, and user-centric applications. Whether it's{" "}
            <span className="text-[#F97316] font-semibold">web</span> or{" "}
            <span className="text-[#F97316] font-semibold">mobile</span>, I enjoy turning ideas into smooth, intuitive digital experiences.
          </p>

          <p>
            I care deeply about{" "}
            <span className="text-[#10B981] font-semibold">clean architecture</span>,{" "}
            <span className="text-[#A855F7] font-semibold">modern UI/UX</span>, and{" "}
            <span className="text-[#FACC15] font-semibold">scalable backends</span>.
            From MVPs to production apps, I build with performance and long-term maintainability in mind.
          </p>

          <p>
            I specialize in cross-platform development, ensuring consistent high-quality experiences across devices.
            Outside coding, I explore new{" "}
            <span className="text-[#F97316]">technologies</span>, sharpen{" "}
            <span className="text-[#A855F7]">design workflows</span>, and experiment with{" "}
            <span className="text-[#10B981]">innovative architectures</span>.
          </p>
        </motion.div>

        <GithubActivity />

      </div>
    </section>
  );
}

export default About;
