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
    <section
      id="services"
      className="w-full py-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-lg text-indigo-600 font-semibold font-Ovo">
            What I Offer?
          </h4>
          <h2 className="text-4xl sm:text-5xl font-bold font-Ovo mt-2">
            My Services
          </h2>
          <p className="text-gray-600 font-Ovo mt-5 leading-relaxed">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
        >
          {servicesData.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg px-8 py-10 text-center cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-50 text-indigo-600 rounded-full">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {description}
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
                  Let’s Build It <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
