"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectData, projectImages } from "../../assets/assets";

const ProjectCard = ({ project, onClick }) => {
  const firstImage = projectImages[project.id]?.[0] || null;
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-3xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 w-full mx-auto mb-10"
    >
      {firstImage && (
        <div className="relative w-full h-80 sm:h-96 md:h-[32rem] lg:h-[36rem] cursor-pointer">
          <Image
            src={firstImage}
            alt={`Project ${project.id} image`}
            fill
            style={{ objectFit: "cover" }}
            className="cursor-pointer"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow justify-between cursor-pointer">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 cursor-pointer">
          {project.title}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-4 cursor-pointer">
          {project.period}
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed cursor-pointer">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-3 cursor-pointer">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 text-xs sm:text-sm px-2 py-1 rounded-full cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.github && (
          <div className="relative mt-5 w-fit group">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-gray-900 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all duration-300"
            >
              View on GitHub
            </a>
            <div className="absolute -top-12 left-3/4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs sm:text-sm px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300">
             Need permission — text me :)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  if (!images || images.length === 0) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-5xl font-bold z-50 cursor-pointer"
        >
          ×
        </button>
        <div className="relative w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] flex items-center justify-center cursor-pointer">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentImageIndex].src}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center cursor-pointer"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Project ${project.id} image`}
                fill
                style={{ objectFit: "cover" }}
                className="cursor-pointer"
              />
            </motion.div>
          </AnimatePresence>
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 text-2xl cursor-pointer"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 text-2xl cursor-pointer"
              >
                &#8594;
              </button>
            </>
          )}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full text-sm sm:text-base cursor-pointer">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
        <div className="p-8 cursor-pointer text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 cursor-pointer">
            {project.title}
          </h3>
          <p className="text-gray-500 mb-6 cursor-pointer">
            {project.period}
          </p>
          <p className="text-gray-700 text-lg sm:text-xl cursor-pointer">
            {project.description}
          </p>
          {project.tags && (
            <div className="flex flex-wrap justify-center gap-2 mt-3 cursor-pointer">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 text-xs sm:text-sm px-2 py-1 rounded-full cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.github && (
            <div className="relative mt-8 w-fit mx-auto group">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300"
              >
                View on GitHub
              </a>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300">
                Need permission to view the code — text me :)
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const cardHeight = e.target.firstChild.offsetHeight + 40;
    const index = Math.round(scrollTop / cardHeight);
    setCurrentProjectIndex(index);
  };
  return (
    <section
      id="work"
      className="w-full px-6 sm:px-10 lg:px-20 py-16 sm:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-base sm:text-lg font-semibold text-indigo-500 uppercase tracking-wide mb-3">
            My Projects
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explore Some of My Work
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            I am a Software Engineer from Suhareka, Kosovo with 1+ years of
            experience in companies like Pabau, Ameba, and O2 — and over 3+
            years working on independent projects.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 flex flex-col items-center text-center space-y-10">
            <div className="max-w-md sm:max-w-lg">
              <h4 className="text-base sm:text-lg font-semibold uppercase text-gray-500 tracking-wide mb-2">
                Chosen Projects
              </h4>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Latest Projects Built With Passion
              </h2>
              <div className="flex justify-center items-center gap-10 my-8">
                <div className="text-center">
                  <p className="text-6xl sm:text-7xl font-extrabold text-indigo-600">
                    {projectData.length}+
                  </p>
                  <p className="text-gray-500 text-lg sm:text-xl mt-1">
                    Projects
                  </p>
                </div>
              </div>
              <div className="flex justify-center mb-8">
                <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 text-lg sm:text-xl">
                  Let’s Connect
                </button>
              </div>
              <p className="text-gray-600 text-base sm:text-lg italic">
                Building modern web experiences with precision, performance, and
                passion.
              </p>
            </div>
          </div>
          <div className="lg:w-full flex flex-col items-center">
            <div
              className="w-full flex flex-col overflow-y-scroll h-[80vh] pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              onScroll={handleScroll}
            >
              {projectData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
            <div className="flex justify-center mt-4 text-gray-600 text-lg sm:text-xl">
              Viewing project {currentProjectIndex + 1} of {projectData.length}
            </div>
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          images={projectImages[selectedProject.id]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Work;
