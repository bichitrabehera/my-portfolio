import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
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
    <section id="contact" className="body-font relative pb-20">
      <div className="container">
        <div className="mb-12 flex w-full flex-col">
          <h2 className="text-3xl font-bold text-[#06B6D4]">Contact</h2>
          <div className="w-20 h-1 bg-orange-600 mt-2 mb-8 rounded"></div>
          <p className="text-base leading-relaxed lg:w-full">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>

        <div className="max-w-lg bg-[#111111] p-5 rounded-lg shadow-lg mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full p-2 border text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 rounded"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full p-2 border text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 rounded"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-2 border rounded text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn">
              <strong>Send</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </button>

            {/* Success & Error Alert Messages */}
            {isSent && (
              <div className="bg-green-600 text-white text-center p-3 rounded-md mt-4 mb-4">
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className="bg-red-500 text-white text-center p-3 rounded-md mt-4 mb-4">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
