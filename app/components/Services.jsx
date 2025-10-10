"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../assets/assets";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="w-full py-10 sm:py-12 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h4 className="text-xs sm:text-sm text-indigo-600 font-semibold font-Ovo">
            What I Offer?
          </h4>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-Ovo mt-1">
            My Services
          </h2>
          <p className="text-gray-600 font-Ovo mt-2 text-xs sm:text-sm leading-relaxed">
            Software Engineer from Suhareka, Kosovo with over 1+ years professional experience and 3+ years of project development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-8"
        >
          {servicesData.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md px-4 sm:px-5 py-4 sm:py-6 text-center cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-indigo-50 text-indigo-600 rounded-full">
                {icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                {description}
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-xs sm:text-sm font-medium transition-colors">
                  Let’s Build It <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
