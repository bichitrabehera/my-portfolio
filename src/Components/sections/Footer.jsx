import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="flex-col flex items-center justify-between pt-10 pb-20">
      <div class="social">
        <div class="social-links mb-5">
          <a
            href="https://www.instagram.com/imdaakuu?igsh=bmd0ZmwzeWZpdjJw"
            target="_blank"
          >
            <i class="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bichitra-behera-99b189291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <i class="ri-linkedin-box-line"></i>
          </a>
          <a
            href="https://x.com/bichitra_16?t=viCeSYxwFM6vHzFCYIubAA&s=09"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a href="https://github.com/bichitrabehera" target="_blank">
            <i class="ri-github-line"></i>
          </a>
          <a href="mailto:bichitrabehera.amcec@gmail.com" target="_blank">
            <i class="ri-mail-line"></i>
          </a>
        </div>
      </div>

      <div class="footcon">
        <p class="footer-content">
          Copyright {new Date().getFullYear()} - Made By{" "}
          <a href="https://portfolio-gilt-seven-25.vercel.app/">
            Bichitra Behera
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
