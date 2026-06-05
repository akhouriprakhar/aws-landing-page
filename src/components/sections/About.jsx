"use client";

import { useState, useEffect, useRef } from "react";
import { Code2, Trophy, Smartphone, Rocket, ShieldAlert, Cpu, Orbit } from "lucide-react";

// Reusable Speedometer Logic Component
const AnimatedNumber = ({ value, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // Total duration: 2 seconds
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              clearInterval(timer);
              setCount(value);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default function About() {
  return (
    <section id="about" className="relative py-28 z-10 max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Structural Spotlight Backing */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Section Header */}
      <div className="mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF9900] to-transparent"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-[0.25em] uppercase font-bold">
            SYSTEM_BOOT: ABOUT
          </h2>
        </div>
        <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
          Initialize Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500">
            Tech Career.
          </span>
        </h3>
      </div>

      {/* The Upgraded Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr relative z-10">
        
        {/* Box 1: Wide Architecture Matrix Showcase */}
        <div className="md:col-span-2 rounded-sm bg-white/[0.02] border border-white/5 p-8 md:p-10 backdrop-blur-md hover:border-[#FF9900]/40 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] opacity-60 pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FF9900]/5 rounded-full blur-[80px] group-hover:bg-[#FF9900]/10 transition-all duration-500"></div>
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 bg-[#FF9900]/10 border border-[#FF9900]/20 rounded-sm">
                <Rocket className="text-[#FF9900] stroke-[1.5]" size={28} />
              </div>
              <span className="font-mono text-[10px] text-slate-500 tracking-widest">[ CLOUD_ENG_v1.0 ]</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Production-Grade Architecture</h4>
            <p className="text-slate-400 leading-relaxed font-mono text-xs md:text-sm max-w-xl relative z-10">
              We skip standard textbook theory. Our ecosystem focuses directly on deploying live cloud infrastructures, processing serverless computing matrices, and debugging production routing layers. We engineer developers who solve actual enterprise challenges.
            </p>
          </div>
          
          {/* Live Authority Statistics Block with Speedometer Counters */}
          <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/5 relative z-10">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                <AnimatedNumber value={500} suffix="+" />
              </p>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">NODE_MEMBERS</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-[#FF9900] tracking-tight drop-shadow-[0_0_8px_rgba(255,153,0,0.5)]">
                <AnimatedNumber value={12} suffix="+" />
              </p>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">LAUNCHED_PROJECTS</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                <AnimatedNumber value={24} suffix="/7" />
              </p>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">DEV_UPTIME</p>
            </div>
          </div>
        </div>

        {/* Box 2: Competitions & Sprints Component */}
        <div className="md:col-span-1 rounded-sm bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 p-8 backdrop-blur-md hover:border-[#FF9900]/40 hover:from-[#FF9900]/5 transition-all duration-500 flex flex-col justify-between relative group">
          <div className="absolute top-4 right-4 text-slate-700 font-mono text-[10px] group-hover:text-[#FF9900]/30 transition-colors">0x7F</div>
          <div>
            <div className="w-fit p-3 bg-white/5 border border-white/10 rounded-sm mb-8 group-hover:border-[#FF9900]/20 transition-colors">
              <Trophy className="text-[#FF9900] stroke-[1.5]" size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Hackathons & Sprints</h4>
            <p className="text-slate-400 leading-relaxed font-mono text-xs md:text-sm">
              Form competitive internal developer clusters, sync with regional tech challenges, and compile functional software solutions within rapid timeframes.
            </p>
          </div>
          <div className="font-mono text-[10px] text-slate-500 border-t border-white/5 pt-4 mt-6">
            STATUS: PIPELINE_READY
          </div>
        </div>

        {/* Box 3: Performance Tuning & Interface Systems */}
        <div className="md:col-span-1 rounded-sm bg-white/[0.02] border border-white/5 p-8 backdrop-blur-md hover:border-blue-400/40 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-all duration-500"></div>
          <div>
            <div className="w-fit p-3 bg-blue-500/5 border border-blue-500/10 rounded-sm mb-8">
              <Smartphone className="text-blue-400 stroke-[1.5]" size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Mobile & UX Systems</h4>
            <p className="text-slate-400 leading-relaxed font-mono text-xs md:text-sm relative z-10">
              Design zero-friction mobile contact components and fluid telemetry dashboards. Build frontend viewports that users interact with flawlessly.
            </p>
          </div>
          <div className="font-mono text-[10px] text-blue-400/40 border-t border-white/5 pt-4 mt-6">
            OPTIMIZATION: 99.4%
          </div>
        </div>

        {/* Box 4: Placement Ecosystem Showcase */}
        <div className="md:col-span-2 rounded-sm bg-white/[0.02] border border-white/5 p-8 md:p-10 backdrop-blur-md hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none"></div>
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                <Code2 className="text-slate-300 stroke-[1.5]" size={28} />
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">LIVE_CONNECTION</span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Enterprise Infrastructure Ready</h4>
            <p className="text-slate-400 leading-relaxed font-mono text-xs md:text-sm max-w-2xl">
              From managing local optimization projects to matching students directly with top-tier technology internship networks. We supply the code analysis environments, structural design feedback loops, and advanced stack operations needed to instantly pass production engineering screens.
            </p>
          </div>
          
          <div className="font-mono text-[10px] text-slate-600 flex gap-6 border-t border-white/5 pt-4 mt-6">
            <span>[ INT_COL_SYSTEM: ONLINE ]</span>
            <span>[ AUDIT: CONFIRMED ]</span>
          </div>
        </div>

      </div>
    </section>
  );
}