import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050810] text-slate-400 overflow-hidden font-sans">
      
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4 group cursor-crosshair w-fit">
              <div className="bg-[#FF9900] text-black px-2 py-1 font-mono font-bold text-xs tracking-wider group-hover:bg-white transition-colors shadow-[0_0_10px_rgba(255,153,0,0.2)]">
                {'>'} ASBG_
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                AWS Builder Group
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md text-sm font-mono">
              Empowering the next generation of cloud architects. We build, deploy, and scale together at Shri Shankaracharya Technical Campus.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900] mb-6">

            </h3>
            <ul className="space-y-4 text-sm font-mono">
              {['Home', 'About Platform', 'Tech Events', 'Core Team'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:translate-x-2 flex items-center gap-2 transition-all duration-300 group">
                    <span className="text-[#FF9900] opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100">{'>'}</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900] mb-6">

            </h3>
            <ul className="space-y-4 text-sm font-mono">
              {['Architecture', 'Serverless', 'Machine Learning', 'DevOps'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:translate-x-2 flex items-center gap-2 transition-all duration-300 group">
                    <span className="text-[#FF9900] opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100">{'>'}</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900] mb-6">

            </h3>
            <ul className="space-y-4 text-sm font-mono">
              {[
                { name: 'LinkedIn', icon: FaLinkedin },
                { name: 'Twitter', icon: FaTwitter },
                { name: 'GitHub', icon: FaGithub },
                { name: 'Email', icon: FaEnvelope }
              ].map((item) => (
                <li key={item.name}>
                  <a href="#" className="flex items-center gap-3 hover:text-[#FF9900] transition-colors duration-300 group">
                    <item.icon size={16} className="text-slate-500 group-hover:text-[#FF9900] transition-colors" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left text-xs text-slate-600 font-mono">
            <p>© {currentYear} ASBG_SSTC. ALL RIGHTS RESERVED.</p>
            <span className="hidden sm:inline text-white/10">|</span>
            <p className="text-[#FF9900]/70 font-bold">BUILD_ON.</p>
          </div>
          <p className="text-center md:text-right max-w-md text-[10px] leading-relaxed text-slate-600">
            Disclaimer: This is an independent student community group. Content and viewpoints expressed here are entirely independent of Amazon Web Services, Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}