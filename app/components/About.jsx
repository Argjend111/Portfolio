"use client";

import { motion } from "framer-motion";
import { educationData, experienceData } from "../../assets/assets";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";
import { Stagger, fadeUp } from "./ui/Reveal";

function formatDate(date) {
  return date?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) || "Present";
}

function TimelineColumn({ eyebrow, title, items, type }) {
  return (
    <Card className="h-full p-0">
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">{eyebrow}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950">{title}</h3>
      </div>

      <Stagger className="relative space-y-4 p-6">
        <div className="pointer-events-none absolute bottom-6 left-[1.3rem] top-6 w-px bg-gradient-to-b from-indigo-200 via-slate-200 to-transparent" />
        {items.map((item, index) => (
          <motion.div key={`${item.title || item.role}-${index}`} variants={fadeUp} className="relative pl-8">
            <span className="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.12)]" />
            <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.title || item.role}</h4>
                  <p className="text-sm text-slate-600">{item.institution || item.company}</p>
                  {item.type ? <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.type}</p> : null}
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </span>
              </div>

              {item.description ? (
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              ) : null}

              {item.details ? (
                <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {item.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </Stagger>
    </Card>
  );
}

export default function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About"
        title="A journey shaped by shipping, learning fast, and staying close to real product problems."
        description="I care about more than writing features. I like making products clearer, faster, and more confident for the people who use them."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <TimelineColumn eyebrow="Education" title="Foundations" items={educationData} type="education" />
        <TimelineColumn eyebrow="Experience" title="Recent Work" items={experienceData} type="experience" />
      </div>
    </SectionShell>
  );
}
