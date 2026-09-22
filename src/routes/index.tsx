import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Compass, Moon, Settings2 } from "lucide-react";
import { useState, type CSSProperties, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import character from "@/assets/aetheris-character.png";
import atmosphere from "@/assets/elemental-atmosphere.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Astral — Character Builds, Beautifully Revealed" },
    { name: "description", content: "Showcase your characters, artifacts, weapons and stats in a cinematic profile." },
    { property: "og:title", content: "Astral — Character Builds" },
    { property: "og:description", content: "A cinematic build showcase for elemental adventurers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const enterBuilds = () => {
    setTransitioning(true);
    window.setTimeout(() => navigate({ to: "/builds" }), 760);
  };
  const track = (event: MouseEvent<HTMLElement>) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setParallax({ x, y });
  };
  const shift = (depth: number): CSSProperties => ({ transform: `translate3d(${parallax.x * depth}px, ${parallax.y * depth}px, 0)` });
  return (
    <main onMouseMove={track} className="cinematic-grain relative min-h-[100svh] overflow-hidden bg-background">
      <img src={atmosphere} width={1536} height={1024} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-transform duration-700" style={shift(-5)} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_82%,transparent)_43%,transparent_78%),linear-gradient(0deg,var(--background)_0%,transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: `radial-gradient(420px circle at ${(parallax.x + 1) * 50}% ${(parallax.y + 1) * 45}%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)` }} />
      {Array.from({ length: 18 }).map((_, i) => <i key={i} className="absolute h-0.5 w-0.5 rounded-full bg-primary" style={{ left: `${8 + ((i * 31) % 86)}%`, top: `${12 + ((i * 47) % 75)}%`, animation: `twinkle ${3 + (i % 5)}s ease-in-out ${i * .19}s infinite` }} />)}

      <nav className="hero-rise relative z-30 mx-auto grid w-full max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Astral home"><span className="grid size-9 shrink-0 place-items-center border border-primary/40 bg-primary/10 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]"><Compass className="size-4 text-primary" /></span><span className="font-display text-xl font-semibold uppercase tracking-[0.2em]">Astral</span></a>
        <div className="hidden items-center gap-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:flex"><span className="text-foreground">Showcase</span><span>Characters</span><span>Archive</span></div>
        <div className="flex justify-end gap-2"><Button variant="glass" size="icon" aria-label="Theme"><Moon /></Button><Button variant="glass" size="icon" aria-label="Settings"><Settings2 /></Button></div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100svh-84px)] max-w-[1500px] items-center px-5 pb-10 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div className="relative z-20 pt-8 text-center lg:pt-0 lg:text-left">
          <div className="hero-rise mb-5 flex items-center justify-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-primary lg:justify-start" style={{ animationDelay: ".15s" }}><span className="h-px w-7 bg-primary/60" /> Genshin character showcase</div>
          <h1 className="font-display text-[clamp(3.3rem,8vw,7.8rem)] font-medium leading-[0.78] text-foreground">
            <span className="block overflow-hidden pb-3"><span className="line-reveal block" style={{ animationDelay: ".22s" }}>Your Builds.</span></span>
            <span className="block overflow-hidden pb-5"><span className="line-reveal block text-primary" style={{ animationDelay: ".34s" }}>Beautifully Revealed.</span></span>
          </h1>
          <p className="hero-rise mx-auto mt-2 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base lg:mx-0" style={{ animationDelay: ".5s" }}>Showcase your characters, artifacts, weapons and stats in a cinematic profile built for Genshin players.</p>
          <div className="hero-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start" style={{ animationDelay: ".62s" }}><Button variant="celestial" size="hero" onClick={enterBuilds}>View your builds <ArrowRight /></Button><Button variant="glass" size="hero">Explore showcase</Button></div>
        </div>

        <div className="relative -mx-12 mt-4 h-[48svh] min-h-[390px] lg:absolute lg:inset-y-0 lg:right-[-5%] lg:mt-0 lg:h-auto lg:w-[65%]">
          <div className="absolute left-1/2 top-1/2 h-[66%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 shadow-[0_0_130px_color-mix(in_oklab,var(--primary)_22%,transparent)]" />
          <img src={character} width={1152} height={1536} alt="Aetheris, an original wind-element swordswoman" className="hero-rise absolute bottom-[-10%] left-1/2 h-[115%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_40px_color-mix(in_oklab,var(--background)_75%,transparent)] lg:bottom-[-12%] lg:h-[112%]" style={{ ...shift(8), animationDelay: ".3s" }} />
          <StatCard label="Crit rate" value="72.4%" accent="bg-primary" className="left-[9%] top-[25%] lg:left-[10%]" delay=".78s" />
          <StatCard label="Crit dmg" value="218.6%" accent="bg-gold" className="right-[5%] top-[39%] lg:right-[8%]" delay=".9s" />
          <StatCard label="Energy recharge" value="142%" accent="bg-hydro" className="bottom-[12%] left-[14%] lg:left-[21%]" delay="1.02s" />
        </div>
        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground lg:flex"><span>Scroll to discover</span><span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" /></div>
      </section>
      {transitioning && <div className="portal-enter fixed inset-0 z-50 grid place-items-center bg-background"><div className="size-32 animate-spin rounded-full border border-primary/20 border-t-primary shadow-[0_0_80px_color-mix(in_oklab,var(--primary)_40%,transparent)]" /><span className="absolute font-display text-2xl tracking-[0.24em]">ASTRAL</span></div>}
    </main>
  );
}

function StatCard({ label, value, accent, className, delay }: { label: string; value: string; accent: string; className: string; delay: string }) {
  return <div className={`hero-rise stat-drift absolute z-20 min-w-28 border border-border bg-card/65 px-3 py-3 shadow-[var(--shadow-celestial)] backdrop-blur-xl sm:min-w-36 sm:px-4 ${className}`} style={{ animationDelay: delay }}><div className="mb-1 flex items-center gap-2 text-[0.48rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span className={`size-1.5 rounded-full ${accent}`} />{label}</div><div className="font-display text-xl text-foreground sm:text-2xl">{value}</div></div>;
}
