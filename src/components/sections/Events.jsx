import { Calendar, Clock, MapPin, Terminal, ArrowRight, Zap } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Bootcamp",
      date: "OCT 15",
      year: "2026",
      time: "10:00 AM - 4:00 PM",
      location: "SSTC Main Auditorium",
      type: "WORKSHOP",
      status: "REGISTRATION_OPEN",
      description: "A complete zero-to-hero bootcamp covering core AWS services, IAM, EC2, and S3. Perfect for beginners aiming for their first cloud certification.",
    },
    {
      id: 2,
      title: "Serverless Hackathon: Build in a Day",
      date: "OCT 28",
      year: "2026",
      time: "9:00 AM - 9:00 PM",
      location: "CSE Labs, SSTC",
      type: "HACKATHON",
      status: "UPCOMING",
      description: "Form a squad and build a scalable web app using AWS Lambda, API Gateway, and DynamoDB. Prizes for the most innovative architecture.",
    },
    {
      id: 3,
      title: "Tech Talk: AI & Machine Learning on AWS",
      date: "NOV 05",
      year: "2026",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual (Discord Hub)",
      type: "GUEST_SPEAKER",
      status: "UPCOMING",
      description: "Join our guest speaker from the industry as they break down how to deploy machine learning models using Amazon SageMaker.",
    }
  ];

  return (
    <section id="events" className="relative py-28 z-10 max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF9900]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF9900] to-transparent"></span>
          <h2 className="text-xs font-mono text-[#FF9900] tracking-[0.25em] uppercase font-bold">
            EXECUTION_LOG: EVENTS
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            Scheduled <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500">
              Deployments.
            </span>
          </h3>
          <button className="text-sm font-mono text-[#FF9900] hover:text-white flex items-center gap-2 transition-colors group">
            <Zap size={16} className="text-[#FF9900] group-hover:animate-pulse" />
            VIEW_ALL_RECORDS 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Upgraded Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div 
            key={event.id} 
            className="group relative bg-[#050810]/80 border border-white/10 rounded-sm overflow-hidden backdrop-blur-md hover:border-[#FF9900]/50 hover:shadow-[0_0_30px_rgba(255,153,0,0.1)] transition-all duration-500 flex flex-col"
          >
            {/* Top Accent Loading Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            {/* Inner Content Padding */}
            <div className="p-8 flex flex-col h-full relative z-10">
              
              {/* Date & Status Row */}
              <div className="flex justify-between items-start mb-8">
                {/* Visual Calendar Block */}
                <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-sm w-16 h-16 group-hover:border-[#FF9900]/40 group-hover:bg-[#FF9900]/10 transition-colors duration-500 shadow-lg">
                  <span className="text-[10px] font-mono text-[#FF9900] font-bold">{event.date.split(' ')[0]}</span>
                  <span className="text-xl font-bold text-white leading-none mt-1">{event.date.split(' ')[1]}</span>
                </div>
                
                {/* Status Pill */}
                <div className={`text-[9px] font-mono font-bold tracking-widest px-2.5 py-1.5 rounded-sm border ${
                  event.status === "REGISTRATION_OPEN" 
                    ? "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/30 animate-pulse" 
                    : "bg-white/5 text-slate-400 border-white/10"
                }`}>
                  [{event.status}]
                </div>
              </div>

              {/* Event Type & Title */}
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-[#FF9900]" />
                <span className="text-[10px] font-mono text-[#FF9900] tracking-widest uppercase">{event.type}</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-500">
                {event.title}
              </h4>
              
              <p className="text-sm text-slate-400 font-mono leading-relaxed mb-8 flex-grow">
                {event.description}
              </p>

              {/* Metadata & CTA */}
              <div className="mt-auto">
                <div className="space-y-3 py-6 border-t border-white/5 border-dashed">
                  <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                    <Clock size={14} className="text-slate-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                    <MapPin size={14} className="text-slate-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Interactive CTA */}
                <button className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white group-hover:bg-[#FF9900] group-hover:border-[#FF9900] group-hover:text-black transition-all duration-300 shadow-md">
                  <span className="tracking-widest font-bold">INITIALIZE_JOIN</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Subtle Dotted Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

    </section>
  );
}