"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact Me", href: "#contact" },
];

  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 -translate-y-1/2 cursor-pointer">
        {assets.header_bg_color && (
          <Image src={assets.header_bg_color} alt="background" className="w-full" />
        )}
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full fixed px-6 sm:px-10 md:px-14 lg:px-20 py-5 flex items-center justify-between z-50 transition-all duration-500 ${
          scrolled ? " backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a href="#top" className="cursor-pointer flex-shrink-0">
          {assets.logo && (
            <Image src={assets.logo} alt="Logo" className="w-24 sm:w-28 md:w-32 cursor-pointer" />
          )}
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-8 py-3 shadow-lg transition-all duration-300 ${
            scrolled ? "bg-white/70 shadow-md" : ""
          }`}
        >
          {navLinks.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="relative group flex-shrink-0"
            >
              <a
                href={item.href}
                className="font-Ovo text-gray-700 text-lg cursor-pointer px-4 py-2 transition-all duration-300"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {assets.moon_icon && (
            <motion.button whileHover={{ rotate: 20 }} className="cursor-pointer">
              <Image src={assets.moon_icon} alt="moon" className="w-6 sm:w-7 cursor-pointer" />
            </motion.button>
          )}

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full cursor-pointer bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300 ${
              scrolled ? "bg-white/60" : ""
            }`}
          >
            Contact
            {assets.arrow_icon && (
              <Image src={assets.arrow_icon} alt="Arrow" className="w-4 cursor-pointer" />
            )}
          </motion.a>

          {assets.menu_black && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="block md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image src={assets.menu_black} alt="menu" className="w-7 sm:w-8 cursor-pointer" />
            </motion.button>
          )}
        </div>

        <motion.ul
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white flex flex-col gap-6 py-20 px-8 z-40 md:hidden"
        >
          <div className="flex justify-end mb-8">
            {assets.close_black && (
              <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
                <Image src={assets.close_black} alt="close" className="w-6 sm:w-7 cursor-pointer" />
              </button>
            )}
          </div>

          {navLinks.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setMenuOpen(false)}
              className="font-Ovo text-gray-700 text-lg py-3 border-b border-gray-200 w-full block relative group"
            >
              <a href={item.href}>
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
}

export default Navbar;
