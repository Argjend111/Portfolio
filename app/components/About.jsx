import React from "react";
import { educationData, certificateData, experienceData, trainingData  } from "../../assets/assets";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const About = () => {
  const allTimeline = [
    ...educationData.map((item) => ({ ...item, category: "Education" })),
    ...certificateData.map((item) => ({ ...item, category: "Certificate" })),
    ...trainingData.map((item) => ({ ...item, category: "Training" })),
    ...experienceData.map((item) => ({ ...item, category: "Experience" })),
  ].sort((a, b) => {
    const aDate = a.endDate ? a.endDate.getTime() : new Date().getTime();
    const bDate = b.endDate ? b.endDate.getTime() : new Date().getTime();
    return bDate - aDate;
  });

  return (
    <div id="about" className="w-full px-4 py-16 scroll-mt-20 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          className="flex flex-col items-center gap-3 mb-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <p className="text-gray-600 font-semibold text-xl sm:text-2xl tracking-wide">
            Read this incredible journey
          </p>
          <ArrowDownCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
        </motion.div>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed px-4 text-sm sm:text-base">
          Passionate about building smart, user-focused digital experiences that blend logic with creativity.
        </p>
      </motion.div>

      <div className="relative w-full sm:w-11/12 max-w-5xl mx-auto mt-16 sm:mt-24">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 sm:-translate-x-1/2"></div>

        <div className="space-y-12 sm:space-y-16">
          {allTimeline.map((item, i) => {
            const isLeft = ["Education", "Certificate", "Training"].includes(item.category);
            const start = item.startDate
              ? item.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
              : "";
            const end = item.endDate
              ? item.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
              : "Present";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}
              >
                <div
                  className={`w-full sm:w-[46%] p-6 rounded-2xl shadow-md sm:shadow-lg bg-white border border-gray-100 ${isLeft ? "sm:text-right" : "sm:text-left"}`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{item.title || item.role}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1">{item.institution || item.provider || item.company}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 italic">
                    {start} – {end}
                  </p>
                  {item.description && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">{item.description}</p>
                  )}
                  {item.details && (
                    <ul className={`mt-3 text-xs list-none sm:text-sm ${isLeft ? "sm:list-inside" : "sm:list-outside"} space-y-2`}>
                      {item.details.map((d, j) => (
                        <li
                          key={j}
                          className="relative  before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <span className="absolute left-[7px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 border-white shadow-md"></span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
