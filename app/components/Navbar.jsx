"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import { translationsnav } from "../../assets/assets";
import { ArrowUpRight  } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: translationsnav["EN"].about, href: "#about" },
        { label: translationsnav["EN"].projects, href: "#work" },
    { label: translationsnav["EN"].services, href: "#services" },
    { label: translationsnav["EN"].skills, href: "#skills" },
  ];

  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 -translate-y-1/2">
        {assets.header_bg_color && (
          <Image
            src={assets.header_bg_color}
            alt="background"
            className="w-full h-auto object-cover"
          />
        )}
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full fixed px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-5 flex items-center justify-between z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a href="#top" className="cursor-pointer flex-shrink-0">
          {assets.logo && (
            <Image
              src={assets.logo}
              alt="Logo"
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 cursor-pointer"
            />
          )}
        </a>

        <ul
          className={`hidden md:flex items-center gap-3 lg:gap-8 xl:gap-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 lg:px-10 py-2 sm:py-3 shadow-md transition-all duration-300 ${
            scrolled ? "bg-white/70 shadow-md" : ""
          }`}
        >
          {navLinks.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.08 }}
              className="relative group cursor-pointer"
            >
              <a
                href={item.href}
                className="font-Ovo text-gray-700 text-base sm:text-lg lg:text-[18px] cursor-pointer px-3 lg:px-4 py-2 transition-all duration-300"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {assets.menu_black && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="block md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image
                src={assets.menu_black}
                alt="menu"
                className="w-7 sm:w-8 cursor-pointer"
              />
            </motion.button>
          )}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-indigo-700"
          >
            Contact
            <ArrowUpRight  className="w-5 h-5" />
          </motion.a>
        </div>

        <motion.ul
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 h-screen w-60 sm:w-72 bg-white flex flex-col gap-6 sm:gap-8 py-16 px-6 sm:px-8 z-40 md:hidden shadow-xl"
        >
          <div className="flex justify-end mb-6 sm:mb-10">
            {assets.close_black && (
              <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
                <Image
                  src={assets.close_black}
                  alt="close"
                  className="w-6 sm:w-7 cursor-pointer"
                />
              </button>
            )}
          </div>

          {navLinks.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setMenuOpen(false)}
              className="font-Ovo text-gray-700 text-xl sm:text-[22px] py-2 border-b border-gray-200 cursor-pointer group"
            >
              <a href={item.href} className="block cursor-pointer">
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </motion.li>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-indigo-700 cursor-pointer"
          >
            Contact
            <ArrowUpRight  className="w-5 h-5" />
          </motion.a>
        </motion.ul>
      </motion.nav>
    </>
  );
}

export default Navbar;
