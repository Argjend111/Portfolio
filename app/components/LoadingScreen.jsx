"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import favicon from "../favicon.ico";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_45%,#e0f2fe_100%)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:68px_68px] opacity-50" />

      <motion.div
        className="absolute h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-[24rem] w-[24rem] rounded-full bg-sky-400/20 blur-3xl"
        animate={{ scale: [1, 1.28, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-[18rem] w-[18rem] rounded-full border border-white/20"
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{
          rotate: { duration: 14, repeat: Infinity, ease: "linear" },
          scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-10"
      >
        <motion.div
          className="absolute h-56 w-56 rounded-full bg-white/30 blur-3xl"
          animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/70 bg-white/75 shadow-[0_25px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-[8px] rounded-full border border-indigo-300/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-[18px] rounded-full bg-white/50"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <Image
            src={favicon}
            alt="Loading"
            width={64}
            height={64}
            priority
            className="relative z-10 h-16 w-16"
          />
        </motion.div>

        <div className="space-y-4 text-center">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-500"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading Portfolio
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Preparing the experience…
          </motion.h2>

          <motion.div className="mt-5 flex items-center justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 shadow-[0_0_18px_rgba(99,102,241,0.35)]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.18, 1],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.18,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}