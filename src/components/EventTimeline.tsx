"use client";

import { useState, useRef } from "react";
import confetti from "canvas-confetti";

interface EventItem {
  id: string;
  title: string;
  type: "offline" | "online";
  category: "hackathon" | "workshop" | "bootcamp" | "speaker";
  date: string;
  time: string;
  location: string;
  seatsTotal: number;
  seatsRemaining: number;
  desc: string;
  link?: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "evt-aicon",
    title: "Ai-CON (GenAI Speaker Sessions & Auction)",
    type: "offline",
    category: "speaker",
    date: "Upcoming 2026",
    time: "10:00 AM IST",
    location: "VIT Bhopal Auditorium x Google Crowdsource Community",
    seatsTotal: 500,
    seatsRemaining: 120,
    desc: "Groundbreaking event hosted by SDC Club and Google Crowdsource Community featuring leading experts from Google India for Generative AI sessions, auction events, interactive games, and merchandise bidding.",
    link: "https://forms.gle/MZLk6Lqk5wnaGBDi6",
  },
  {
    id: "evt-webvibe",
    title: "WEB-VIBE (Sheryians Workshop & Front-End Hackathon)",
    type: "offline",
    category: "hackathon",
    date: "Completed (Past Event)",
    time: "Full Day",
    location: "AB-1 Computing Labs, VIT Bhopal",
    seatsTotal: 300,
    seatsRemaining: 0,
    desc: "1-day hands-on workshop on Web Development by Sheryians Coding School followed by an intensive Front-End Hackathon competition.",
  },
  {
    id: "evt-cyberhack",
    title: "CYBERHACK 2026: Flagship 36-Hour National Hackathon",
    type: "offline",
    category: "hackathon",
    date: "August 14-16, 2026",
    time: "09:00 AM IST",
    location: "Central Auditorium & SDC Tech Labs, VIT Bhopal",
    seatsTotal: 400,
    seatsRemaining: 42,
    desc: "36-hour national level flagship hackathon with ₹5,00,000+ prize pool, sponsored by top dev tech startups.",
  },
  {
    id: "evt-rust",
    title: "Rust & WebAssembly Deep Dive",
    type: "online",
    category: "workshop",
    date: "August 22, 2026",
    time: "06:00 PM IST",
    location: "Discord Stage & Google Meet",
    seatsTotal: 500,
    seatsRemaining: 185,
    desc: "Build high-performance web applications using Rust compiled into WASM modules.",
  },
];

export default function EventTimeline() {
  const [filter, setFilter] = useState("all");
  const [registered, setRegistered] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const qrCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const filteredEvents = EVENTS_DATA.filter((evt) => {
    if (filter === "all") return true;
    if (filter === "offline") return evt.type === "offline";
    if (filter === "online") return evt.type === "online";
    return evt.category === filter;
  });

  const renderQRCanvas = (evtTitle: string) => {
    setTimeout(() => {
      const canvas = qrCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 220;
      canvas.height = 220;

      ctx.fillStyle = "#0c051c";
      ctx.fillRect(0, 0, 220, 220);

      ctx.fillStyle = "#00F0FF";
      for (let x = 15; x < 205; x += 14) {
        for (let y = 15; y < 205; y += 14) {
          if ((x + y) % 5 !== 0) {
            ctx.fillStyle = Math.random() > 0.4 ? "#00F0FF" : "#FF007F";
            ctx.fillRect(x, y, 10, 10);
          }
        }
      }

      const drawTarget = (tx: number, ty: number) => {
        ctx.fillStyle = "#FF4500";
        ctx.fillRect(tx, ty, 42, 42);
        ctx.fillStyle = "#0c051c";
        ctx.fillRect(tx + 6, ty + 6, 30, 30);
        ctx.fillStyle = "#39FF14";
        ctx.fillRect(tx + 12, ty + 12, 18, 18);
      };

      drawTarget(15, 15);
      drawTarget(163, 15);
      drawTarget(15, 163);
    }, 100);
  };

  const handleRegister = (evt: EventItem) => {
    if (evt.link) {
      window.open(evt.link, "_blank");
      return;
    }
    if (!registered.includes(evt.id)) {
      setRegistered([...registered, evt.id]);
    }
    setSelectedEvent(evt);
    renderQRCanvas(evt.title);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const exportCSV = () => {
    const csvRows = [
      ["Registration ID", "Event Name", "Attendee Name", "Reg Number", "Email", "Status"],
      ["REG-901", "Ai-CON Google Session", "Meet Bikhani", "22BCE10001", "meet.bikhani@vitbhopal.ac.in", "CONFIRMED"],
      ["REG-902", "WEB-VIBE Hackathon", "Shubh Gupta", "22BCE10002", "shubh.gupta@vitbhopal.ac.in", "CONFIRMED"],
      ["REG-903", "CYBERHACK 2026", "Akshat Rastogi", "22BCE10003", "akshat.rastogi@vitbhopal.ac.in", "CONFIRMED"],
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map((e) => e.join(",")).join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "SDC_Official_Event_Attendance_VIT_Bhopal.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="events" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-calendar-star"></i> SDC Official Events
          </div>
          <h2 className="section-title">Events & Hackathons</h2>
          <p className="section-subtitle">
            Explore official Software Development Club workshops, Google Crowdsource speaker sessions, and national hackathons.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          {["all", "offline", "online", "hackathon", "workshop", "speaker"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn capitalize ${filter === f ? "active" : ""}`}
            >
              {f === "all" ? "All Events" : f}
            </button>
          ))}
          <button
            onClick={() => setShowAdmin(true)}
            className="filter-btn text-[#FF007F] border-[#FF007F]"
          >
            <i className="fas fa-user-shield"></i> Admin Panel
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="timeline-container">
          {filteredEvents.map((evt) => {
            const isReg = registered.includes(evt.id);
            const isFull = evt.seatsRemaining === 0;

            return (
              <div key={evt.id} className="glass-card event-card">
                <div className="event-card-header">
                  <span className={`event-type-badge ${evt.type}`}>
                    {evt.type.toUpperCase()} • {evt.category.toUpperCase()}
                  </span>
                  <span className="event-seats">
                    {isFull ? "✅ Completed" : `🔥 ${evt.seatsRemaining} seats left`}
                  </span>
                </div>

                <h3 className="event-title">{evt.title}</h3>
                <p className="event-desc">{evt.desc}</p>

                <div className="event-meta">
                  <div className="event-meta-item">
                    <i className="far fa-calendar-alt text-[#FF4500]"></i> {evt.date} • {evt.time}
                  </div>
                  <div className="event-meta-item">
                    <i className="fas fa-map-marker-alt text-[#00F0FF]"></i> {evt.location}
                  </div>
                </div>

                <div className="mt-auto">
                  {isReg ? (
                    <button
                      onClick={() => {
                        setSelectedEvent(evt);
                        renderQRCanvas(evt.title);
                      }}
                      className="btn-secondary w-full border-[#FF007F] text-[#FF007F]"
                    >
                      <i className="fas fa-qrcode"></i> View QR Pass
                    </button>
                  ) : (
                    <button onClick={() => handleRegister(evt)} className="btn-primary w-full">
                      {isFull ? (
                        <>
                          <i className="fas fa-check-circle"></i> Event Completed
                        </>
                      ) : (
                        <>
                          <i className="fas fa-ticket-alt"></i> Register Now
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* QR Pass Modal */}
      {selectedEvent && (
        <div className="modal-backdrop active" onClick={() => setSelectedEvent(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setSelectedEvent(null)}>
              <i className="fas fa-times"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{selectedEvent.title} Pass</h3>

            <div className="text-center my-4">
              <canvas
                ref={qrCanvasRef}
                className="mx-auto rounded-xl border-2 border-[#00F0FF] shadow-[0_0_25px_#00F0FF]"
              />
            </div>

            <div className="text-sm text-zinc-400 bg-black/40 p-4 rounded-xl mb-4 space-y-1">
              <p>
                <strong>Date & Time:</strong> {selectedEvent.date} ({selectedEvent.time})
              </p>
              <p>
                <strong>Venue:</strong> {selectedEvent.location}
              </p>
              <p>
                <strong>Attendee:</strong> Alex Chen (VIT Bhopal)
              </p>
              <p>
                <strong>Status:</strong> <span className="text-[#39FF14] font-bold">VERIFIED & ACTIVE</span>
              </p>
            </div>

            <a
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                selectedEvent.title
              )}&details=${encodeURIComponent(selectedEvent.desc)}&location=${encodeURIComponent(
                selectedEvent.location
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full text-center text-sm py-2.5"
            >
              <i className="far fa-calendar-plus"></i> Add to Google Calendar
            </a>
          </div>
        </div>
      )}

      {/* Admin Panel Modal */}
      {showAdmin && (
        <div className="modal-backdrop active" onClick={() => setShowAdmin(false)}>
          <div className="modal-box max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setShowAdmin(false)}>
              <i className="fas fa-times"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <i className="fas fa-user-shield text-[#FF4500]"></i> SDC Admin Control Center
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Manage event registrations, scan attendee QR passes, and export attendance CSV.
            </p>

            <div className="flex gap-3 mb-4">
              <button onClick={exportCSV} className="btn-primary flex-1 text-xs">
                <i className="fas fa-file-csv"></i> Export Attendees CSV
              </button>
              <button
                onClick={() => alert("📷 Camera QR Scanner Simulation: Pass REG-901 Verified!")}
                className="btn-secondary flex-1 text-xs"
              >
                <i className="fas fa-camera"></i> Scan Venue QR Pass
              </button>
            </div>

            <div className="bg-black/30 p-3 rounded-lg max-h-48 overflow-y-auto text-xs text-zinc-300 space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>REG-901 • Meet Bikhani (President)</span>
                <span className="text-[#39FF14] font-bold">CONFIRMED</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>REG-902 • Shubh Gupta (Vice-President)</span>
                <span className="text-[#39FF14] font-bold">CONFIRMED</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>REG-903 • Akshat Rastogi (Treasurer)</span>
                <span className="text-[#39FF14] font-bold">CONFIRMED</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
