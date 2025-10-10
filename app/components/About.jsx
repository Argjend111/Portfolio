import React from "react";
import { educationData, experienceData } from "../../assets/assets";
import { motion } from "framer-motion";

const TimelineCard = ({ item, type }) => {
  const formatDate = (date) =>
    date?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) || "Present";

  return (
    <motion.div
      initial={{ opacity: 0, x: type === "education" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-full p-3 sm:p-5 rounded-xl shadow-sm bg-white border border-gray-100 ${
        type === "education" ? "text-right" : "text-left"
      }`}
    >
      <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
        {item.title || item.role}
      </h3>
      <p className="text-gray-700 text-[11px] sm:text-sm mt-1">
        {item.institution || item.company}
      </p>
      <p className="text-gray-500 text-[10px] sm:text-sm mt-1 italic">
        {formatDate(item.startDate)} – {formatDate(item.endDate)}
      </p>
      {item.description && (
        <p className="text-gray-600 text-[11px] sm:text-sm mt-2 leading-snug">
          {item.description}
        </p>
      )}
      {item.details && (
        <ul className="mt-2 text-[11px] sm:text-sm list-none space-y-1">
          {item.details.map((d, j) => (
            <li key={j} className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full">
              {d}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about" className="w-full px-2 sm:px-4 py-8 sm:py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-8 sm:mb-12"
      >
        <p className="text-gray-600 font-semibold text-base sm:text-xl tracking-wide">
          Read this incredible journey
        </p>
        <p className="text-gray-600 mt-2 max-w-xl leading-relaxed text-xs sm:text-base">
          Passionate about building smart, user-focused digital experiences that blend logic with creativity.
        </p>
      </motion.div>

      <div className="relative w-full sm:w-11/12 max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] sm:w-[2px] bg-gray-300 -translate-x-1/2"></div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8">
          <div className="space-y-6 sm:space-y-14">
            {educationData.map((edu, i) => (
              <TimelineCard key={i} item={edu} type="education" />
            ))}
          </div>
          <div className="space-y-6 sm:space-y-14">
            {experienceData.map((exp, i) => (
              <TimelineCard key={i} item={exp} type="experience" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
