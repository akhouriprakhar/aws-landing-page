import { Clock, Mic, Terminal, ChevronRight } from "lucide-react";
import agendaData from "@/data/agenda.json";

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-24 z-10 max-w-5xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-widest uppercase">
            RUNTIME_SEQUENCE: AGENDA
          </h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Event <span className="text-slate-500">Pipeline.</span>
        </h3>
      </div>

      {/* Dynamic JSON Rendering Wrapper */}
      <div className="space-y-4">
        
        {/* 2. WE MAP OVER THE IMPORTED JSON FILE DIRECTLY */}
        {agendaData.map((item) => (
          <div 
            key={item.id}
            className="group relative bg-white/[0.02] border border-white/5 rounded-sm p-6 hover:border-[#FF9900]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center"
          >
            {/* Timeline Indicator */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-1 min-w-[120px]">
              <div className="flex items-center gap-2 text-[#FF9900] font-mono text-lg font-bold">
                <Clock size={16} />
                <span>{item.time}</span>
              </div>
              <div className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">
                [{item.duration}]
              </div>
            </div>

            {/* Vertical Divider (Hidden on Mobile) */}
            <div className="hidden md:block w-[1px] h-12 bg-white/10 group-hover:bg-[#FF9900]/30 transition-colors"></div>

            {/* Event Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={12} className="text-slate-400" />
                <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">
                  {item.type}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-[#FF9900] transition-colors">
                {item.title}
              </h4>
            </div>

            {/* Dynamic Speaker Details */}
            {item.speaker && (
              <div className="flex items-center gap-4 bg-[#050810]/50 p-3 border border-white/5 rounded-sm md:min-w-[250px]">
                <img 
                  src={item.speaker.avatar} 
                  alt={item.speaker.name} 
                  className="w-10 h-10 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <p className="text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                    <Mic size={12} className="text-[#FF9900]" />
                    {item.speaker.name}
                  </p>
                  <p className="text-[10px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">
                    {item.speaker.role}
                  </p>
                </div>
              </div>
            )}

            {/* Hover Action Indicator */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 hidden md:block">
              <ChevronRight className="text-[#FF9900]" size={20} />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}