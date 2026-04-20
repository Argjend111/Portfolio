import { Reveal } from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Reveal className={["mx-auto mb-12 flex max-w-3xl flex-col gap-4", alignment, className].filter(Boolean).join(" ")}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
