"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import favicon from "../favicon.ico";

export default function LoadingScreen() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 24 }, () => ({
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-cyan-50 to-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="relative flex flex-col items-center text-black"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={favicon}
              alt="Loading"
              width={80}
              height={80}
              priority
              className="drop-shadow-[0_0_35px_rgba(0,200,255,0.8)]"
            />
          </motion.div>
        </motion.div>

        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-cyan-400/80"
            style={{ left: p.left }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -600, opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
