"use client";

import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { Camera, Download, ShieldCheck, Cpu, Fingerprint } from "lucide-react";

export default function BadgeGenerator() {
  const [name, setName] = useState("ALEX MERCER");
  const [track, setTrack] = useState("CLOUD ARCHITECT");
  const [image, setImage] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  
  const [barcodeId, setBarcodeId] = useState("00000000");
  
  const badgeRef = useRef(null);

  useEffect(() => {
    // Run asynchronously to bypass strict synchronous render warnings
    const generateBarcode = setTimeout(() => {
      const randomHex = Math.floor(Math.random() * 100000000).toString(16).toUpperCase();
      setBarcodeId(randomHex);
    }, 0);
    
    return () => clearTimeout(generateBarcode);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const downloadBadge = async () => {
  if (!badgeRef.current) return;

  setIsDownloading(true);

  try {
    const rect = badgeRef.current.getBoundingClientRect();
    const canvas = await html2canvas(badgeRef.current, {
      width: rect.width,
      height: rect.height,
      scale: 4,
      backgroundColor: "#050810",
      useCORS: true,
      logging: false,

      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement("style");

        style.innerHTML = `
          * {
            color-scheme: light !important;
          }

          *,
          *::before,
          *::after {
            --tw-ring-color: rgba(255,255,255,0.5) !important;
          }
        `;

        clonedDoc.head.appendChild(style);

        clonedDoc.querySelectorAll("*").forEach((el) => {
          const computed =
            clonedDoc.defaultView?.getComputedStyle(el);

          if (!computed) return;

          [
            "color",
            "backgroundColor",
            "borderTopColor",
            "borderRightColor",
            "borderBottomColor",
            "borderLeftColor",
          ].forEach((prop) => {
            const value = computed[prop];

            if (
              value?.includes("oklch(") ||
              value?.includes("lab(") ||
              value?.includes("lch(") ||
              value?.includes("oklab(")
            ) {
              if (prop.includes("background")) {
                el.style.backgroundColor = "#050810";
              } else if (prop.includes("border")) {
                el.style.borderColor = "#ffffff";
              } else {
                el.style.color = "#ffffff";
              }
            }
          });
        });
      },
    });

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");

    link.href = image;
    link.download = `AWS_Builder_${name.replace(/\s+/g, "_")}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Badge generation failed", error);
  } finally {
    setIsDownloading(false);
  }
};

  return (
    <section id="id-generator" className="relative py-28 z-10 max-w-7xl mx-auto px-6 overflow-hidden">
      
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FF9900]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="mb-16 text-center flex flex-col items-center relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-widest uppercase font-bold">
            IDENTITY_MATRIX: GENERATOR
          </h2>
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Claim Your <span className="text-[#FF9900]">Access Badge.</span>
        </h3>
        <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl">
          Generate your official AWS Student Builder credentials. Download and deploy to your social networks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm backdrop-blur-md shadow-2xl">
          <div className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#FF9900] tracking-wider">OPERATIVE_NAME</label>
              <input 
                type="text" 
                maxLength="18"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
                placeholder="ENTER FULL NAME"
                className="w-full bg-[#050810] border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#FF9900]/50 transition-all uppercase"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[#FF9900] tracking-wider">SPECIALTY_TRACK</label>
              <select 
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                className="w-full bg-[#050810] border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#FF9900]/50 appearance-none cursor-pointer"
              >
                <option value="CLOUD ARCHITECT">CLOUD ARCHITECT</option>
                <option value="FRONTEND ENGINEER">FRONTEND ENGINEER</option>
                <option value="BACKEND ENGINEER">BACKEND ENGINEER</option>
                <option value="DATA SCIENTIST">DATA SCIENTIST</option>
                <option value="DEVOPS SPECIALIST">DEVOPS SPECIALIST</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[#FF9900] tracking-wider">BIOMETRIC_SCAN (PHOTO)</label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-sm hover:border-[#FF9900]/50 hover:bg-white/5 transition-all cursor-pointer group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera size={24} className="text-slate-500 mb-2 group-hover:text-[#FF9900] transition-colors" />
                  <p className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">Click to upload avatar</p>
                </div>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>

            <button 
              onClick={downloadBadge}
              disabled={isDownloading}
              className="w-full flex items-center justify-center gap-3 bg-[#FF9900] text-black px-6 py-4 rounded-sm font-mono tracking-widest font-bold hover:bg-white transition-all duration-300 disabled:opacity-50"
            >
              {isDownloading ? "COMPILE_IMAGE..." : "DOWNLOAD_BADGE"}
              <Download size={18} className="stroke-[2.5]" />
            </button>

          </div>
        </div>

        <div className="flex justify-center items-center p-4">
          
          <div 
            ref={badgeRef}
            className="w-[320px] h-[560px] relative bg-[#0B1120] rounded-lg overflow-hidden border border-[#FF9900]/40 flex flex-col"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 border border-white/20 rounded-full bg-[#050810]"></div>

            <div className="mt-12 text-center border-b border-[#FF9900]/20 pb-4 mx-6 relative z-10">
              <div className="flex justify-center mb-2">
                <Cpu size={28} className="text-[#FF9900]" />
              </div>
              <h2 className="font-mono text-sm tracking-[0.2em] text-white font-bold">AWS BUILDER GROUP</h2>
              <p className="font-mono text-[9px] tracking-widest text-[#FF9900]">SSTC CHAPTER // ACCESS_GRANTED</p>
            </div>

            <div className="flex justify-center my-6 relative z-10">
              <div className="w-32 h-32 rounded-sm border-2 border-[#FF9900] p-1 relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white"></div>
                
                {image ? (
  <div
    className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
    onMouseDown={(e) => {
      setDragging(true);
      dragStart.current = {
        x: e.clientX - imgPos.x,
        y: e.clientY - imgPos.y,
      };
    }}
    onMouseMove={(e) => {
      if (!dragging) return;

      setImgPos({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }}
    onMouseUp={() => setDragging(false)}
    onMouseLeave={() => setDragging(false)}
    onWheel={(e) => {
      e.preventDefault();
      setScale((prev) =>
        Math.min(Math.max(prev + e.deltaY * -0.001, 0.5), 3)
      );
    }}
  >
    <img
      src={image}
      alt="Avatar"
      draggable={false}
      className="w-full h-full object-cover grayscale contrast-125 select-none"
      style={{
        transform: `translate(${imgPos.x}px, ${imgPos.y}px) scale(${scale})`,
      }}
    />
  </div>
) : (
                  <div className="w-full h-full bg-[#FF9900]/10 flex items-center justify-center">
                    <ShieldCheck size={40} className="text-[#FF9900]/40" />
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 relative z-10 flex-grow">
              <div className="mb-4">
                <p className="font-mono text-[9px] text-slate-500 tracking-widest mb-1">ID_NAME</p>
                <p
                className="font-bold text-white leading-none max-w-[260px]"
                style={{
                    fontSize: name.length > 12 ? "22px" : "28px",
                }}
                >
                {name || "AWAITING_INPUT"}
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-slate-500 tracking-widest mb-1">CLEARANCE_LEVEL</p>
                <p className="font-mono text-sm text-[#FF9900] tracking-widest">{track}</p>
              </div>
            </div>

            <div className="mt-auto border-t border-white/10 p-6 flex justify-between items-end relative z-10 bg-[#050810]/50">
              <div>
                <div className="flex gap-1 h-8 opacity-70">
                  <div className="w-1 bg-white"></div><div className="w-2 bg-white"></div><div className="w-1 bg-white"></div>
                  <div className="w-3 bg-white"></div><div className="w-1 bg-white"></div><div className="w-2 bg-white"></div>
                  <div className="w-1 bg-white"></div><div className="w-3 bg-white"></div><div className="w-1 bg-white"></div>
                  <div className="w-2 bg-white"></div>
                </div>
                <p className="font-mono text-[8px] text-slate-500 tracking-widest mt-1">0x{barcodeId}</p>
              </div>
              <Fingerprint size={32} className="text-[#FF9900] opacity-50" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}