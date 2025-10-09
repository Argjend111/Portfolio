import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";

function Contact() {
  return (
    <div
      id="contact"
      className='w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <motion.h4
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg sm:text-xl font-Ovo text-gray-800"
      >
        Contact with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-6 mb-14 font-Ovo text-gray-700 leading-relaxed px-4"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto w-full"
      >
        <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
          <div className="relative flex items-center border border-gray-300 rounded-md bg-white focus-within:border-gray-500 transition-all">
            <User className="text-gray-500 w-5 h-5 ml-3" />
            <input
              type="text"
              className="w-full p-3 sm:p-4 outline-none bg-transparent text-sm sm:text-base ml-2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="relative flex items-center border border-gray-300 rounded-md bg-white focus-within:border-gray-500 transition-all">
            <Mail className="text-gray-500 w-5 h-5 ml-3" />
            <input
              type="email"
              className="w-full p-3 sm:p-4 outline-none bg-transparent text-sm sm:text-base ml-2"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="relative flex border border-gray-300 rounded-md bg-white focus-within:border-gray-500 transition-all">
          <MessageSquare className="text-gray-500 w-5 h-5 ml-3 mt-4" />
          <textarea
            rows="6"
            className="w-full p-4 outline-none bg-transparent text-sm sm:text-base ml-2 resize-none"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="cursor-pointer py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 rounded-full mx-auto mt-8 hover:bg-black transition-all duration-500 text-white text-sm sm:text-base font-medium"
        >
          Submit now
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
