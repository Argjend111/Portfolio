"use client";

import { motion } from "framer-motion";
import { languageInterest } from "../../assets/assets";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";
import { Stagger, fadeUp } from "./ui/Reveal";

export default function LanguageInterest() {
  return (
    <SectionShell id="languages">
      <SectionHeading
        eyebrow="Exploration"
        title="Where I&apos;m growing next."
        description="I like keeping room for curiosity, especially in AI, systems thinking, and platforms that open up new product possibilities."
      />

      <Stagger className="grid gap-6 md:grid-cols-3">
        {languageInterest.map(({ name, reason, icon: Icon }) => (
          <motion.div key={name} variants={fadeUp}>
            <Card className="h-full">
              <div className="flex h-full flex-col gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{reason}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </Stagger>
    </SectionShell>
  );
}
