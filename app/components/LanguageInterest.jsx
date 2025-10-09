"use client";

import React from "react";
import { motion } from "framer-motion";
import { languageInterest } from "../../assets/assets";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const colors = [
  "bg-purple-50 border-purple-200",
  "bg-pink-50 border-pink-200",
  "bg-lime-50 border-lime-200",
];

export default function LanguageInterest() {
  return (
    <section id="languages" className="w-full py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <h4 className="text-sm sm:text-base text-indigo-600 font-semibold font-Ovo">
            Learning & Exploring
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold font-Ovo mt-2">
            Languages I’m Interested In
          </h2>
          <p className="text-gray-600 font-Ovo mt-4 text-sm sm:text-base leading-relaxed">
            I’m expanding my skills into AI, system programming, and Android development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
        >
          {languageInterest.map(({ name, reason, icon: Icon }, index) => {
            const color = colors[index % colors.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className={`rounded-xl border shadow-sm hover:shadow-md px-6 py-8 text-center transition-all duration-300 ${color}`}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white rounded-full shadow-inner text-indigo-600">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-gray-600 text-xs leading-snug">{reason}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
