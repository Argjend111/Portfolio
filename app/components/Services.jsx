"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "../../assets/assets";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";
import { Stagger, fadeUp } from "./ui/Reveal";

export default function Services() {
  return (
    <SectionShell id="services">
      <SectionHeading
        eyebrow="Services"
        title="High-impact engineering support from concept to production."
        description="From polished frontends to scalable backend workflows, I build products that feel premium, perform reliably, and stay easy to iterate on."
      />

      <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {servicesData.map(({ icon, title, description }) => (
          <motion.div key={title} variants={fadeUp}>
            <Card className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition-all duration-500 group-hover:scale-110">
                  {icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors duration-300 hover:text-indigo-500"
              >
                Discuss this service
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Card>
          </motion.div>
        ))}
      </Stagger>
    </SectionShell>
  );
}
