"use client";

import React from "react";
import { languageInterest } from "../../assets/assets";

const colors = [
  "bg-purple-50 border-purple-200",
  "bg-pink-50 border-pink-200",
  "bg-lime-50 border-lime-200",
  "bg-yellow-50 border-yellow-200",
  "bg-blue-50 border-blue-200",
];

export default function LanguageInterest() {
  return (
    <section id="languages" className="w-full py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h4 className="text-xs sm:text-sm md:text-base text-indigo-600 font-semibold font-Ovo">
            Learning & Exploring
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-Ovo mt-2">
            Languages I’m Interested In
          </h2>
          <p className="text-gray-600 font-Ovo mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
            I’m expanding my skills into AI, system programming, and Android development.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-6 mt-10 sm:mt-12">
          {languageInterest.map(({ name, reason, icon: Icon }, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] rounded-2xl border shadow-sm px-4 py-6 text-center transition-all duration-300 ${color} cursor-pointer`}
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 bg-white rounded-full shadow-inner text-indigo-600">
                  <Icon size={20} className="sm:size-22 md:size-24" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm leading-snug max-w-xs mx-auto">
                  {reason}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
