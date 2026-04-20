export default function SectionShell({ id, children, className, innerClassName }) {
  return (
    <section id={id} className={["section-shell scroll-mt-28", className].filter(Boolean).join(" ")}>
      <div
        className={[
          "premium-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10",
          innerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent" />
        {children}
      </div>
    </section>
  );
}
