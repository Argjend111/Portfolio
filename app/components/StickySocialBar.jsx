"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, MessageCircle, Mail, FileText } from "lucide-react";

const StickySocialBar = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://github.com/",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://linkedin.com/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://facebook.com/",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Gmail",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "mailto:yourname@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Resume",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "/resume.pdf", 
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center gap-4 sm:gap-6 px-4 py-2 sm:px-8 sm:py-4 max-w-[90%] sm:max-w-fit flex-wrap shadow-lg"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white ${item.color} transition-all duration-300 ease-in-out transform hover:scale-125 shadow-md`}
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default StickySocialBar;
