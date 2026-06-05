"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

// The Live Decryption/Scramble Effect Component - Smoothed and Slowed
const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0101";

  const triggerScramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3; // Reduced speed for smoother visual tracking
    }, 40); // Slower interval timing
  };

  return (
    <span className={className} onMouseEnter={triggerScramble}>
      {displayText}
    </span>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#events" },
    {name: "AGENDA", href: "#agenda" },
    { name: "GALLERY", href: "#gallery" }, 
    { name: "TEAM", href: "#team" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-[#0B1120]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-[#FF9900] text-black p-2.5 rounded-sm font-bold flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
              <Terminal size={20} className="stroke-[2.5]" />
            </div>
            <div className="flex flex-col justify-center cursor-crosshair">
              <ScrambleText 
                text="AWS BUILDER GROUP" 
                className="font-mono font-bold text-lg text-white tracking-tight leading-none group-hover:text-[#FF9900] transition-colors"
              />
              <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-1">
                <ScrambleText text="SSTC CHAPTER" />
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 text-xs font-mono tracking-widest transition-colors duration-300 group cursor-crosshair ${
                  index === 0 ? "text-[#FF9900]" : "text-slate-400 hover:text-white"
                }`}
              >
                <ScrambleText text={link.name} />
                <span className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left transition-transform duration-300 ${
                  index === 0 ? "bg-[#FF9900] scale-x-100" : "bg-[#FF9900] scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="relative overflow-hidden bg-transparent border border-[#FF9900]/50 text-[#FF9900] hover:text-black text-xs font-mono tracking-widest px-6 py-2.5 rounded-sm group transition-all duration-300">
              <span className="relative z-10 font-bold">JOIN_COMMUNITY</span>
              <div className="absolute inset-0 bg-[#FF9900] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
          </div>

          <button
            className="md:hidden text-white hover:text-[#FF9900] focus:outline-none p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-2xl border-b border-white/10 absolute w-full left-0 z-40">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-4 px-4 text-sm font-mono tracking-widest text-slate-300 hover:text-[#FF9900] hover:bg-white/5 border-l-2 border-transparent hover:border-[#FF9900] transition-all"
                onClick={() => setIsOpen(false)}
              >
                <ScrambleText text={link.name} />
              </a>
            ))}
            <div className="pt-6 px-2">
              <button className="w-full bg-[#FF9900] text-black hover:bg-white py-3.5 rounded-sm font-mono tracking-widest font-bold transition-colors">
                JOIN_COMMUNITY
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}