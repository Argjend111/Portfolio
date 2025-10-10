"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="text-gray-800 px-4 sm:px-6 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-between py-4 border-t border-gray-300"
      >
        <div className="flex-shrink-0">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32"
          />
        </div>
        <div className="text-right">
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            © 2026 Argjend Bytyci. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
