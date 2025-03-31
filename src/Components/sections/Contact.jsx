import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          setError("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="body-font relative pb-20 overflow-hidden" ref={sectionRef}>
      {/* Abstract SVG Background */}
      <div className="absolute top-[50px] left-0 w-full h-[400px] z-0 opacity-20">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#06B6D4"
            d="M437,308Q402,366,351,386.5Q300,407,250,402.5Q200,398,148.5,379.5Q97,361,68.5,305.5Q40,250,67,195.5Q94,141,141.5,123Q189,105,219.5,83Q250,61,307.5,68.5Q365,76,399.5,124.5Q434,173,451,211.5Q468,250,437,308Z"
          />
        </svg>
      </div>

      <motion.div
        className="container relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 flex w-full flex-col">
          <motion.h2
            className="text-3xl font-bold text-[#06B6D4]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-20 h-1 bg-orange-600 mt-2 mb-8 rounded origin-left"
          ></motion.div>
          <motion.p
            className="text-base leading-relaxed lg:w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Feel free to reach out! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
          </motion.p>
        </div>

        <motion.div
          className="max-w-lg bg-[#111111] p-5 rounded-lg shadow-lg mx-auto relative"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full p-2 border border-gray-700 text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 rounded"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full p-2 border border-gray-700 text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 rounded"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-2 border rounded border-gray-700 text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <strong>Send</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </motion.button>

            {isSent && (
              <motion.div
                className="bg-green-600 text-white text-center p-3 rounded-md mt-4 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully!
              </motion.div>
            )}
            {error && (
              <motion.div
                className="bg-red-500 text-white text-center p-3 rounded-md mt-4 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
