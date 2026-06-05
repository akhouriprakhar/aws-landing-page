import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Agenda from "@/components/sections/Agenda";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

import { Terminal, ArrowRight, Code2, Cpu, CloudLightning } from "lucide-react";

// Pre-calculated matrix to avoid hydration mismatch
const floatingConfigs = [
  { symbol: '{ }', left: 10, duration: 25, delay: 0, size: 24 },
  { symbol: '< />', left: 25, duration: 18, delay: 5, size: 16 },
  { symbol: 'AWS', left: 85, duration: 22, delay: 2, size: 30 },
  { symbol: '[ ]', left: 45, duration: 20, delay: 10, size: 14 },
  { symbol: 'S3', left: 70, duration: 28, delay: 7, size: 20 },
  { symbol: '</>', left: 15, duration: 15, delay: 12, size: 18 },
  { symbol: '()', left: 55, duration: 24, delay: 4, size: 22 },
  { symbol: 'EC2', left: 35, duration: 26, delay: 9, size: 28 },
  { symbol: '/>', left: 90, duration: 19, delay: 15, size: 16 },
  { symbol: '{ }', left: 65, duration: 21, delay: 1, size: 20 },
  { symbol: 'RDS', left: 5, duration: 23, delay: 8, size: 24 },
  { symbol: '< />', left: 80, duration: 17, delay: 11, size: 14 },
];

const FloatingSymbols = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {floatingConfigs.map((config, i) => (
      <div 
        key={i}
        className="absolute bottom-[-10%] text-[#FF9900] font-mono font-bold animate-float whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,153,0,0.5)]"
        style={{
          left: `${config.left}%`,
          animationDuration: `${config.duration}s`,
          animationDelay: `${config.delay}s`,
          fontSize: `${config.size}px`
        }}
      >
        {config.symbol}
      </div>
    ))}
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[#0B1120] min-h-screen">
        
        {/* --- 1. HERO SECTION --- */}
        <main className="relative flex items-center justify-center overflow-hidden pt-32 pb-32">
          
          {/* Injecting the Floating Matrix here */}
          <FloatingSymbols />

          {/* Core Depth Effects - Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9900]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          
          {/* Masked Grid - Fades out at the edges */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] z-0"></div>

          {/* Floating Tech Badges (Atmosphere) */}
          <div className="absolute top-1/4 left-[15%] hidden lg:flex items-center gap-2 opacity-30 font-mono text-xs text-[#FF9900] border border-[#FF9900]/20 bg-[#FF9900]/5 px-3 py-1.5 rounded-sm backdrop-blur-sm animate-pulse z-0">
            <Cpu size={14} /> {'[ EC2_COMPUTE ]'}
          </div>
          <div className="absolute bottom-1/3 right-[15%] hidden lg:flex items-center gap-2 opacity-30 font-mono text-xs text-blue-400 border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 rounded-sm backdrop-blur-sm animate-[bounce_4s_infinite] z-0">
            <CloudLightning size={14} /> {'< SERVERLESS_FN />'}
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-10">
            
            <div className="flex items-center gap-3 mb-8 px-5 py-2 border border-[#FF9900]/40 bg-[#FF9900]/10 rounded-sm backdrop-blur-md shadow-[0_0_20px_rgba(255,153,0,0.15)] hover:bg-[#FF9900]/20 transition-colors cursor-default">
              <Terminal size={16} className="text-[#FF9900]" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#FF9900] uppercase font-bold">
                System Initialization Complete
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-white drop-shadow-lg leading-tight">
              Architect the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-yellow-400 to-[#FF9900] bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                Cloud Future.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 max-w-2xl font-mono leading-relaxed mb-12 drop-shadow-md">
              {'>'} We are the AWS Student Builder Group at SSTC. Join us to build, deploy, and scale enterprise-grade applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[#FF9900] text-black px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <Code2 size={18} className="stroke-[2.5]" />
                <span>START_BUILDING</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#events" 
                className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-white/20 text-slate-300 px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <span>VIEW_EVENTS</span>
              </a>
            </div>
          </div>
        </main>

        <About />
        <Events />
        <Agenda />
        <Gallery />
        <Team />
        <Contact />

      </div>

      <Footer />
    </>
  );
}