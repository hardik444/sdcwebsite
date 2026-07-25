"use client";

import { useState } from "react";

export default function PhotoGallery() {
  const [submitted, setSubmitted] = useState(false);

  const handleUploadSubmit = () => {
    setSubmitted(true);
    alert("📸 Thank you! Your event photo submission has been sent for SDC Core Team review.");
  };

  return (
    <section id="gallery" className="section-padding bg-[#0e051c]/60">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-images"></i> Highlights
          </div>
          <h2 className="section-title">SDC Photo Gallery</h2>
          <p className="section-subtitle">
            Official Software Development Club campus event gallery.
          </p>
        </div>

        {/* Clean Empty Gallery Card */}
        <div className="glass-card max-w-2xl mx-auto text-center p-8 sm:p-12 border-[#FF007F] shadow-[0_0_40px_rgba(255,0,127,0.2)]">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FF007F]/15 border-2 border-[#FF007F] flex items-center justify-center text-[#FF007F] text-3xl shadow-[0_0_20px_#FF007F]">
            <i className="fas fa-camera-retro"></i>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Gallery Photos Updating Soon
          </h3>

          <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
            Official SDC event photos, hackathon ceremony memories, and workshop highlights for the 2026 season are currently being curated.
          </p>

          {submitted ? (
            <div className="bg-[#39FF14]/15 border border-[#39FF14] text-[#39FF14] p-4 rounded-xl text-xs font-bold inline-flex items-center gap-2">
              <i className="fas fa-check-circle"></i> Event Photo Submitted for Review
            </div>
          ) : (
            <button
              onClick={handleUploadSubmit}
              className="btn-primary text-xs px-6 py-3"
            >
              <i className="fas fa-upload"></i> Submit Event Photo to SDC
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
