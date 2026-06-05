import { Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Team() {
  // Data Array: Easily swap out team members every semester
  const teamMembers = [
    {
      id: 1,
      name: "Uddyan Sahu",
      role: "CHAPTER_LEAD",
      // Using a placeholder API that generates an avatar based on the name
      image: "https://ui-avatars.com/api/?name=Uddyan+Sahu&background=FF9900&color=000&size=256&font-size=0.33",
      github: "https://github.com/userlovescoding",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Cloud Architect",
      role: "TECHNICAL_LEAD",
      image: "https://ui-avatars.com/api/?name=Cloud+Architect&background=1E293B&color=fff&size=256",
      github: "#",
      linkedin: "#"
    },
    {
      id: 3,
      name: "UX Developer",
      role: "DESIGN_LEAD",
      image: "https://ui-avatars.com/api/?name=UX+Developer&background=1E293B&color=fff&size=256",
      github: "#",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Community Ops",
      role: "OPERATIONS_LEAD",
      image: "https://ui-avatars.com/api/?name=Community+Ops&background=1E293B&color=fff&size=256",
      github: "#",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="relative py-24 z-10 max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="mb-16 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-widest uppercase">
            TEAM_MANIFEST: CORE_NODE
          </h2>
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          The Core <span className="text-slate-500">Node.</span>
        </h3>
        <p className="text-slate-400 font-mono text-sm mt-4 max-w-2xl">
          Meet the engineers, architects, and designers driving the SSTC AWS Builder Group.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm hover:border-[#FF9900]/50 transition-all duration-500"
          >
            {/* Image Container with Grayscale to Color Hover Effect */}
            <div className="relative aspect-square overflow-hidden bg-[#050810]">
              <Image 
                src={member.image} 
                alt={member.name}
                width={256}
                height={256}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
            </div>

            {/* Content Details */}
            <div className="p-6 relative z-10 -mt-10">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={12} className="text-[#FF9900]" />
                <span className="text-[10px] font-mono text-[#FF9900] tracking-widest border border-[#FF9900]/20 bg-[#FF9900]/10 px-2 py-0.5 rounded-sm">
                  [{member.role}]
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
              
              {/* Social Links using react-icons/fa */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                <a href={member.github} className="text-slate-400 hover:text-white transition-colors">
                  <FaGithub size={18} />
                </a>
                <a href={member.linkedin} className="text-slate-400 hover:text-[#FF9900] transition-colors">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}