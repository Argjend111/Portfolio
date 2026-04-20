export default function Card({ children, className }) {
  return (
    <div
      className={[
        "premium-card hover-lift subtle-ring relative overflow-hidden rounded-[1.75rem] p-6",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-transparent before:transition-all before:duration-500 hover:before:border-indigo-300/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
