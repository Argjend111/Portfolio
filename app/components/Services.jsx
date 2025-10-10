"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../assets/assets";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="w-full py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-xs sm:text-sm md:text-base text-indigo-600 font-semibold font-Ovo">
            What I Offer?
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-Ovo mt-2">
            My Services
          </h2>
          <p className="text-gray-600 font-Ovo mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
            I’m a Software Engineer from Suhareka, Kosovo with over 1+ years of
            professional experience at companies like Pabau, Ameba, and O2, and
            3+ years of hands-on project development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 md:gap-10 mt-10 sm:mt-14"
        >
          {servicesData.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg px-5 sm:px-7 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 text-center cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 bg-indigo-50 text-indigo-600 rounded-full">
                {icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                {description}
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-xs sm:text-sm md:text-base font-medium transition-colors">
                  Let’s Build It <ArrowRight size={12} className="sm:size-[14px] md:size-[16px]"/>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
