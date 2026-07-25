"use client";

import { useState, useEffect } from "react";

export default function HackathonHub() {
  const [timeLeft, setTimeLeft] = useState({ days: 20, hours: 14, mins: 32, secs: 10 });

  useEffect(() => {
    const target = new Date("2026-08-14T09:00:00+05:30").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hackathon" className="section-padding bg-[#0e051c]/60">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-fire"></i> Flagship Event
          </div>
          <h2 className="section-title">CYBERHACK 2026</h2>
          <p className="section-subtitle">
            VIT Bhopal's premier 36-hour national hackathon. Build the future with ₹5,00,000+ prize pool.
          </p>
        </div>

        <div className="glass-card text-center border-[#FF4500] shadow-[0_0_40px_rgba(255,69,0,0.4)] p-10 sm:p-16">
          <h3 className="text-sm text-zinc-400 uppercase tracking-widest mb-3">
            Countdown to Hack Night
          </h3>
          <div className="font-mono text-3xl sm:text-6xl font-extrabold text-white shadow-[0_0_20px_#FF4500] mb-8">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.mins}m : {timeLeft.secs}s
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => alert("🎉 Registered for CYBERHACK 2026! Check your Events tab for QR Pass.")}
              className="btn-primary"
            >
              <i className="fas fa-bolt"></i> Register Hackathon Team
            </button>
            <button
              onClick={() =>
                alert("Teammate Finder: 14 student hackers looking for teammates in AI & Frontend!")
              }
              className="btn-secondary"
            >
              <i className="fas fa-user-friends"></i> Find Teammates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
