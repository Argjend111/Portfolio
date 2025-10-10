"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

const StickySocialBar = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://github.com/Argjend111?tab=repositories",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://www.linkedin.com/in/argjend-bytyçi-485328270",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Gmail",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "mailto:argjendd220@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Resume",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "/resume.pdf",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setVisible(scrollTop > 100);
    };
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full flex items-center justify-center gap-4 sm:gap-6 px-4 py-2 sm:px-8 sm:py-4 max-w-[90%] sm:max-w-fit flex-wrap shadow-xl"
      >
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white ${item.color} transition-all duration-300 ease-in-out transform hover:scale-125 shadow-lg`}
            aria-label={item.name}
          >
            {item.icon}
            <span className="absolute bottom-full mb-2 px-2 py-1 rounded-md bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
          </a>
        ))}
      </motion.div>

      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-2xl cursor-pointer border border-gray-300"
        >
          <svg className="w-14 h-14 absolute">
            <circle
              cx="28"
              cy="28"
              r="26"
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="28"
              cy="28"
              r="26"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={163.36281798666926}
              strokeDashoffset={163.36281798666926 - (163.36281798666926 * scrollProgress) / 100}
              strokeLinecap="round"
              transform="rotate(-90 28 28)"
            />
          </svg>
          <ArrowUp className="relative w-6 h-6 text-gray-800" />
        </motion.button>
      )}
    </>
  );
};

export default StickySocialBar;
