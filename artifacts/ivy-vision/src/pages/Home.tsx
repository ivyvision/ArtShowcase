import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ivyLogo from "@assets/Untitled_design_1784941575772.jpeg";
import duskPhoto from "@assets/IMG_8613_1784944861332.jpeg";
import heroBg from "@assets/IMG_20260623_193409_10_186_1784945099904.jpeg";
import loreBg from "@assets/1_IMG_5010_1784945745561.jpeg";
import musicBg from "@assets/0_IMG_8612_1784945745560.jpeg";
import connectBg from "@assets/IMG_8613_1784944861332.jpeg";
import profileBg from "@assets/IMG_8611_1784947359440.jpeg";

import { Play, FastForward, Rewind, Disc3, Radio, ArrowRight, Instagram, Twitter, Youtube, BookOpen, ChevronDown } from 'lucide-react';

// Real top tracks from IvyVision's Spotify (fetched via Spotify Web API)
const SPOTIFY_TRACKS = [
  {
    name: "SMD!",
    artist: "Saint Dillinger, T0xic Wa5te",
    album: "Executive Dysfuntion",
    albumArt: "https://i.scdn.co/image/ab67616d00001e021e48d94bcf9d6db773a02243",
    spotifyUrl: "https://open.spotify.com/track/432GGLv47k7K4pvrDafEKs",
  },
  {
    name: "Interfaith",
    artist: "Public Memory",
    album: "Wuthering Drum",
    albumArt: "https://i.scdn.co/image/ab67616d00001e028902de52822d75d8874166f1",
    spotifyUrl: "https://open.spotify.com/track/7ewt9oqi8kJX8EGeAsUbQg",
  },
  {
    name: "A wild river to take you home",
    artist: "Black Hill, Silent Island",
    album: "Tales of the night forest",
    albumArt: "https://i.scdn.co/image/ab67616d00001e02dfec08042d57781299cf8b73",
    spotifyUrl: "https://open.spotify.com/track/0UFkbnxj34vZVgwwEDy29e",
  },
  {
    name: "Circle With Me",
    artist: "Spiritbox",
    album: "Eternal Blue",
    albumArt: "https://i.scdn.co/image/ab67616d00001e023e234c82f96fa4ded8e5ca47",
    spotifyUrl: "https://open.spotify.com/track/3FI0iAAAjmR31xpZEwbdys",
  },
  {
    name: "Rainforest Bird Songs",
    artist: "Sleep Miracle",
    album: "Bird Showers",
    albumArt: "https://i.scdn.co/image/ab67616d00001e02a8abd24f8316037dbd296201",
    spotifyUrl: "https://open.spotify.com/track/14jB7OqCZ395Oopbo6kVdk",
  },
];

// Real poems from "Estranged" by Aiyana Noelani
const POEMS = [
  {
    title: "Starlight",
    lines: [
      "Into the night",
      "Immersed in space & removed from time",
      "Held breath",
      "Tranquil sigh",
      "Glimpse of obsidian & stars shimmering white",
      "Held in place by the expansive divine",
      "At peace within the",
      "Embrace of the sky",
    ],
  },
  {
    title: "Wholeness",
    lines: [
      "The trees forget their individuality",
      "And join with the horizon into a single organism,",
      "Drawing millions of breaths as one",
      "With the power to pull the wind out of the valley",
      "And the air out of my sun-gold body",
      "Until it is impossible to hold on to the Self",
      "So I become a silhouette",
      "And join the trees in the skyline",
    ],
  },
  {
    title: "Landscape",
    lines: [
      "As snow absorbs the ashes, awakened conscience falters",
      "Underneath, true nature waits",
      "Exposed to air, ice melts away",
      "",
      "Growing forest to reclaim,",
      "Where you can live with your pain",
    ],
  },
  {
    title: "Reaper",
    excerpt: true,
    lines: [
      "Clenched in the gnarled fingers of the trees",
      "Bound upon a bed of thistled vines",
      "Looking up to watch the sunblaze stifle",
      "Looking up to watch the night leak from black branches",
      "The leafless lifeless reapers, desperate to absorb life",
      "I am a sacrifice to these hallows",
      "I am the compost they will drink",
      "",
      "Night brings heavy mist",
      "As sclera seeping over the pupil",
      "Obstructing senses, but bearing perfect foresight",
      "Clarity to the mind's eye",
      "Awaiting the descent",
    ],
  },
  {
    title: "Indifference",
    lines: [
      "You should be begging at my feet for forgiveness",
      "for what you said",
      "",
      "Your indifference to me reared its ugly head",
      "And now that I've seen it, I can't unsee it",
      "",
      "So I'm revoking your privilege to witness my life",
      "",
      "As I forge my way forward,",
      "resilient and remarkable",
    ],
  },
  {
    title: "Nothing Lasts Forever",
    lines: [
      "It's true that nothing lasts forever",
      "But some things are worth",
      "Trying to hold onto",
    ],
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`relative min-h-[100dvh] flex flex-col justify-center py-24 ${className}`}>
    {children}
  </section>
);

const VineDecoration = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 400" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`absolute pointer-events-none opacity-20 text-primary ${className}`}
  >
    <path d="M50 0 C 80 50, 20 100, 50 150 C 80 200, 20 250, 50 300 C 80 350, 20 400, 50 400" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="65" cy="40" r="3" fill="currentColor" className="animate-pulse" />
    <circle cx="30" cy="120" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }} />
    <circle cx="70" cy="220" r="2.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2s' }} />
    <circle cx="35" cy="320" r="5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
    <path d="M50 150 Q 70 140 80 160" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M50 250 Q 30 240 20 260" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

// ── Sacred Geometry SVG Components ─────────────────────────────────
const FLOWER_CENTERS: [number,number][] = [
  [100,100],[100,60],[134.64,80],[134.64,120],[100,140],[65.36,120],[65.36,80],
];

const FlowerOfLife = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {FLOWER_CENTERS.map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="40" stroke="currentColor" strokeWidth="0.5" />
    ))}
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" />
  </svg>
);

const MetatronsCube = ({ className = "" }: { className?: string }) => {
  const pairs: [number,number][] = [];
  for (let i = 0; i < FLOWER_CENTERS.length; i++)
    for (let j = i+1; j < FLOWER_CENTERS.length; j++)
      pairs.push([i,j]);
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {pairs.map(([i,j],k) => (
        <line key={k}
          x1={FLOWER_CENTERS[i][0]} y1={FLOWER_CENTERS[i][1]}
          x2={FLOWER_CENTERS[j][0]} y2={FLOWER_CENTERS[j][1]}
          stroke="currentColor" strokeWidth="0.4" />
      ))}
      {FLOWER_CENTERS.map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="40" stroke="currentColor" strokeWidth="0.4" />
      ))}
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
};

const SacredEye = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.4" />
    <polygon points="100,18 188,168 12,168" stroke="currentColor" strokeWidth="0.7" />
    <ellipse cx="100" cy="108" rx="46" ry="30" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="100" cy="108" r="14" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="100" cy="108" r="6" fill="currentColor" opacity="0.35" />
    {Array.from({length:16},(_,i)=>{
      const a=(i*22.5-90)*Math.PI/180;
      return <line key={i}
        x1={100+88*Math.cos(a)} y1={100+88*Math.sin(a)}
        x2={100+96*Math.cos(a)} y2={100+96*Math.sin(a)}
        stroke="currentColor" strokeWidth="0.5"/>;
    })}
  </svg>
);

const VesicaPiscis = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="190" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

const DuskDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <div ref={ref} className="relative w-full h-[70vh] overflow-hidden">
      {/* Parallax photo */}
      <motion.div style={{ y }} className="absolute inset-[-10%] will-change-transform">
        <img
          src={duskPhoto}
          alt="Dusk — crescent moon over ocean"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      {/* Ambient colour overlay — teal tint to bridge the two palettes */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-[hsl(175_100%_10%/0.3)] pointer-events-none z-10 mix-blend-multiply" />

      {/* Moon-glow orb centred on the real crescent in the photo */}
      <div className="absolute top-[28%] left-[42%] w-24 h-24 rounded-full pointer-events-none z-20"
        style={{ background: "radial-gradient(circle, hsl(210 20% 92% / 0.22) 0%, transparent 70%)", filter: "blur(8px)" }} />

      {/* Quote overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl md:text-3xl text-white/90 max-w-xl leading-relaxed drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]"
          style={{ textShadow: "0 0 40px hsl(25 90% 48% / 0.35), 0 2px 8px rgba(0,0,0,0.8)" }}
        >
          "Nothing lasts forever,<br />
          <span style={{ color: "hsl(25 90% 65%)" }}>not even the dark."</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-mono text-xs tracking-[0.4em] uppercase mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ color: "hsl(25 90% 65% / 0.7)" }}
        >
          Nothing Lasts Forever — Estranged
        </motion.p>
      </div>
    </div>
  );
};

const FrequenciesSection = () => {
  const [active, setActive] = useState(0);
  const track = SPOTIFY_TRACKS[active];

  return (
    <section className="z-10 relative bg-background/50 backdrop-blur-3xl border-y border-white/5 py-32 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif text-glow mb-4 flex items-center gap-6">
            Frequencies
            <Disc3 className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: '4s' }} />
          </h2>
          <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-16">
            All-time top tracks · via Spotify
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Featured album art card */}
          <FadeIn delay={0.2} className="lg:col-span-5">
            <motion.a
              key={active}
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden group block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden mb-8 shadow-2xl relative">
                  <img
                    src={track.albumArt}
                    alt={track.album}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
                      <Play className="w-3 h-3 fill-current" /> Open on Spotify
                    </span>
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-foreground truncate">{track.name}</h4>
                <p className="text-primary font-mono text-sm tracking-widest mt-1 truncate">{track.artist}</p>
                <p className="text-muted-foreground/50 font-mono text-xs mt-1 truncate">{track.album}</p>
              </div>
            </motion.a>
          </FadeIn>

          {/* Tracklist */}
          <FadeIn delay={0.4} className="lg:col-span-7">
            <div className="space-y-2">
              {SPOTIFY_TRACKS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                    active === i
                      ? "bg-primary/10 border border-primary/30 text-primary"
                      : "hover:bg-white/5 text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src={t.albumArt} alt={t.album} className="w-full h-full object-cover" />
                    {active === i && (
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                        <Disc3 className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '2s' }} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base truncate">{t.name}</p>
                    <p className="font-mono text-xs opacity-60 truncate mt-0.5">{t.artist}</p>
                  </div>
                  <span className="font-mono text-xs opacity-30 group-hover:opacity-70 transition-opacity flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-secondary hover:text-secondary-foreground font-mono tracking-widest text-sm uppercase transition-colors group"
            >
              Open Spotify
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const PoetryArchive = () => {
  const [active, setActive] = useState(0);
  const poem = POEMS[active];

  return (
    <section className="relative z-10 py-24 bg-background overflow-hidden">
      <VineDecoration className="top-0 right-0 h-full w-24 text-primary opacity-10" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-mono text-primary text-sm uppercase tracking-widest">Estranged — Poetry Archive</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Poem selector */}
          <FadeIn>
            <nav className="flex flex-col gap-1" aria-label="Poem list">
              {POEMS.map((p, i) => (
                <button
                  key={i}
                  data-testid={`poem-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={`text-left px-5 py-4 rounded-xl font-serif text-lg transition-all duration-300 ${
                    active === i
                      ? 'bg-primary/10 border border-primary/30 text-primary text-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {p.title}
                  {p.excerpt && (
                    <span className="block font-mono text-[10px] tracking-widest uppercase mt-1 opacity-50">excerpt</span>
                  )}
                </button>
              ))}
            </nav>
          </FadeIn>

          {/* Poem display */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-10 md:p-14 relative overflow-hidden min-h-[340px]"
            data-testid="poem-display"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="font-serif text-3xl md:text-4xl text-glow mb-10">{poem.title}</h3>
            <div className="space-y-1">
              {poem.lines.map((line, i) =>
                line === '' ? (
                  <div key={i} className="h-5" />
                ) : (
                  <p key={i} className="font-serif text-lg md:text-xl text-foreground/85 leading-relaxed">
                    {line}
                  </p>
                )
              )}
            </div>
            {poem.excerpt && (
              <p className="font-mono text-xs text-muted-foreground/40 uppercase tracking-widest mt-10">— excerpt</p>
            )}
            <p className="font-mono text-xs text-primary/30 uppercase tracking-widest mt-2">
              Aiyana Noelani — <em>Estranged</em>
            </p>

            {/* Navigation arrows */}
            <div className="flex gap-3 mt-10">
              <button
                data-testid="poem-prev"
                onClick={() => setActive((a) => (a - 1 + POEMS.length) % POEMS.length)}
                className="p-3 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="Previous poem"
              >
                <Rewind className="w-4 h-4" />
              </button>
              <button
                data-testid="poem-next"
                onClick={() => setActive((a) => (a + 1) % POEMS.length)}
                className="p-3 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="Next poem"
              >
                <FastForward className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative w-full bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* SVG chroma-key filter — makes logo JPEG black bg truly transparent via luminance→alpha */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="ivy-logo-chroma" colorInterpolationFilters="sRGB">
            {/* A' = 3R + 3G + 3B - 1·A  →  black(0,0,0)→A=−1→0, any bright pixel→A>0 */}
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  3 3 3 -1 0" />
          </filter>
        </defs>
      </svg>
      <div className="bg-noise" />

      {/* Hero Section */}
      <Section className="overflow-hidden items-center justify-center p-0 m-0">
        {/* Parallax photo */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <img src={heroBg} alt="Ancient desert sage" className="w-full h-full object-cover object-center opacity-55" />
          {/* Warm sepia grade */}
          <div className="absolute inset-0 bg-[hsl(28_60%_12%/0.55)] mix-blend-multiply z-10" />
          {/* Bottom fade to background */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
        </motion.div>

        {/* Flower of Life — large, slowly rotating behind logo */}
        <div className="absolute inset-0 flex items-center justify-center z-[8] pointer-events-none">
          <FlowerOfLife className="w-[600px] h-[600px] text-primary opacity-[0.06] animate-spin-slow sacred-glow" />
        </div>

        {/* Edge-only vignette — keep center bright so screen-blend erases the black JPEG bg */}
        <div className="absolute inset-0 z-[9] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 72% 68% at 50% 48%, transparent 35%, rgba(8,4,2,0.65) 80%, rgba(8,4,2,0.92) 100%)" }} />

        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-xl animate-float"
          >
            <div className="logo-container animate-bio-pulse">
              <img src={ivyLogo} alt="IvyVision Logo" className="logo-blend" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-primary/60 uppercase">Ancient · Gnostic · Untamed</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-4 text-primary/60"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono">Descend</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Portal / Intro */}
      <Section className="z-10 bg-swirl bg-gradient-to-br from-background via-muted/10 to-background relative">
        <VineDecoration className="top-0 left-0 h-full w-32 -translate-x-1/2" />
        <VineDecoration className="bottom-0 right-0 h-full w-32 translate-x-1/2 rotate-180" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-glow mb-8 leading-tight">
              Between the last ember <br className="hidden md:block"/>
              of sunset & the depth <br className="hidden md:block"/>
              of midnight.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
                I am IvyVision. A voice from the undertow. Where urban concrete cracks and bleeds bioluminescent light. This is my digital sanctuary—a space for dark poetry, solarpunk visions, and frequencies drawn from the harbor's floor.
              </p>
              
              <div className="flex-1 w-full glass-panel p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-4">Latest Transmission</h3>
                <p className="font-serif text-2xl italic text-foreground/90 leading-relaxed">
                  "So I'm revoking your privilege to witness my life —
                  as I forge my way forward, resilient and remarkable."
                </p>
                <p className="font-mono text-xs text-primary/40 uppercase tracking-widest mt-6">— Indifference, <em>Estranged</em></p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Oracle / Lore — lost archive plate */}
      <Section className="z-10 bg-background overflow-hidden relative">
        {/* Metatron's Cube watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <MetatronsCube className="w-[700px] h-[700px] text-primary opacity-[0.04] sacred-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Archive plate portrait — tilted, aged */}
            <FadeIn>
              <div className="relative">
                {/* Shadow plate beneath */}
                <div className="absolute inset-0 translate-x-4 translate-y-5 bg-black/50 rounded-sm" />
                <div className="relative archive-frame" style={{ transform: "rotate(-2deg)" }}>
                  <img src={profileBg} alt="Oracle" className="w-full aspect-[3/4] object-cover object-top rounded-sm" />
                  {/* Warm sepia grade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(22_55%_5%)] via-transparent to-transparent rounded-sm" />
                  {/* Gold frame border */}
                  <div className="absolute inset-0 border border-primary/30 rounded-sm pointer-events-none" />
                  {/* Archive label */}
                  <div className="absolute bottom-6 left-6">
                    <div className="font-mono text-[10px] tracking-[0.4em] text-primary/70 uppercase">Oracle Archives · Vol. I</div>
                  </div>
                  {/* Corner geometry marks */}
                  {[["top-2 left-2","border-t border-l"],["top-2 right-2","border-t border-r"],["bottom-2 left-2","border-b border-l"],["bottom-2 right-2","border-b border-r"]].map(([pos,border],i) => (
                    <div key={i} className={`absolute ${pos} w-4 h-4 border-primary/50 ${border}`} />
                  ))}
                </div>
                {/* Vesica Piscis ornament below */}
                <VesicaPiscis className="w-32 text-primary/20 mx-auto mt-4 sacred-glow" />
              </div>
            </FadeIn>

            {/* Text */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-[1px] bg-primary/60" />
                  <span className="text-primary/80 font-mono tracking-[0.35em] uppercase text-xs">The Oracle</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif text-glow mb-8 leading-[0.9]">
                  Ancient<br/>Gypsy<br/>Sage.
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6 text-base text-muted-foreground/80 font-light leading-relaxed border-l border-primary/20 pl-6">
                  <p>
                    She walks where the old maps end. Keeper of forgotten dialects, translator of wind and stone. Her art is a palimpsest — ancient scripture beneath modern ink, each layer revealing what was never truly buried.
                  </p>
                  <p>
                    The desert remembers every footprint. The forest holds every whisper. She is both archive and archivist — the one who was there and the one who writes it down.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-10 flex items-center gap-3">
                  <SacredEye className="w-10 h-10 text-primary/40 sacred-glow" />
                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-primary/50 uppercase">Gnosis</div>
                    <div className="font-serif text-sm text-muted-foreground/60 italic mt-0.5">"Know thyself, and thou shalt know the universe."</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Poetry Centerpiece — "Reaper" excerpt */}
      <Section className="z-10 py-32 relative overflow-hidden bg-background">
        <VineDecoration className="top-20 left-10 h-[600px] w-48 text-secondary" />
        <VineDecoration className="bottom-20 right-10 h-[600px] w-48 text-secondary rotate-180" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <FadeIn>
            <Radio className="w-8 h-8 text-secondary mx-auto mb-8 opacity-50" />
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-12 text-transparent bg-clip-text bg-gradient-to-br from-[hsl(25_90%_75%)] via-primary to-secondary drop-shadow-[0_0_15px_rgba(0,229,209,0.3)] italic">
              <span className="not-italic opacity-40 text-3xl block mb-6 font-mono tracking-widest lowercase text-white/40 drop-shadow-none">"</span>
              Clenched in the gnarled fingers of the trees,<br/>
              bound upon a bed of thistled vines —<br/>
              I am a sacrifice to these hallows,<br/>
              I am the compost they will drink.
              <span className="not-italic opacity-40 text-3xl block mt-6 font-mono tracking-widest lowercase text-white/40 drop-shadow-none">"</span>
            </h3>
            <p className="font-mono text-sm tracking-[0.4em] text-secondary uppercase bg-black/50 inline-block px-4 py-2 border border-secondary/20">Reaper — <em>Estranged</em></p>
          </FadeIn>
        </div>
      </Section>

      {/* Poetry Archive */}
      <PoetryArchive />

      {/* Dusk photograph — cinematic palette bridge */}
      <DuskDivider />

      {/* Frequencies — real Spotify top tracks */}
      <FrequenciesSection />

      {/* The Relics — vintage photo archive spread */}
      <section className="z-10 py-32 bg-background relative overflow-hidden">
        {/* Sacred Eye watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <SacredEye className="w-[500px] h-[500px] text-primary opacity-[0.04] sacred-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <FadeIn>
            <div className="flex items-center gap-5 mb-20">
              <div className="h-[1px] w-8 bg-primary/50" />
              <span className="text-primary font-mono tracking-[0.4em] uppercase text-xs">The Relics · Found Archive</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
              <span className="font-mono text-[10px] text-primary/30 tracking-widest">MCMXCIX</span>
            </div>
          </FadeIn>

          {/* Overlapping vintage photo spread */}
          <div className="relative flex flex-wrap justify-center gap-6 md:gap-0 md:block min-h-[600px]">
            {[
              { img: heroBg,    label: "Desert Sage",       sub: "Plate I",   rot: "-2deg",  pos: "md:absolute md:top-0 md:left-[5%]   md:w-[38%]" },
              { img: loreBg,    label: "Smoke Oracle",      sub: "Plate II",  rot: "1.5deg", pos: "md:absolute md:top-16 md:left-[30%] md:w-[32%]" },
              { img: profileBg, label: "The Wanderer",      sub: "Plate III", rot: "-1deg",  pos: "md:absolute md:top-8  md:right-[5%] md:w-[36%]" },
              { img: musicBg,   label: "Dried Rose",        sub: "Plate IV",  rot: "2.5deg", pos: "md:absolute md:bottom-0 md:left-[18%] md:w-[28%]" },
            ].map(({ img, label, sub, rot, pos }, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`relative group cursor-crosshair ${pos}`} style={{ zIndex: i + 1 }}>
                  {/* Shadow plate */}
                  <div className="absolute inset-0 translate-x-3 translate-y-4 bg-black/60" />
                  <div
                    className="relative archive-frame transition-all duration-500 group-hover:scale-[1.02]"
                    style={{ transform: `rotate(${rot})`, transformOrigin: "center bottom" }}
                  >
                    <img src={img} alt={label} className="w-full aspect-[3/4] object-cover" />
                    {/* Gold frame border */}
                    <div className="absolute inset-0 border border-primary/25 pointer-events-none" />
                    {/* Corner marks */}
                    {(["top-2 left-2 border-t border-l","top-2 right-2 border-t border-r","bottom-2 left-2 border-b border-l","bottom-2 right-2 border-b border-r"] as const).map((cls, j) => (
                      <div key={j} className={`absolute ${cls} w-3 h-3 border-primary/50`} />
                    ))}
                    {/* Label strip */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                      <div className="font-serif text-sm text-primary/90 text-glow">{label}</div>
                      <div className="font-mono text-[9px] tracking-[0.35em] text-primary/40 uppercase mt-0.5">{sub}</div>
                    </div>
                    {/* Gold shimmer on hover */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctuary / Connect — ancient temple gate */}
      <Section className="z-10 bg-background overflow-hidden relative">
        {/* Photo backdrop */}
        <div className="absolute inset-0 opacity-25">
          <img src={connectBg} alt="Portal" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background" />
          <div className="absolute inset-0 bg-[hsl(28_60%_10%/0.5)] mix-blend-multiply" />
        </div>

        {/* FlowerOfLife watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FlowerOfLife className="w-[800px] h-[800px] text-primary opacity-[0.035] sacred-glow animate-spin-slow" style={{ animationDirection: "reverse" } as React.CSSProperties} />
        </div>

        <div className="max-w-3xl mx-auto px-6 w-full text-center relative z-20">
          <FadeIn>
            {/* Sacred Eye sigil */}
            <div className="flex justify-center mb-8">
              <SacredEye className="w-24 h-24 text-primary/50 sacred-glow" />
            </div>

            {/* Decorative rule */}
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-primary/40 uppercase">Sacred Entrance</span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-glow mb-4">Enter the Sanctuary</h2>
            <p className="font-mono text-xs tracking-[0.4em] text-primary/40 uppercase mb-10">
              ✦ Lost Archive · Open Gate ✦
            </p>
            <p className="text-lg text-muted-foreground/70 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Join the inner circle. Receive dispatches from the archive — secret tracks, poetry drops, and transmissions from the ancient edge.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-14" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@sanctuary.here"
                className="flex-1 bg-[hsl(22_50%_8%/0.8)] border border-primary/20 rounded-none px-6 py-4 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-all font-mono text-sm"
              />
              <button className="bg-primary text-background font-mono font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-none hover:bg-primary/80 transition-colors hover:shadow-[0_0_24px_hsl(43_72%_48%/0.4)]">
                Initiate
              </button>
            </form>

            {/* Ornamental divider */}
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="h-[1px] flex-1 bg-primary/15" />
              <span className="text-primary/30 text-xs">✦</span>
              <div className="h-[1px] flex-1 bg-primary/15" />
            </div>

            <div className="flex items-center justify-center gap-6">
              {[
                { Icon: Instagram, href: "https://instagram.com/ivy.coconuts" },
                { Icon: Twitter,   href: "#" },
                { Icon: Youtube,   href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="p-4 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground/60 hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-6 left-0 w-full text-center">
          <p className="font-mono text-[10px] text-primary/20 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} IvyVision · The Archive is Alive
          </p>
        </div>
      </Section>
    </div>
  );
}
