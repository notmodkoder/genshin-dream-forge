import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, LockKeyhole, Sparkles, Sword, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Curtain } from "@/components/curtain";
import character from "@/assets/aetheris-character.png";
import atmosphere from "@/assets/elemental-atmosphere.jpg";

export const Route = createFileRoute("/builds")({
  head: () => ({ meta: [
    { title: "Aetheris Build — Astral" },
    { name: "description", content: "Explore Aetheris's premium character build, weapon, artifacts and combat statistics." },
    { property: "og:title", content: "Aetheris Build — Astral" },
    { property: "og:description", content: "A cinematic wind-element character build." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: BuildsPage,
});

function BuildsPage() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);
  const goBack = () => { setLeaving(true); window.setTimeout(() => navigate({ to: "/" }), 690); };
  return <main className="cinematic-grain relative min-h-screen overflow-hidden bg-background px-5 py-5 sm:px-8 lg:px-12">
    <img src={atmosphere} width={1536} height={1024} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_86%,transparent)_62%,var(--background)_100%)]" />
    <header className="hero-rise relative z-20 mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-5">
      <Button variant="glass" onClick={goBack} className="justify-self-start"><ArrowLeft /> Back</Button>
      <div className="min-w-0 text-right"><p className="truncate text-[0.55rem] uppercase tracking-[0.22em] text-muted-foreground">Character archive / 01</p><p className="font-display text-lg tracking-[0.1em]">Astral</p></div>
    </header>
    <section className="relative z-10 mx-auto grid max-w-[1500px] gap-8 py-8 lg:min-h-[calc(100svh-100px)] lg:grid-cols-[.72fr_1.28fr] lg:items-center">
      <div className="hero-rise relative h-[42svh] min-h-[350px] lg:h-[76svh]" style={{ animationDelay: ".12s" }}>
        <div className="absolute inset-[10%] rounded-full border border-primary/20 shadow-[0_0_120px_color-mix(in_oklab,var(--primary)_18%,transparent)]" />
        <img src={character} width={1152} height={1536} alt="Aetheris character artwork" className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_25px_35px_color-mix(in_oklab,var(--background)_75%,transparent)]" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[0.52rem] uppercase tracking-[0.3em] text-primary">Anemo attuned</span>
      </div>
      <div className="relative z-20">
        <div className="hero-rise flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.25em] text-primary" style={{ animationDelay: ".2s" }}><Wind className="size-4" /> Five star swordswoman</div>
        <h1 className="hero-rise mt-3 font-display text-6xl leading-none sm:text-8xl lg:text-[7rem]" style={{ animationDelay: ".28s" }}>Aetheris</h1>
        <p className="hero-rise mt-3 max-w-xl text-sm leading-7 text-muted-foreground" style={{ animationDelay: ".36s" }}>A sovereign of the high winds, built for sustained elemental damage and precise rotations.</p>
        <div className="hero-rise mt-8 grid grid-cols-3 border-y border-border py-5" style={{ animationDelay: ".44s" }}>{[["72.4%","Crit rate"],["218.6%","Crit dmg"],["142%","Recharge"]].map(([v,l]) => <div key={l} className="border-r border-border px-3 last:border-0 sm:px-6"><strong className="block font-display text-2xl text-foreground sm:text-4xl">{v}</strong><span className="text-[0.48rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.58rem]">{l}</span></div>)}</div>
        <div className="hero-rise mt-7 grid gap-3 sm:grid-cols-2" style={{ animationDelay: ".52s" }}>
          <BuildItem icon={<Sword />} label="Signature weapon" title="Zephyr's Last Light" detail="Lv. 90 · R1" />
          <BuildItem icon={<Sparkles />} label="Artifact set" title="Verdant Remembrance" detail="4-piece · +20" />
        </div>
        <div className="hero-rise mt-5 flex items-center justify-between border border-border bg-card/45 px-4 py-3 backdrop-blur-md" style={{ animationDelay: ".6s" }}><span className="flex items-center gap-2 text-xs text-muted-foreground"><LockKeyhole className="size-3.5 text-gold" /> Build verified</span><span className="text-[0.55rem] uppercase tracking-[0.2em] text-primary">Updated today</span></div>
      </div>
    </section>
    {leaving && <div className="portal-exit fixed inset-0 z-50 bg-background" />}
  </main>;
}

function BuildItem({ icon, label, title, detail }: { icon: React.ReactNode; label: string; title: string; detail: string }) {
  return <div className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border border-border bg-card/55 p-4 backdrop-blur-md transition-colors duration-300 hover:border-primary/50 hover:bg-card"><span className="grid size-10 shrink-0 place-items-center border border-primary/30 text-primary">{icon}</span><span className="min-w-0"><small className="block text-[0.48rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</small><strong className="block truncate font-display text-lg font-medium">{title}</strong><small className="text-[0.58rem] text-muted-foreground">{detail}</small></span><ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" /></div>;
}