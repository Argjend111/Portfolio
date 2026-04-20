"use client";

import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-[0_18px_45px_rgba(79,70,229,0.32)] hover:bg-indigo-500",
  secondary:
    "bg-white/80 text-slate-900 ring-1 ring-inset ring-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:bg-white",
};

export default function Button({
  as: Component = motion.a,
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <Component
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-500 sm:px-6 sm:py-3.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2",
        variants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
