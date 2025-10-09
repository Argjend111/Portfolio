"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillData } from "../../assets/assets";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  const mainCategory = { title: "Software Engineer - End-to-End Craft", filter: "full stack" };
  const otherCategoriesFilters = ["backend", "database", "frontend", "other"];

  const filterSkills = (types) => {
    return skillData.filter((s) => {
      const t = s.type.toLowerCase();
      if (Array.isArray(types)) {
        return types.some((type) => {
          if (type === "other") {
            return !["frontend", "backend", "database", "full stack"].some((x) => t.includes(x));
          }
          return t.includes(type);
        });
      }
      return t.includes(types);
    });
  };

  const renderSection = (title, types) => {
    const data = filterSkills(types);

    if (data.length === 0) return null;

    return (
      <div className="mb-20" key={title}>
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center tracking-tight uppercase"
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {data.map(({ name, experience, description, level, icon: Icon }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: { duration: 0.25 },
              }}
              className="w-[150px] sm:w-[170px] md:w-[190px] bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100 border border-gray-200">
                <Icon size={24} className="text-blue-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-[11px] text-gray-500 mb-1">{experience}</p>
              <p className="text-[11px] text-blue-500 font-medium mb-1">
                Level: {level}
              </p>
              <p className="text-[10px] text-gray-600 leading-snug">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 tracking-tight"
            variants={textVariants}
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-4 text-sm max-w-xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Highlighting my main expertise first, then other tools and technologies.
          </motion.p>
        </motion.div>

        {renderSection(mainCategory.title, mainCategory.filter)}

        {renderSection("Worked with this too", otherCategoriesFilters)}
      </div>
    </section>
  );
}
