"use client";

import { motion } from "framer-motion";
import { skillData } from "../../assets/assets";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";
import { Stagger, fadeUp } from "./ui/Reveal";

function groupSkills() {
  const main = skillData.filter((item) => item.type.toLowerCase().includes("full stack"));
  const supporting = skillData.filter((item) => !item.type.toLowerCase().includes("full stack"));

  return [
    { title: "Core Stack", description: "The technologies I reach for most often when shipping products end to end.", items: main },
    { title: "Supporting Tools", description: "The broader systems, platforms, and tools I regularly work with across delivery.", items: supporting },
  ];
}

export default function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A stack built for modern product work."
        description="I focus on practical tools that let me move from product idea to robust implementation without sacrificing performance or usability."
      />

      <div className="space-y-10">
        {groupSkills().map((group) => (
          <div key={group.title} className="space-y-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-950">{group.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{group.description}</p>
              </div>
            </div>

            <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {group.items.map(({ name, experience, description, level, icon: Icon }) => (
                <motion.div key={name} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="flex h-full flex-col gap-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-indigo-600 ring-1 ring-slate-200">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                          {level}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{name}</h4>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">{experience}</p>
                      </div>

                      <p className="text-sm leading-7 text-slate-600">{description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
