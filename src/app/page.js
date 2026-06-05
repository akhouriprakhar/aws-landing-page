"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Agenda from "@/components/sections/Agenda";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";
import { Terminal, ArrowRight, Code2, Cpu, CloudLightning } from "lucide-react";

// Original fallback (kept for safety)
const defaultTelemetry = [
  { text: '{ }', left: 8, duration: 24, delay: 0, size: 22 },
  { text: '< />', left: 22, duration: 16, delay: 4, size: 14 },
  { text: 'AWS', left: 87, duration: 20, delay: 1, size: 28 },
  { text: '[ ]', left: 42, duration: 19, delay: 8, size: 12 },
  { text: 'S3', left: 73, duration: 26, delay: 5, size: 18 },
  { text: '()', left: 52, duration: 22, delay: 3, size: 20 },
  { text: 'EC2', left: 33, duration: 24, delay: 7, size: 26 },
  { text: '/>', left: 91, duration: 17, delay: 12, size: 14 },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particleTelemetry, setParticleTelemetry] = useState(defaultTelemetry);

  // Cursor glow tracking
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fetch dynamic JSON (replace path with your API or static file)
  useEffect(() => {
    fetch("/data/floatingSymbols.json")
      .then((res) => res.json())
      .then((data) => setParticleTelemetry(data))
      .catch(() => setParticleTelemetry(defaultTelemetry)); // fallback
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#0B1120] min-h-screen relative overflow-hidden">
        {/* Cursor Glow */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 153, 0, 0.04), transparent 40%)`
          }}
        />

        {/* HERO SECTION */}
        <main className="relative flex items-center justify-center overflow-hidden pt-32 pb-32 min-h-[90vh]">
          
          {/* Floating Telemetry */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {particleTelemetry.map((p, idx) => (
              <div
                key={idx}
                className="matrix-particle absolute bottom-[-5%] text-[#FF9900] font-mono font-bold whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,153,0,0.4)]"
                style={{ left: `${p.left}%`, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`, fontSize: `${p.size}px` }}
              >
                {p.text}
              </div>
            ))}
          </div>

          {/* Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9900]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] z-0"></div>

          {/* HERO CONTENT */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-10">
            
            <FadeIn delay={100}>
              <div className="flex items-center gap-3 mb-8 px-5 py-2 border border-[#FF9900]/40 bg-[#FF9900]/10 rounded-sm backdrop-blur-md shadow-[0_0_20px_rgba(255,153,0,0.15)] transition-colors cursor-default">
                <Terminal size={16} className="text-[#FF9900]" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#FF9900] uppercase font-bold">
                  System Initialization Complete
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-white drop-shadow-lg leading-tight">
                Architect the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-yellow-400 to-[#FF9900] bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                  Cloud Future.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={500}>
              <p className="text-base md:text-lg text-slate-400 max-w-2xl font-mono leading-relaxed mb-12 drop-shadow-md">
                {'>'} We are the AWS Student Builder Group at SSTC. Join us to build, deploy, and scale enterprise-grade applications.
              </p>
            </FadeIn>

            <FadeIn delay={700}>
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[#FF9900] text-black px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:bg-white hover:shadow-[0_0_30px_rgba(255,153,0,0.4)] transition-all duration-300 text-center scale-100 hover:scale-105 active:scale-95">
                  <Code2 size={18} className="stroke-[2.5]" />
                  <span>START_BUILDING</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="#events" className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-white/20 text-slate-300 px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 text-center scale-100 hover:scale-105 active:scale-95">
                  <span>VIEW_EVENTS</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </main>

        {/* DYNAMIC STACK WITH SCROLL REVEALS */}
        <FadeIn><About /></FadeIn>
        <FadeIn><Events /></FadeIn>
        <FadeIn><Agenda /></FadeIn>
        <FadeIn><Gallery /></FadeIn>
        <FadeIn><Team /></FadeIn>
        <FadeIn><Contact /></FadeIn>

      </div>

      <Footer />
    </>
  );
}