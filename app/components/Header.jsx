"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Hand } from "lucide-react";
import { assets } from "../../assets/assets";

function Header() {
  const [showText, setShowText] = useState(false);

  const title = "Software Engineer based in Suhareka";
  const titleWords = title.split(" ");
  const paragraph =
    "I am a Software Engineer from Suhareka, Kosovo with 1+ years of experience in companies and more than 3+ years working on personal and professional projects.";
  const paragraphWords = paragraph.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-11/12 max-w-4xl mx-auto h-screen flex flex-col items-center justify-center text-center px-4 gap-6"
    >
      {/* Profile Image */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          src={assets.profile_img}
          alt="profile"
          width={128}
          height={128}
          className="rounded-full w-28 sm:w-32 md:w-36 border-4 border-gray-300 shadow-lg object-cover"
        />
      </motion.div>

      {/* Greeting */}
      <div className="relative flex flex-col items-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-Ovo mb-4"
        >
          Hi! I'm Argjend Bytyci{" "}
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          >
            <Hand className="inline-block text-yellow-400 w-8 sm:w-9" />
          </motion.span>
        </motion.h3>

        {!showText && (
          <motion.div
            onClick={() => setShowText(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-16 bg-gray-900 text-green-400 font-mono rounded-lg px-6 py-3 text-base sm:text-lg shadow-xl cursor-pointer flex items-center gap-2 border border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative flex items-center">
              $ run-project
              <motion.span
                className="ml-1 bg-green-400 w-1 h-5 rounded-sm"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              ></motion.span>
            </span>
            <span className="ml-3 text-white font-sans text-sm sm:text-base animate-pulse">
              Click to know me!
            </span>
          </motion.div>
        )}
      </div>

      {/* Animated Text */}
      {showText && (
        <>
          {/* Title - letter by letter but whole words together */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-Ovo flex flex-wrap justify-center text-center leading-tight mt-10"
          >
            {titleWords.map((word, wi) => (
              <motion.span
                key={wi}
                className="inline-flex flex-nowrap whitespace-nowrap mx-1"
              >
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: wi * 0.5 + ci * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph - letter by letter but no word breaking */}
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl font-Ovo text-gray-700 flex flex-wrap justify-center max-w-2xl leading-relaxed"
          >
            {paragraphWords.map((word, wi) => (
              <motion.span
                key={wi}
                className="inline-flex flex-nowrap whitespace-nowrap mx-[3px]"
              >
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + wi * 0.15 + ci * 0.02 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.p>

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={assets.cv}
            download
            className="px-8 py-3 border rounded-full flex items-center justify-center gap-2 mt-8 text-black font-Ovo shadow-md hover:shadow-lg transition-all duration-300"
          >
            My Resume
            <Download className="w-5 h-5" />
          </motion.a>
        </>
      )}
    </motion.div>
  );
}

export default Header;
