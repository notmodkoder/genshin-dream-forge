import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { Curtain } from "@/components/curtain";
import character from "@/assets/aetheris-character.png";
import atmosphere from "@/assets/elemental-atmosphere.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Astral — Character Builds, Beautifully Revealed" },
    { name: "description", content: "A cinematic showcase of characters, artifacts, weapons and combat stats." },
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
  const [entering, setEntering] = useState(true);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = window.setTimeout(() => setEntering(false), 1000);
    return () => window.clearTimeout(t);
  }, []);

  const enterBuilds = () => {
    setTransitioning(true);
    window.setTimeout(() => navigate({ to: "/builds" }), 800);
  };
  const track = (event: MouseEvent<HTMLElement>) => {
    setParallax({
      x: (event.clientX / window.innerWidth - 0.5) * 2,
      y: (event.clientY / window.innerHeight - 0.5) * 2,
    });
  };
  const shift = (depth: number): CSSProperties => ({
    transform: `translate3d(${parallax.x * depth}px, ${parallax.y * depth}px, 0)`,
  });

  return (
    <main onMouseMove={track} className="cinematic-grain relative min-h-[100svh] overflow-hidden bg-background">
      <div className="editorial-atmosphere pointer-events-none absolute inset-y-0 left-0 w-full overflow-hidden lg:w-[48%]" aria-hidden="true">
        <span className="editorial-glow editorial-glow-one" />
        <span className="editorial-glow editorial-glow-two" />
        <span className="editorial-current editorial-current-one" />
        <span className="editorial-current editorial-current-two" />
        {Array.from({ length: 24 }).map((_, i) => (
          <i
            key={i}
            className="editorial-dust"
            style={{
              left: `${4 + ((i * 29) % 92)}%`,
              top: `${8 + ((i * 43) % 88)}%`,
              animationDelay: `${i * -0.46}s`,
              animationDuration: `${7 + (i % 6)}s`,
            }}
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {Array.from({ length: 16 }).map((_, i) => (
        <i
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-primary"
          style={{
            left: `${8 + ((i * 31) % 86)}%`,
            top: `${12 + ((i * 47) % 75)}%`,
            animation: `twinkle ${3 + (i % 5)}s ease-in-out ${i * 0.19}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col items-stretch gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-14 lg:px-14 lg:py-0">
        {/* Editorial column — 40% */}
        <div className="order-2 flex w-full flex-col justify-center lg:order-1 lg:w-[40%]">
          <div className="slide-in-left">
            <span className="mb-4 block text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-primary">
              Anemo Sovereign • Wind Blade
            </span>
            <h1 className="mb-5 font-display text-[clamp(4.5rem,13vw,10rem)] leading-[0.85] text-foreground">
              Aetheris
            </h1>
          </div>

          <div className="hero-rise" style={{ animationDelay: ".3s" }}>
            <p className="mb-9 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              A sovereign of the high winds, built for sustained elemental damage and precise rotations. Every artifact,
              weapon and stat, revealed as one cinematic profile.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                onClick={enterBuilds}
                className="group relative cursor-pointer overflow-hidden bg-primary px-10 py-4 font-display text-2xl tracking-[0.18em] text-primary-foreground transition-colors duration-500 hover:bg-foreground"
              >
                <span className="relative z-10">View Builds</span>
                <span className="absolute inset-0 translate-y-full bg-foreground/20 transition-transform duration-300 group-hover:translate-y-0" />
              </button>
              <span className="hidden h-px w-24 bg-primary/30 sm:block" />
              <span className="font-display text-xl tracking-tight text-primary">001 / 072</span>
            </div>
          </div>
        </div>

        {/* Artwork column — 60% */}
        <div className="relative order-1 h-[52svh] min-h-[360px] w-full lg:order-2 lg:h-[85vh] lg:w-[60%]">
          <div className="absolute -right-4 -top-4 z-0 h-64 w-64 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute -bottom-4 left-10 z-0 h-32 w-32 border-b-2 border-l-2 border-primary/40 lg:left-20" />

          <div className="hero-rise group relative h-full w-full overflow-hidden rounded-tr-[100px] border border-primary/10 bg-card shadow-2xl" style={{ animationDelay: ".55s" }}>
            <img
              src={atmosphere}
              width={1536}
              height={1024}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-[2000ms] group-hover:scale-110"
              style={shift(-6)}
            />
            <div className="aetheris-atmosphere pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <span className="aetheris-aura" />
              <span className="aetheris-wind aetheris-wind-one" />
              <span className="aetheris-wind aetheris-wind-two" />
              <span className="aetheris-wind aetheris-wind-three" />
              <span className="aetheris-energy-ring aetheris-energy-ring-one" />
              <span className="aetheris-energy-ring aetheris-energy-ring-two" />
              {Array.from({ length: 12 }).map((_, i) => (
                <i
                  key={i}
                  className="aetheris-mote"
                  style={{
                    left: `${10 + ((i * 37) % 82)}%`,
                    top: `${18 + ((i * 29) % 70)}%`,
                    animationDelay: `${i * -0.7}s`,
                    animationDuration: `${6 + (i % 4)}s`,
                  }}
                />
              ))}
            </div>
            <span className="rune-orbit absolute left-1/2 top-1/2 h-[400px] w-[400px] border border-primary/20" />
            <img
              src={character}
              width={1152}
              height={1536}
              alt="Aetheris, an original wind-element swordswoman"
              className="absolute bottom-0 left-1/2 h-[104%] w-auto max-w-none -translate-x-1/2 object-contain"
              style={shift(10)}
            />
            <span className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_2%,transparent_55%)]" />
            <div className="absolute bottom-10 right-8 text-right sm:right-12">
              <h2 className="font-display text-3xl text-primary sm:text-4xl">Dominance of the Gale</h2>
              <p className="text-[0.62rem] uppercase italic tracking-[0.2em] text-muted-foreground">
                Tier SS+ build available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical side rail */}
      <div className="hero-rise pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-10 xl:flex" style={{ animationDelay: "1s" }}>
        <span className="h-32 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        <span className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground [writing-mode:vertical-lr]">Astral Archive</span>
        <span className="h-32 w-px bg-gradient-to-t from-transparent via-primary to-transparent" />
      </div>

      {entering && <Curtain mode="open" />}
      {transitioning && <Curtain mode="close" label="ASTRAL" />}
    </main>
  );
}
