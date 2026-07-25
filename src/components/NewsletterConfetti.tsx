"use client";

import { useState, FormEvent } from "react";
import confetti from "canvas-confetti";

export default function NewsletterConfetti() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
    alert(`🎉 Subscribed! Welcome ${email} to the SDC Cyber Digest.`);
    setEmail("");
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="glass-card text-center max-w-3xl mx-auto p-10 sm:p-16 border-[#FF4500] shadow-[0_0_35px_rgba(255,69,0,0.4)]">
          <h2 className="text-3xl font-bold text-white mb-3">Subscribe to SDC Cyber Digest</h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-8">
            Get weekly updates on hackathons, tech workshops, open source bounties, and campus placement drives.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your college email..."
              required
              className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00F0FF]"
            />
            <button type="submit" className="btn-primary">
              Subscribe <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
