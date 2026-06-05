import Image from "next/image";
import { Camera, ArrowUpRight } from "lucide-react";

export default function Gallery() {
  // Data Array: Replace the Unsplash URLs with your actual event photos later
  const galleryItems = [
    { 
      id: 1, 
      title: "HackOMania 2K26", 
      category: "HACKATHON", 
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2" // Makes this image larger
    },
    { 
      id: 2, 
      title: "TechSprint Ideation", 
      category: "WORKSHOP", 
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1" 
    },
    { 
      id: 3, 
      title: "The Big Code 2026", 
      category: "COMPETITION", 
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1" 
    },
    { 
      id: 4, 
      title: "P.A.D.L.A.B Pioneers Architecture", 
      category: "PROJECT_SHOWCASE", 
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1" 
    }
  ];

  return (
    <section id="gallery" className="relative py-24 z-10 max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-widest uppercase">
            GALLERY_LOG: COMMUNITY
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Community <br />
            <span className="text-slate-500">In Action.</span>
          </h3>
          <p className="text-slate-400 font-mono text-sm max-w-md">
            Visual logs of our recent deployments, sprints, and builder gatherings.
          </p>
        </div>
      </div>

      {/* Staggered CSS Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className={`group relative rounded-sm overflow-hidden bg-white/5 border border-white/10 ${item.span}`}
          >
            {/* Background Image */}
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            
            {/* Interactive Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

            {/* Content Details (Slides up on hover) */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-2">
                <Camera size={12} className="text-[#FF9900]" />
                <span className="text-[10px] font-mono text-[#FF9900] tracking-widest bg-[#FF9900]/10 px-2 py-0.5 rounded-sm backdrop-blur-md">
                  [{item.category}]
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-white tracking-tight">{item.title}</h4>
                <div className="w-8 h-8 rounded-full bg-[#FF9900] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight size={16} className="stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}