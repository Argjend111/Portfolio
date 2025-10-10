"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectData, projectImages } from "../../assets/assets";

const ProjectCard = ({ project, onClick }) => {
  const firstImage = projectImages[project.id]?.[0] || null;
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full mx-auto mb-6"
    >
      {firstImage && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer">
          <Image
            src={firstImage}
            alt={`Project ${project.id} image`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between cursor-pointer">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 cursor-pointer">
          {project.title}
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-1 sm:mb-2 cursor-pointer">
          {project.period}
        </p>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed cursor-pointer">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 cursor-pointer">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 text-xs sm:text-xs px-2 py-1 rounded-full cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.github && (
          <div className="relative mt-3 w-fit mx-auto group cursor-pointer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gray-900 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              View on GitHub
            </a>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer">
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
      className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-3 sm:p-6 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-600 hover:text-gray-800 text-2xl sm:text-3xl font-bold z-50 cursor-pointer"
        >
          ×
        </button>
        <div className="relative w-full h-48 sm:h-64 md:h-80 flex items-center justify-center cursor-pointer">
          <Image
            src={images[currentImageIndex]}
            alt={`Project ${project.id} image`}
            fill
            style={{ objectFit: "cover" }}
            className="cursor-pointer"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 text-lg sm:text-xl cursor-pointer"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 text-lg sm:text-xl cursor-pointer"
              >
                &#8594;
              </button>
            </>
          )}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 text-white text-xs sm:text-sm px-2 py-0.5 rounded-full cursor-pointer">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
        <div className="p-3 sm:p-4 text-center cursor-pointer">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 cursor-pointer">
            {project.title}
          </h3>
          <p className="text-gray-500 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base cursor-pointer">{project.period}</p>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed cursor-pointer">
            {project.description}
          </p>
          {project.tags && (
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2 cursor-pointer">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 text-xs sm:text-xs px-2 py-1 rounded-full cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.github && (
            <div className="relative mt-3 w-fit mx-auto group cursor-pointer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gray-900 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              >
                View on GitHub
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer">
                Need permission — text me :)
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
    const cardHeight = e.target.firstChild.offsetHeight + 24;
    const index = Math.round(scrollTop / cardHeight);
    setCurrentProjectIndex(index);
  };

  return (
    <section id="work" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 scroll-mt-24 cursor-pointer">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h4 className="text-sm sm:text-base font-semibold text-indigo-500 uppercase tracking-wide mb-1">
            My Projects
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Explore Some of My Work
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed cursor-pointer">
            Software Engineer from Suhareka, Kosovo with 1+ years of professional experience and 3+ years of independent projects.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
          <div className="lg:w-1/2 flex flex-col items-center text-center space-y-6 sm:space-y-8">
            <div className="max-w-md sm:max-w-lg cursor-pointer">
              <h4 className="text-xs sm:text-sm font-semibold uppercase text-gray-500 tracking-wide mb-1">
                Chosen Projects
              </h4>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 cursor-pointer">
                Latest Projects Built With Passion
              </h2>
              <div className="flex justify-center items-center gap-4 sm:gap-6 my-4 cursor-pointer">
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-600">
                    {projectData.length}+
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-1">Projects</p>
                </div>
              </div>
              <div className="flex justify-center mb-4 sm:mb-6 cursor-pointer">
                <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 text-sm sm:text-base md:text-lg cursor-pointer">
                  Let’s Connect
                </button>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base italic text-center cursor-pointer">
                Building modern web experiences with precision, performance, and passion.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center w-full cursor-pointer">
            <div
              className="w-full flex flex-col overflow-y-auto max-h-[65vh] sm:max-h-[70vh] lg:max-h-[75vh] pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
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
            <div className="flex justify-center mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm md:text-base cursor-pointer">
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
