"use client";

import { useState } from "react";
import { Terminal, Send, Mail, User, Code, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "cloud",
    payload: ""
  });
  const [status, setStatus] = useState("IDLE"); // IDLE, TRANSMITTING, SUCCESS

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING");
    
    // Web3Forms API Payload
    const payload = {
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // <-- Paste your key here!
      name: formData.name,
      email: formData.email,
      track: formData.track,
      message: formData.payload,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", track: "cloud", payload: "" });
      } else {
        setStatus("IDLE");
        alert("Transmission Failed. Please try again.");
      }
    } catch (error) {
      setStatus("IDLE");
      alert("Network Error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="relative py-24 z-10 max-w-4xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="mb-12 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-widest uppercase">
            NETWORK_HANDSHAKE: CONTACT
          </h2>
          <span className="h-[1px] w-8 bg-[#FF9900]"></span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Establish <span className="text-[#FF9900]">Handshake.</span>
        </h3>
        <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl">
          Ready to deploy? Ping our network core to join the AWS Builder Group or log an inquiry.
        </p>
      </div>

      {/* Terminal Form Window */}
      <div className="bg-[#050810] border border-white/10 rounded-sm overflow-hidden shadow-2xl relative">
        
        {/* Terminal Header Bar */}
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 text-center flex items-center justify-center gap-2 text-slate-500 font-mono text-[10px] tracking-widest">
            <Terminal size={12} />
            <span>join_network.sh</span>
          </div>
        </div>

        {/* Form Body / Terminal Console */}
        {status === "SUCCESS" ? (
          <div className="p-12 text-center flex flex-col items-center justify-center space-y-4 font-mono">
            <CheckCircle2 size={40} className="text-[#FF9900] animate-pulse" />
            <h4 className="text-white text-lg font-bold">TRANSMISSION_SUCCESSFUL</h4>
            <p className="text-slate-400 text-xs max-w-sm">
              Payload successfully accepted by the node. Check your console logs; our team will establish contact shortly.
            </p>
            <button 
              onClick={() => setStatus("IDLE")}
              className="text-xs text-[#FF9900] underline mt-4 hover:text-white transition-colors"
            >
              [ send_another_payload ]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#FF9900] tracking-wider flex items-center gap-2">
                  <User size={14} /> NAME_
                </label>
                <input 
                  type="text" 
                  placeholder="root_user" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#FF9900]/50 focus:bg-[#FF9900]/5 transition-all"
                  required
                  disabled={status === "TRANSMITTING"}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#FF9900] tracking-wider flex items-center gap-2">
                  <Mail size={14} /> EMAIL_
                </label>
                <input 
                  type="email" 
                  placeholder="ping@domain.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#FF9900]/50 focus:bg-[#FF9900]/5 transition-all"
                  required
                  disabled={status === "TRANSMITTING"}
                />
              </div>
            </div>

            {/* Specialty Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#FF9900] tracking-wider flex items-center gap-2">
                <Code size={14} /> PRIMARY_TRACK_
              </label>
              <select 
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                className="w-full bg-[#0B1120] border border-white/10 rounded-sm px-4 py-3 text-slate-300 font-mono text-sm focus:outline-none focus:border-[#FF9900]/50 appearance-none cursor-pointer"
                disabled={status === "TRANSMITTING"}
              >
                <option value="cloud">Cloud Architecture</option>
                <option value="frontend">Frontend / UI</option>
                <option value="backend">Backend / API</option>
                <option value="ml">Machine Learning</option>
                <option value="ops">DevOps / CI-CD</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#FF9900] tracking-wider flex items-center gap-2">
                <Terminal size={14} /> PAYLOAD_
              </label>
              <textarea 
                rows="4" 
                placeholder="Enter details or portfolio profiles..." 
                value={formData.payload}
                onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#FF9900]/50 focus:bg-[#FF9900]/5 transition-all resize-none"
                required
                disabled={status === "TRANSMITTING"}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === "TRANSMITTING"}
              className="group relative w-full flex items-center justify-center gap-3 bg-[#FF9900] text-black px-8 py-4 rounded-sm font-mono tracking-widest font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "TRANSMITTING" ? (
                  <>
                    UPLINKING_DATA... <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    EXECUTE_TRANSMISSION <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
            </button>

          </form>
        )}
      </div>

    </section>
  );
}