"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, FileText, Github, Linkedin, Mail } from "lucide-react";
import { assets } from "../../assets/assets";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Argjend111?tab=repositories",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/argjend-byty%C3%A7i-485328270",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:argjendd220@gmail.com",
    icon: Mail,
  },
  {
    name: "Resume",
    href: assets.cv,
    icon: FileText,
  },
];

export default function StickySocialBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 220);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/88 px-2 py-2 shadow-[0_22px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:gap-3 sm:px-3"
    >
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 sm:h-11 sm:w-11"
          aria-label={name}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-full bg-slate-950 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {name}
          </span>
        </a>
      ))}

      {visible ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-200 sm:h-11 sm:w-11"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(148,163,184,0.24)" strokeWidth="2.5" />
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="rgb(99,102,241)"
              strokeWidth="2.5"
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="relative h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      ) : null}
    </motion.div>
  );
}
