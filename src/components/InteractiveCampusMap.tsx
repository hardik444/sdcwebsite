"use client";

import { useState } from "react";

interface CampusLocation {
  id: string;
  name: string;
  building: string;
  floor: string;
  capacity: string;
  status: string;
  desc: string;
  events: string[];
  coords: { x: number; y: number };
}

const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: "loc-1",
    name: "Academic Block 1 (AB-1) • SDC Core HQ",
    building: "Academic Block 1 (AB-1)",
    floor: "2nd Floor, Room 214",
    capacity: "60 Developers",
    status: "PRIMARY SDC HQ",
    desc: "Flagship academic block housing SDC Innovation Lab, server racks, high-speed IoT testbeds, and dev workstations.",
    events: ["Weekly SDC Dev Sprints", "Core Officer Meetings", "WEB-VIBE Labs"],
    coords: { x: 28, y: 22 },
  },
  {
    id: "loc-2",
    name: "Lab Complex",
    building: "Lab Complex Building",
    floor: "Ground to 3rd Floor",
    capacity: "350 Workstations",
    status: "COMPUTING LABS",
    desc: "Advanced computing labs with Linux terminals, hardware rigs, and AI training servers.",
    events: ["Sheryians Web Workshop", "Hands-on Coding Labs"],
    coords: { x: 14, y: 12 },
  },
  {
    id: "loc-3",
    name: "Academic Block 2 (AB-2)",
    building: "Academic Block 2 (AB-2)",
    floor: "3rd Floor GPU HPC Lab",
    capacity: "120 Workstations",
    status: "AI & ROBOTICS LAB",
    desc: "High-performance GPU cluster center for Deep Learning, PyTorch research & Web3 development.",
    events: ["Ai-CON Speaker Sessions", "Rust & WASM Workshop"],
    coords: { x: 74, y: 76 },
  },
  {
    id: "loc-4",
    name: "Central Plaza & Outdoor Arena",
    building: "Central Campus Plaza",
    floor: "Outdoor Arena",
    capacity: "1,200 Capacity",
    status: "CYBERHACK VENUE",
    desc: "Vibrant location for community networking, club tech orientation, and hackathon keynotes.",
    events: ["CYBERHACK 2026 Keynotes", "Annual Tech Summit"],
    coords: { x: 48, y: 45 },
  },
];

export default function InteractiveCampusMap() {
  const [selectedLoc, setSelectedLoc] = useState<CampusLocation>(CAMPUS_LOCATIONS[0]);

  return (
    <section id="campus-map" className="section-padding bg-[#0e051c]/60">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-map-marked-alt"></i> VIT BHOPAL CAMPUS
          </div>
          <h2 className="section-title">Interactive Campus Map</h2>
          <p className="section-subtitle">
            Tap markers on your phone or desktop to explore Academic Block 1 (AB-1), Lab Complex, and Academic Block 2 (AB-2).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mobile Responsive Touch Map Container */}
          <div className="lg:col-span-2 relative h-[360px] sm:h-[460px] lg:h-[520px] bg-[#090314] rounded-2xl border-2 border-[#FF4500] shadow-[0_0_35px_rgba(255,69,0,0.35)] overflow-hidden">
            {/* SVG Map Graphics */}
            <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 69, 0, 0.08)" strokeWidth="1" />
                </pattern>
                <linearGradient id="lakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8A00FF" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              <rect width="1000" height="600" fill="url(#gridPattern)" />

              {/* Land Zones */}
              <path d="M 50 40 L 380 40 L 380 220 L 50 220 Z" fill="rgba(255, 69, 0, 0.07)" stroke="rgba(255, 69, 0, 0.25)" strokeWidth="1.5" />
              <path d="M 420 180 Q 480 250 460 320 Q 440 380 500 420 C 540 450 600 410 580 340 Z" fill="url(#lakeGrad)" stroke="#00F0FF" strokeWidth="2" />
              <path d="M 620 380 L 940 380 L 940 560 L 620 560 Z" fill="rgba(57, 255, 20, 0.07)" stroke="rgba(57, 255, 20, 0.25)" strokeWidth="1.5" />

              {/* Roads */}
              <path d="M 40 30 L 960 30 L 960 570 L 40 570 Z" fill="none" stroke="#FF4500" strokeWidth="4" opacity="0.7" />
              <path d="M 40 30 L 960 30 L 960 570 L 40 570 Z" fill="none" stroke="#FFDF00" strokeWidth="1.5" strokeDasharray="12,12" />

              <path d="M 40 230 L 420 230 C 580 230 600 370 600 570" fill="none" stroke="#00F0FF" strokeWidth="4" opacity="0.8" />
              <path d="M 40 230 L 420 230 C 580 230 600 370 600 570" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8,8" />

              <path d="M 380 30 L 380 570" fill="none" stroke="#FF007F" strokeWidth="3" opacity="0.6" />
              <path d="M 620 30 L 620 570" fill="none" stroke="#39FF14" strokeWidth="3" opacity="0.6" />

              {/* Vector Building Blocks */}
              <g transform="translate(240, 100)">
                <rect x="0" y="0" width="85" height="65" rx="8" fill="rgba(255, 69, 0, 0.25)" stroke="#FF4500" strokeWidth="2" />
                <text x="42" y="38" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">AB-1</text>
              </g>

              <g transform="translate(100, 50)">
                <rect x="0" y="0" width="75" height="50" rx="6" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" strokeWidth="2" />
                <text x="37" y="30" textAnchor="middle" fill="#00F0FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">LABS</text>
              </g>

              <g transform="translate(700, 420)">
                <rect x="0" y="0" width="90" height="70" rx="8" fill="rgba(57, 255, 20, 0.25)" stroke="#39FF14" strokeWidth="2" />
                <text x="45" y="42" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">AB-2</text>
              </g>
            </svg>

            {/* Mobile Touch-Optimized Location Markers */}
            {CAMPUS_LOCATIONS.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;

              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 touch-manipulation p-2"
                >
                  <div className={`absolute inset-0 rounded-full ${isSelected ? "bg-[#FF007F]/40 animate-ping" : "bg-[#FF4500]/30 animate-pulse"}`} />
                  
                  <div
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-r from-[#FF007F] to-[#00F0FF] scale-125 shadow-[0_0_25px_#FF007F] border-2 border-white"
                        : "bg-gradient-to-r from-[#FF4500] to-[#39FF14] shadow-[0_0_15px_#FF4500]"
                    }`}
                  >
                    <i className={loc.id === "loc-1" ? "fas fa-map-marker-alt" : loc.id === "loc-2" ? "fas fa-laptop-code" : loc.id === "loc-3" ? "fas fa-microchip" : "fas fa-university"}></i>
                  </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-bold text-white bg-black/90 px-2 sm:px-3 py-1 rounded-lg border border-[#FF4500] mt-1 shadow-[0_0_15px_rgba(255,69,0,0.6)]">
                    {loc.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location Details Info Box */}
          <div className="glass-card border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.25)] flex flex-col justify-between p-4 sm:p-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="event-type-badge offline text-[10px] sm:text-xs">{selectedLoc.status}</span>
                <span className="text-xs text-zinc-300 font-semibold">
                  <i className="fas fa-users text-[#39FF14]"></i> {selectedLoc.capacity}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">{selectedLoc.name}</h3>
              <p className="text-xs text-[#00F0FF] font-semibold mb-3">
                <i className="fas fa-building"></i> {selectedLoc.building} • {selectedLoc.floor}
              </p>

              <p className="text-xs text-zinc-300 mb-4 leading-relaxed">{selectedLoc.desc}</p>

              <h4 className="text-[11px] uppercase text-zinc-400 font-bold mb-2">Hosted Events & Sprints:</h4>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedLoc.events.map((ev, idx) => (
                  <span
                    key={idx}
                    className="skill-tag bg-[#FF4500]/20 text-[#FF4500] border border-[#FF4500]/40 font-semibold text-[11px]"
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full text-center text-xs py-3 mt-auto"
            >
              <i className="fas fa-directions"></i> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
