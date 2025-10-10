import React from "react";
import { educationData, experienceData } from "../../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  const maxLength = Math.max(educationData.length, experienceData.length);
  const timeline = Array.from({ length: maxLength }).map((_, i) => ({
    education: educationData[i] || null,
    experience: experienceData[i] || null,
  }));

  const formatDate = (date) =>
    date?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) || "Present";

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

      <div className="relative w-full sm:w-11/12 max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2"></div>

        <div className="space-y-12 sm:space-y-16">
          {timeline.map((item, i) => (
            <div key={i} className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
              {item.education && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-[46%] p-4 sm:p-5 rounded-xl shadow-sm sm:shadow-md bg-white border border-gray-100 sm:text-right"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.education.title || item.education.role}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1">{item.education.institution || item.education.provider}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 italic">
                    {formatDate(item.education.startDate)} – {formatDate(item.education.endDate)}
                  </p>
                  {item.education.description && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-snug">{item.education.description}</p>
                  )}
                  {item.education.details && (
                    <ul className="mt-2 text-xs sm:text-sm list-none sm:list-inside space-y-1">
                      {item.education.details.map((d, j) => (
                        <li key={j} className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}

              <span className="absolute left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 border-white shadow-sm -translate-x-1/2"></span>

              {item.experience && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-[46%] p-4 sm:p-5 rounded-xl shadow-sm sm:shadow-md bg-white border border-gray-100 sm:text-left mt-8 sm:mt-0"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.experience.title || item.experience.role}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1">{item.experience.company}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 italic">
                    {formatDate(item.experience.startDate)} – {formatDate(item.experience.endDate)}
                  </p>
                  {item.experience.description && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-snug">{item.experience.description}</p>
                  )}
                  {item.experience.details && (
                    <ul className="mt-2 text-xs sm:text-sm list-none sm:list-outside space-y-1">
                      {item.experience.details.map((d, j) => (
                        <li key={j} className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
