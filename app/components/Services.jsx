"use client";

import React from "react";
import { servicesData } from "../../assets/assets";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  return (
    <section id="services" className="w-full py-10 sm:py-12 md:py-16 mb-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h4 className="text-xs sm:text-sm md:text-base text-indigo-600 font-semibold font-Ovo">
            What I Offer?
          </h4>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-Ovo mt-1">
            My Services
          </h2>
          <p className="text-gray-600 font-Ovo mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
            Software Engineer from Suhareka, Kosovo with over 1+ years professional experience and 3+ years of project development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {servicesData.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6 text-center cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 md:mb-4 bg-indigo-50 text-indigo-600 rounded-full">
                {icon}
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-1.5 md:mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-2 sm:mb-2.5 md:mb-3">
                {description}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex cursor-pointer items-center gap-1 text-indigo-600 hover:text-indigo-800 text-[10px] sm:text-xs md:text-sm font-medium transition-colors"
                >
                  Let’s Build It <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
