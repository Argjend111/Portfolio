"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { assets, translationsnav } from "../../assets/assets";
import Button from "./ui/Button";

const navLinks = [
  { label: translationsnav.EN.about, href: "#about", id: "about" },
  { label: translationsnav.EN.projects, href: "#work", id: "work" },
  { label: translationsnav.EN.services, href: "#services", id: "services" },
  { label: translationsnav.EN.skills, href: "#skills", id: "skills" },
  { label: translationsnav.EN.contact, href: "#contact", id: "contact" },
];

function scrollToId(href, setMenuOpen) {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setMenuOpen?.(false);
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["top", ...navLinks.map((link) => link.id)];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.65],
      }
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 160) {
        setActiveSection("top");
      }
    };

    sections.forEach((section) => observer.observe(section));
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div
          className={[
            "container-shell flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 lg:px-6",
            scrolled
              ? "glass-panel border-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              : "border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.08)]",
          ].join(" ")}
        >
          <button
            type="button"
            onClick={() => scrollToId("#top")}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <Image src={assets.logo} alt="Argjend Bytyci" className="relative h-10 w-auto sm:h-11" priority />
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.href)}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 rounded-full bg-indigo-50 ring-1 ring-indigo-200/80"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-500 to-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToId("#contact");
              }}
              className="hidden sm:inline-flex"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 transition-all duration-300 hover:scale-105 lg:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile navigation"
              className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-4 top-20 z-50 rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur-2xl sm:inset-x-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToId(item.href, setMenuOpen)}
                    className={[
                      "rounded-2xl px-4 py-3 text-left text-base font-medium transition-all duration-300",
                      activeSection === item.id
                        ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
                        : "text-slate-700 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <Button
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToId("#contact", setMenuOpen);
                }}
                className="mt-4 w-full justify-center"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
