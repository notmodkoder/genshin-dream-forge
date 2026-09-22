const PANELS = [0, 1, 2, 3, 4];

/** Full-screen gold curtain wipe used for page-to-page transitions. */
export function Curtain({ mode, label }: { mode: "close" | "open"; label?: string }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex">
      {PANELS.map((i) => (
        <span
          key={i}
          className={`${mode === "close" ? "curtain-close" : "curtain-open"} h-full flex-1 bg-background`}
          style={{
            animationDelay: `${(mode === "close" ? i : PANELS.length - 1 - i) * 0.07}s`,
            borderRight: i < PANELS.length - 1 ? "1px solid color-mix(in oklab, var(--primary) 30%, transparent)" : undefined,
          }}
        />
      ))}
      {label && (
        <span
          className="hero-rise absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-3xl tracking-[0.5em] text-primary"
          style={{ animationDelay: mode === "close" ? ".3s" : "0s" }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
