"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";


const StickySocialBar = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      href: "https://github.com/Argjend111?tab=repositories",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      href: "https://www.linkedin.com/in/argjend-bytyçi-485328270",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Gmail",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      href: "mailto:argjendd220@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Resume",
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      href: "/Argjend-Bytyçi-CV.pdf",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setVisible(scrollTop > 100);
    };
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex bg-white/90  backdrop-blur-lg border border-gray-200 rounded-full items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2 py-1 sm:px-5 sm:py-2 md:px-6 md:py-3 max-w-[95%] sm:max-w-fit shadow-xl"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative group w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white ${item.color} bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg border border-white/20 cursor-pointer`}
          aria-label={item.name}
        >
          {item.icon}
          <span className="absolute bottom-full mb-1 sm:mb-2 px-2 py-1 rounded-md bg-gray-800 text-white text-[10px] sm:text-xs md:text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.name}
          </span>
        </a>
      ))}
      {visible && (
        <button
          onClick={scrollToTop}
          className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg border border-white/30 cursor-pointer group"
          aria-label="Scroll to top"
        >
          <svg
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            viewBox="0 0 56 56"
          >
            <circle
              cx="28"
              cy="28"
              r="26"
              stroke="rgba(255,255,255,0.3)"
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
              strokeDashoffset={
                163.36281798666926 -
                (163.36281798666926 * scrollProgress) / 100
              }
              strokeLinecap="round"
              transform="rotate(-90 28 28)"
            />
          </svg>
          <ArrowUp className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
          <span className="absolute bottom-full mb-1 sm:mb-2 px-2 py-1 rounded-md bg-gray-800 text-white text-[10px] sm:text-xs md:text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Go on Top
          </span>
        </button>
      )}
    </motion.div>
  );
};

export default StickySocialBar;
