"use client";

import React from "react";
import { skillData } from "../../assets/assets";

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
      <div className="mb-10 sm:mb-20" key={title}>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center tracking-tight uppercase">
          {title}
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {data.map(({ name, experience, description, level, icon: Icon }, i) => (
            <div
              key={i}
              className="w-full max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 md:p-5 text-center shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center justify-between cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 rounded-full bg-gray-100 border border-gray-200">
                <Icon size={20} className="sm:size-22 md:size-24 text-blue-500" />
              </div>
              <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 mb-1">{experience}</p>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-blue-500 font-medium mb-1">
                Level: {level}
              </p>
              <p className="text-[8px] sm:text-[10px] md:text-[11px] text-gray-600 leading-snug">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
        {renderSection(mainCategory.title, mainCategory.filter)}
        {renderSection("Worked with this too", otherCategoriesFilters)}
      </div>
    </section>
  );
}
