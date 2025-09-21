import React, { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdMapsHomeWork, MdMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(); // form ref for emailjs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        setIsSending(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Email sent successfully ✅", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
      (error) => {
        setIsSending(false);
        console.error("EmailJS error:", error);
        toast.error("Failed to send email. Please try again.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    );
  };

  return (
    <section className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-40 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s connect! I’m open to opportunities, collaborations, or just a
          friendly chat.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col space-y-4"
        >
          <div className="flex items-center gap-2">
            <FaUser className="text-[#8245ec]" />
            <label htmlFor="name" className="font-semibold text-white">
              Name
            </label>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:border-purple-500"
          />

          <div className="flex items-center gap-2">
            <MdEmail className="text-[#8245ec]" />
            <label htmlFor="email" className="font-semibold text-white">
              Email
            </label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:border-purple-500"
          />

          <div className="flex items-center gap-2">
            <MdMapsHomeWork className="text-[#8245ec]" />
            <label htmlFor="subject" className="font-semibold text-white">
              Subject
            </label>
          </div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="your Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:border-purple-500"
          />

          <div className="flex items-center gap-2">
            <MdMessage className="text-[#8245ec]" />
            <label htmlFor="message" className="font-semibold text-white">
              Message
            </label>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:border-purple-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-white font-semibold opacity-90 transition rounded-md flex justify-center items-center gap-2"
            disabled={isSending}
          >
            {isSending ? (
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <IoIosSend />
              </motion.div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
