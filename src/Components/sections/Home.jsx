import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaCodeBranch,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GitHubCalendar from "react-github-calendar";

const SOCIAL_LINKS = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bichitra-behera-99b189291", color: "hover:text-blue-500" },
  { icon: <FaGithub />, url: "https://github.com/bichitrabehera", color: "hover:text-gray-400" },
  { icon: <FaDiscord />, url: "https://discord.com/users/1192891032220733510", color: "hover:text-indigo-400" },
  { icon: <MdEmail />, url: "mailto:bichitrabehera.amcec@gmail.com", color: "hover:text-blue-400" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/imdaakuu?igsh=bmd0ZmwzeWZpdjJw", color: "hover:text-pink-500" },
];

function Home() {
  const [githubStats, setGithubStats] = useState({
    repos: null,
    recentCommits: null,
  });
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState("");
  const [location] = useState("Bangalore, India"); // You can make this dynamic later if you wish

  // ⏰ Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🧠 Fetch GitHub stats
  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/bichitrabehera");
        const userData = await userRes.json();

        const [reposRes, eventsRes] = await Promise.all([
          fetch(`${userData.repos_url}?per_page=100`),
          fetch("https://api.github.com/users/bichitrabehera/events/public"),
        ]);

        const reposData = await reposRes.json();
        const totalCommits = (await eventsRes.json()).filter((e) => e.type === "PushEvent").length;

        setGithubStats({
          repos: userData.public_repos,
          recentCommits: totalCommits,
        });
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGithubStats();
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-white
                   px-4 md:px-8 lg:px-16 pt-24 sm:pt-28 md:pt-32"
      >
        <motion.div
          className="text-center space-y-5 md:space-y-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl pt-10 font-extrabold tracking-tight leading-tight">
            Bichitra Behera
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl text-gray-400">
            Full Stack Developer • Problem Solver
          </h2>

          {/* 🕒 Time & Location */}
          <motion.div
            className="text-sm sm:text-base text-gray-400 mt-2 font-mono flex flex-col sm:flex-row justify-center gap-1 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>{location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{time}</span>
          </motion.div>

          {/* 📊 GitHub Stats */}
          <div
            className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-4 text-gray-300
                       max-w-md sm:max-w-2xl mx-auto"
          >
            {[{ label: "Repos", value: githubStats.repos, icon: <FaCodeBranch /> },
            { label: "Recent Commits", value: githubStats.recentCommits }]
              .map((item, idx) => (
                <div
                  key={idx}
                  className="text-center bg-gray-900 bg-opacity-30 px-5 py-4 rounded
                             shadow-md backdrop-blur-md flex flex-col items-center justify-center"
                >
                  <p className="font-bold text-xl">
                    {loading ? "..." : item.value ?? "--"}
                  </p>
                  <p className="text-sm flex items-center justify-center gap-1 mt-1">
                    {item.icon} {item.label}
                  </p>
                </div>
              ))}
          </div>

          {/* 🌐 Social Icons */}
          <div className="mt-10 grid grid-cols-5 gap-6 text-2xl sm:text-3xl place-items-center">
            {SOCIAL_LINKS.map(({ icon, url, color }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} transition transform hover:scale-110`}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* 📅 GitHub Calendar */}
        <motion.div
          className="mt-10 sm:mt-14 w-full max-w-[90vw] sm:max-w-3xl flex justify-center overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <GitHubCalendar
            username="bichitrabehera"
            colorScheme="dark"
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            hideTotalCount
            hideColorLegend
          />
        </motion.div>
      </section>
    </>
  );
}

export default Home;
