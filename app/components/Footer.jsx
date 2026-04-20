"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="container-shell glass-panel flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/70 px-6 py-6 text-center sm:flex-row sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Argjend Bytyci</p>
            <p className="text-sm text-slate-600">Software Engineer building premium digital products.</p>
          </div>
        </div>

        <p className="text-sm text-slate-500">Copyright 2026 Argjend Bytyci. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
