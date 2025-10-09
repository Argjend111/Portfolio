"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="mt-20 text-gray-800 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Image src={assets.logo} alt="logo" className="w-32 sm:w-36 mx-auto mb-3" />

    
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center sm:flex items-center justify-between border-t border-gray-300 mx-[8%] mt-12 py-6"
      >
      <div className="w-full text-center">
      <p className="text-sm text-gray-600">
        © 2026 Argjend Bytyci. All rights reserved.
      </p>
    </div>

      
      </motion.div>
    </div>
  );
};

export default Footer;
