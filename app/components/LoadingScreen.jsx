"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import favicon from "../favicon.ico";

export default function LoadingScreen() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    x: 50 + i * 30,
    y: 50 + i * 20,
    delay: i * 0.1,
    duration: 4,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-black px-4 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="absolute w-40 h-40 sm:w-64 sm:h-64 rounded-full border border-cyan-400/50 blur-[2px]"
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={{ scale: [0.6, 1.1, 0.6], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0.8, 1.1, 0.8], rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={favicon}
            alt="Teleport Icon"
            width={70}
            height={70}
            className="drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] sm:w-20 sm:h-20"
          />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-300 rounded-full"
              style={{ left: p.x, top: p.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ y: [p.y, -50], opacity: [0, 1, 0], scale: [0.3, 1, 0.3] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        <motion.p
          className="mt-8 sm:mt-10 text-xl sm:text-3xl font-semibold tracking-wider text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 1, 1, 0.6], y: [30, 0, 0, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Initializing Teleport Sequence...
        </motion.p>

        <motion.span
          className="text-xs sm:text-base mt-2 sm:mt-3 tracking-widest text-black font-semibold drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 1, 0.8, 0], scale: [0.9, 1, 1, 1.05, 1] }}
          transition={{ duration: 6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Entering the world of code
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
