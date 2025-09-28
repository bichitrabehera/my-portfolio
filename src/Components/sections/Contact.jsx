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
    <section
      id="contact"
      className="relative py-20 mx-auto border-b border-[#ffffff50] md:border-[#ffffff10] font-light body-font"
      ref={sectionRef}
    >
      <motion.div
        className="container relative z-10 p-10 mx-auto sm:max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 flex w-full flex-col">
          <div className="relative text-center pb-12">
            {/* Background Title */}
            <h2 className="absolute inset-0 text-6xl sm:text-8xl font-extrabold text-gray-300 opacity-8 uppercase select-none flex items-center justify-center">
              contact
            </h2>

            {/* Foreground Title */}
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              <code>~say_hello</code>
            </h3>

            {/* Dot Divider */}
            <div className="relative z-10 flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
            </div>
          </div>

          <motion.p
            className="text-lg text-center text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Have a project in mind or want to discuss opportunities? Drop me a
            message <br /> and I'll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          className="max-w-2xl bg-[#111111] border border-[#2e2e2e] p-5 rounded mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <form ref={form} onSubmit={sendEmail} className="relative">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                type="submit"
                className="btn mx-auto"
                whileTap={{ scale: 0.95 }}
              >
                <strong className="font-light">Send</strong>
              </motion.button>
            </div>

            {isSent && (
              <motion.div
                className="mt-6 p-4 bg-green-900/30 border border-green-500/50 text-green-400 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm text-green-300">
                    I'll get back to you soon.
                  </p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                className="mt-6 p-4 bg-red-900/30 border border-red-500/50 text-red-400 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className="font-medium">Error sending message</p>
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
