import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ivyLogo from "@assets/Untitled_design_1784941575772.jpeg";
// Note: Assuming generated images are available in src/assets
import heroBg from "../assets/hero-bg.jpg";
import loreBg from "../assets/lore.jpg";
import musicBg from "../assets/music.jpg";
import connectBg from "../assets/connect.jpg";

import { Play, Pause, FastForward, Rewind, Disc3, Radio, ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react';

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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative w-full bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="bg-noise" />

      {/* Hero Section */}
      <Section className="overflow-hidden items-center justify-center p-0 m-0">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
          <img src={heroBg} alt="Bioluminescent harbor" className="w-full h-full object-cover object-center opacity-40" />
        </motion.div>
        
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-2xl animate-float relative"
          >
            <div className="logo-container animate-bio-pulse">
              <img 
                src={ivyLogo} 
                alt="IvyVision Logo" 
                className="logo-blend"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-4 text-primary/70"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-mono">Descend</span>
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
                <p className="font-serif text-2xl italic text-foreground/90">"Neon bleeding into the tide, we are the ghosts of a drowned city learning to breathe water."</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Lore */}
      <Section className="z-10 bg-background overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img src={loreBg} alt="Lore background" className="w-full h-full object-cover object-left-top mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-secondary" />
                  <span className="text-secondary font-mono tracking-widest uppercase text-sm">The Oracle</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif text-glow-secondary mb-8">
                  Street <br/> Mysticism.
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="space-y-6 text-lg text-muted-foreground/80 font-light leading-relaxed">
                  <p>
                    I trace the ley lines of the city grid, finding where the ancient magic pulses beneath asphalt. The graffiti tags are sigils. The streetlights are dying stars.
                  </p>
                  <p>
                    We built concrete over the wild, but the wild is reclaiming us. Solarpunk isn't just an aesthetic; it's a prophecy. The vines will break the walls. The oceans will reclaim the shores. My art is a documentation of this beautiful collapse.
                  </p>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.4}>
              <div className="relative aspect-square md:aspect-[4/5] rounded-t-full overflow-hidden border border-white/10 box-glow">
                <img src={loreBg} alt="Oracle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-background to-transparent">
                  <div className="font-serif text-3xl text-primary text-glow">Genesis</div>
                  <div className="font-mono text-xs text-primary/60 tracking-widest uppercase mt-2">Archive 01</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Poetry */}
      <Section className="z-10 py-32 relative overflow-hidden bg-background">
        <VineDecoration className="top-20 left-10 h-[600px] w-48 text-secondary" />
        <VineDecoration className="bottom-20 right-10 h-[600px] w-48 text-secondary rotate-180" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <FadeIn>
            <Radio className="w-8 h-8 text-secondary mx-auto mb-8 opacity-50" />
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.8] mb-12 text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-secondary drop-shadow-[0_0_15px_rgba(0,229,209,0.3)] rotate-[-2deg] skew-x-[-5deg]">
              <span className="opacity-50 text-3xl align-top block mb-4 tracking-widest font-serif lowercase italic text-white/50 drop-shadow-none rotate-[2deg] skew-x-[5deg]">"</span>
              We traded the moon for neon,<br/>
              and wonder why the tides<br/>
              no longer answer to us.
              <span className="opacity-50 text-3xl align-bottom block mt-4 tracking-widest font-serif lowercase italic text-white/50 drop-shadow-none rotate-[2deg] skew-x-[5deg]">"</span>
            </h3>
            <p className="font-mono text-sm tracking-[0.4em] text-secondary uppercase bg-black/50 inline-block px-4 py-2 border border-secondary/20">Excerpt from 'Concrete Tides'</p>
          </FadeIn>
        </div>
      </Section>

      {/* Music / Discography */}
      <Section className="z-10 relative bg-background/50 backdrop-blur-3xl border-y border-white/5 py-32">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img src={musicBg} alt="Visualizer" className="w-full h-full object-cover mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-glow mb-16 flex items-center gap-6">
              Frequencies
              <Disc3 className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: '4s' }} />
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Player UI */}
            <FadeIn delay={0.2} className="lg:col-span-5">
              <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-8 shadow-2xl relative">
                    <img src={musicBg} alt="Album Art" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                    <div className="absolute inset-0 border-4 border-background/20 mix-blend-overlay rounded-2xl pointer-events-none" />
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-2xl font-serif font-bold text-foreground">Bioluminescent Decay</h4>
                    <p className="text-primary font-mono text-sm tracking-widest mt-1">EP • 2024</p>
                  </div>
                  
                  {/* Fake Progress */}
                  <div className="w-full h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
                    <div className="h-full bg-primary w-1/3 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(0,229,209,1)]" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="p-3 text-white/50 hover:text-white transition-colors">
                      <Rewind className="w-6 h-6" />
                    </button>
                    <button className="p-5 bg-primary text-background rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,209,0.5)] transition-all">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                    <button className="p-3 text-white/50 hover:text-white transition-colors">
                      <FastForward className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Tracklist */}
            <FadeIn delay={0.4} className="lg:col-span-7">
              <div className="space-y-2">
                {[
                  { num: "01", title: "Submerged Overpass", time: "4:12" },
                  { num: "02", title: "Neon Vines (ft. Cryptid)", time: "3:45", active: true },
                  { num: "03", title: "Oracle of the Harbor", time: "5:30" },
                  { num: "04", title: "Bruised Magenta Sky", time: "2:58" },
                  { num: "05", title: "The Last Ember", time: "6:15" },
                ].map((track) => (
                  <div 
                    key={track.num}
                    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      track.active 
                        ? "bg-primary/10 border border-primary/30 text-primary" 
                        : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-sm w-12 opacity-50">{track.num}</span>
                    <span className="font-serif text-lg flex-1">{track.title}</span>
                    <span className="font-mono text-sm opacity-50">{track.time}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 flex items-center gap-3 text-secondary hover:text-secondary-foreground font-mono tracking-widest text-sm uppercase transition-colors group">
                Listen on all platforms 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Visuals / Artifacts */}
      <Section className="z-10 py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-secondary font-mono tracking-widest uppercase text-sm">Artifacts</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-secondary/50 to-transparent" />
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[heroBg, loreBg, musicBg].map((img, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group relative aspect-[3/4] rounded-sm overflow-hidden border border-white/5 cursor-crosshair">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10" />
                  <img src={img} alt={`Artifact 0${i + 1}`} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background/80 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-mono text-xs text-primary/70 uppercase tracking-widest">Vision {String(i + 1).padStart(2, '0')}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Connect / Footer */}
      <Section className="z-10 bg-background overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <img src={connectBg} alt="Portal" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-20">
          <FadeIn>
            <div className="inline-block mb-6 p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <img src={ivyLogo} alt="Mark" className="w-16 h-16 logo-blend" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-glow mb-6">Enter the Sanctuary</h2>
            <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Join the inner circle. Receive dispatches, secret tracks, and coordinate drops for underground poetry readings.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-16" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@frequency.com" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
              />
              <button className="bg-primary text-background font-mono font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white transition-colors hover:shadow-[0_0_30px_rgba(0,229,209,0.5)]">
                Initiate
              </button>
            </form>
            
            <div className="flex items-center justify-center gap-8">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-4 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-6 left-0 w-full text-center">
          <p className="font-mono text-xs text-muted-foreground/30 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} IvyVision. The Tide is Rising.
          </p>
        </div>
      </Section>
    </div>
  );
}
