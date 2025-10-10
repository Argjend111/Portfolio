import React from "react";
import { educationData, experienceData } from "../../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  const allTimeline = [
    ...educationData.map((item) => ({ ...item, category: "Education" })),
    ...experienceData.map((item) => ({ ...item, category: "Experience" })),
  ].sort((a, b) => (b.endDate?.getTime() || Date.now()) - (a.endDate?.getTime() || Date.now()));

  return (
    <div id="about" className="w-full px-4 py-12 sm:py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-12"
      >
        <p className="text-gray-600 font-semibold text-lg sm:text-xl tracking-wide">
          Read this incredible journey
        </p>
        <p className="text-gray-600 mt-2 max-w-2xl leading-relaxed text-sm sm:text-base">
          Passionate about building smart, user-focused digital experiences that blend logic with creativity.
        </p>
      </motion.div>

      <div className="relative w-full sm:w-11/12 max-w-4xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 sm:-translate-x-1/2"></div>

        <div className="space-y-8 sm:space-y-12">
          {allTimeline.map((item, i) => {
            const isLeft = item.category === "Education";
            const start = item.startDate?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) || "";
            const end = item.endDate?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) || "Present";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div
                  className={`w-full sm:w-[46%] p-4 sm:p-5 rounded-xl shadow-sm sm:shadow-md bg-white border border-gray-100 ${
                    isLeft ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.title || item.role}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1">{item.institution || item.provider || item.company}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 italic">
                    {start} – {end}
                  </p>
                  {item.description && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-snug">{item.description}</p>
                  )}
                  {item.details && (
                    <ul className={`mt-2 text-xs sm:text-sm list-none space-y-1 ${isLeft ? "sm:list-inside" : "sm:list-outside"}`}>
                      {item.details.map((d, j) => (
                        <li key={j} className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full ">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <span className="absolute left-[7px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 border-white shadow-sm"></span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
