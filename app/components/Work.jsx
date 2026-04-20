"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, X } from "lucide-react";
import { projectData, projectImages } from "../../assets/assets";
import Button from "./ui/Button";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";
import { Stagger, fadeUp } from "./ui/Reveal";

function ProjectModal({ project, onClose }) {
  const images = projectImages[project.id] || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const modalScrollRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [project.id]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const heroImage = images[currentImageIndex];

  const showPreviousImage = () => {
    setCurrentImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35 }}
          onClick={(event) => event.stopPropagation()}
          className="premium-card relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-[2rem]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg ring-1 ring-slate-200 transition-transform duration-300 hover:scale-105"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            ref={modalScrollRef}
            className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden bg-slate-950">
              {heroImage ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${project.id}-${currentImageIndex}`}
                    initial={{ opacity: 0.35, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.35, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImage}
                      alt={`${project.title} preview ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg ring-1 ring-slate-200 transition-transform duration-300 hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg ring-1 ring-slate-200 transition-transform duration-300 hover:scale-105"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Project spotlight</p>
                <h3 className="mt-2 text-3xl font-bold tracking-[-0.05em]">{project.title}</h3>
                {images.length > 1 ? (
                  <p className="mt-2 text-sm text-slate-300">
                    {currentImageIndex + 1} / {images.length}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Overview</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Tech stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {images.length > 1 ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Gallery</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {images.map((image, index) => (
                      <button
                        key={`${project.id}-${index}`}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        className={[
                          "relative aspect-[4/3] overflow-hidden rounded-2xl ring-2 transition-all duration-300",
                          currentImageIndex === index
                            ? "ring-indigo-400 shadow-[0_12px_28px_rgba(99,102,241,0.25)]"
                            : "ring-transparent hover:ring-indigo-200",
                        ].join(" ")}
                        aria-label={`Show image ${index + 1}`}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} preview ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 50vw, 20vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/10" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.github ? (
                <Button href={project.github} target="_blank" rel="noopener noreferrer" className="w-full justify-center">
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SectionShell id="work" innerClassName="overflow-visible">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Selected Work"
              title="Projects built to feel sharp, useful, and production-ready."
              description="A mix of SaaS, AI, commerce, and platform work where product thinking and implementation quality both mattered."
              className="mb-8"
            />

            <Card className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { value: `${projectData.length}+`, label: "projects delivered" },
                  { value: "SaaS", label: "product-first mindset" },
                  { value: "AI", label: "automation and tooling" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] bg-slate-950 px-5 py-4 text-white">
                    <p className="text-3xl font-bold tracking-[-0.05em]">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                Each project card opens a deeper view with the stack, screenshots, and a direct path to the live repo when it is available.
              </p>
            </Card>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-2">
            {projectData.map((project) => {
              const image = projectImages[project.id]?.[0];
              return (
                <motion.button
                  key={project.id}
                  type="button"
                  variants={fadeUp}
                  onClick={() => setSelectedProject(project)}
                  className="group text-left"
                >
                  <Card className="h-full overflow-hidden p-0">
                    <div className="relative aspect-[1.08/1] overflow-hidden bg-slate-950">
                      {image ? (
                        <Image
                          src={image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Featured project</p>
                          <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white">{project.title}</h3>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags?.slice(0, 3).map((tag) => (
                              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_24px_rgba(15,23,42,0.22)]">
                            View Project
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-6">
                      <p className="line-clamp-3 text-sm leading-7 text-slate-600">{project.description}</p>
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span>Open details</span>
                        {project.github ? (
                          <span className="inline-flex items-center gap-2 text-indigo-600">
                            <Github className="h-4 w-4" />
                            Repo available
                          </span>
                        ) : (
                          <span className="text-slate-400">Private build</span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.button>
              );
            })}
          </Stagger>
        </div>
      </SectionShell>

      <AnimatePresence>
        {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </>
  );
}