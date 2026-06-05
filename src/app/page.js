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

// Enriched Telemetry with actual AWS Cloud infrastructure terms
const particleTelemetry = [
  { text: '{ REST_API }', left: 10, duration: 22, delay: 0, size: 16 },
  { text: '<LAMBDA />', left: 25, duration: 18, delay: 4, size: 18 },
  { text: 'AWS_CLOUD', left: 85, duration: 24, delay: 1, size: 24 },
  { text: '[ EC2_INSTANCE ]', left: 45, duration: 20, delay: 8, size: 14 },
  { text: 'S3_BUCKET', left: 75, duration: 28, delay: 5, size: 20 },
  { text: '() => deploy', left: 55, duration: 22, delay: 3, size: 16 },
  { text: 'DYNAMO_DB', left: 35, duration: 26, delay: 7, size: 22 },
  { text: 'ROUTE_53', left: 90, duration: 19, delay: 12, size: 14 },
  { text: 'VPC_PEERING', left: 15, duration: 25, delay: 2, size: 18 },
  { text: 'IAM_POLICY', left: 65, duration: 21, delay: 9, size: 16 },
  { text: 'SERVERLESS', left: 80, duration: 23, delay: 6, size: 20 }
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Detect if mouse is hovering over a clickable element to expand the cursor
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('select') || target.closest('input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* CUSTOM GLOBAL CURSOR */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] hidden md:block overflow-hidden"
      >
        {/* The solid core dot */}
        <div 
          className="absolute w-2 h-2 bg-[#FF9900] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#FF9900]"
          style={{ 
            left: `${mousePosition.x}px`, 
            top: `${mousePosition.y}px`,
            transition: 'width 0.2s, height 0.2s',
            width: isHovering ? '4px' : '8px',
            height: isHovering ? '4px' : '8px',
          }}
        ></div>
        {/* The trailing outer ring */}
        <div 
          className="absolute border border-[#FF9900]/50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
          style={{ 
            left: `${mousePosition.x}px`, 
            top: `${mousePosition.y}px`,
            width: isHovering ? '40px' : '24px',
            height: isHovering ? '40px' : '24px',
            backgroundColor: isHovering ? 'rgba(255, 153, 0, 0.1)' : 'transparent'
          }}
        ></div>
      </div>

      <Navbar />

      {/* Adding cursor-none to hide default pointer on desktop, relying on our custom cursor */}
      <div className="bg-[#0B1120] min-h-screen relative overflow-hidden md:cursor-none">
        
        {/* INTERACTIVE CURSOR GLOW BACKGROUND */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 153, 0, 0.04), transparent 40%)`
          }}
        />

        {/* --- HERO SECTION --- */}
        <main className="relative flex items-center justify-center overflow-hidden pt-32 pb-32 min-h-[90vh]">
          
          {/* TRAPPED TELEMETRY: Floating Tech Terms */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {particleTelemetry.map((p, idx) => (
              <div 
                key={idx}
                className="matrix-particle absolute bottom-[-10%] text-[#FF9900] font-mono font-bold whitespace-nowrap opacity-40 drop-shadow-[0_0_8px_rgba(255,153,0,0.5)]"
                style={{ 
                  left: `${p.left}%`, 
                  animationDuration: `${p.duration}s`, 
                  animationDelay: `${p.delay}s`, 
                  fontSize: `${p.size}px` 
                }}
              >
                {p.text}
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9900]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] z-0"></div>

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
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto md:cursor-none">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[#FF9900] text-black px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:bg-white hover:shadow-[0_0_30px_rgba(255,153,0,0.4)] transition-all duration-300 text-center scale-100 hover:scale-105 active:scale-95 md:cursor-none">
                  <Code2 size={18} className="stroke-[2.5]" />
                  <span>START_BUILDING</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="#events" className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-white/20 text-slate-300 px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 text-center scale-100 hover:scale-105 active:scale-95 md:cursor-none">
                  <span>VIEW_EVENTS</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </main>

        {/* --- DYNAMIC STACK WITH SCROLL REVEALS --- */}
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