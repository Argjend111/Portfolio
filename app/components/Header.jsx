"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { assets, personalInfo, projectData } from "../../assets/assets";
import Button from "./ui/Button";
import { Reveal, Stagger, fadeUp } from "./ui/Reveal";

const headline = "Engineering scalable systems and high-performance applications.";

export default function Header() {
  const [typedLength, setTypedLength] = useState(0);
  const typedHeadline = useMemo(() => headline.slice(0, typedLength), [typedLength]);

  useEffect(() => {
    if (typedLength >= headline.length) return undefined;

    const timeout = window.setTimeout(() => {
      setTypedLength((value) => value + 1);
    }, typedLength === 0 ? 250 : 35);

    return () => window.clearTimeout(timeout);
  }, [typedLength]);

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="container-shell relative">
        <div className="absolute left-0 top-6 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl sm:h-72 sm:w-72" />

        <div className="premium-card relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50 [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <Reveal className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                Software Engineer | {personalInfo.location}
              </Reveal>

              <Stagger className="space-y-6">
                <motion.div variants={fadeUp} className="space-y-5">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                  Software engineering with real-world impact
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-7xl">
                    <span className="block">Hi, I&apos;m Argjend Bytyci.</span>
                    <span className="mt-2 block text-gradient">
                      {typedHeadline}
                      <motion.span
                        aria-hidden="true"
                        className="ml-1 inline-block h-[0.9em] w-[0.08em] rounded-full bg-indigo-500 align-[-0.08em]"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
                >
                 I build scalable applications across backend, frontend, and desktop environments using .NET, Next.js, and modern databases.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    href="#work"
                    onClick={(event) => {
                      event.preventDefault();
                      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Selected Work
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button as={motion.a} variant="secondary" href={assets.cv} download>
                    Download Resume
                    <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </Button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="grid gap-4 sm:grid-cols-3"
                >
                  {[
                    { value: "2+ yrs", label: "professional experience" },
                    { value: `${projectData.length}+`, label: "shipped projects" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/70 bg-white/80 px-5 py-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                    >
                      <p className="text-2xl font-bold tracking-[-0.05em] text-slate-950">{item.value}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </motion.div>
              </Stagger>
            </div>

            <Reveal className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/20 via-transparent to-sky-400/20 blur-2xl" />
              <div className="relative premium-card rounded-[2rem] p-5 sm:p-6">
                <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                  Available for freelance and product work
                </div>

                <motion.div
                  className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.22),transparent_30%)]" />
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl" />
                        <Image
                          src={assets.profile_img}
                          alt="Argjend Bytyci"
                          width={96}
                          height={96}
                          className="relative h-24 w-24 rounded-3xl border border-white/10 object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Now shipping</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        "High-performance systems built with modern architectures",
"Scalable APIs and backend systems with optimized databases",
"From idea to production-ready software with real users in mind",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
